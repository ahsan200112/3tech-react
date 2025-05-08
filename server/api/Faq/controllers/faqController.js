const FAQ = require("../models/faqModel");

// Get All
exports.getFAQs = async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create
exports.createFAQ = async (req, res) => {
  try {
    const { question, answer, category } = req.body;
    const newFAQ = new FAQ({
      question: {
        en: question.en,
        ar: question.ar
      },
      answer: {
        en: answer.en,
        ar: answer.ar
      },
      category
    });
    await newFAQ.save();
    res.status(201).json(newFAQ);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update
exports.updateFAQ = async (req, res) => {
  try {
    const { question, answer, category } = req.body;

    const updated = await FAQ.findByIdAndUpdate(
      req.params.id,
      {
        question: {
          en: question.en,
          ar: question.ar
        },
        answer: {
          en: answer.en,
          ar: answer.ar
        },
        category
      },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
exports.deleteFAQ = async (req, res) => {
  try {
    await FAQ.findByIdAndDelete(req.params.id);
    res.json({ message: "FAQ deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get category options
exports.getFAQCategories = (req, res) => {
  const categories = [
    "ecommerce solutions",
    "mobile applications",
    "marketing solutions",
    "creative design",
    "digital optimization"
  ];
  res.json(categories);
};


// GET FAQs by Category
exports.getFAQsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const faqs = await FAQ.find({ category });
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

