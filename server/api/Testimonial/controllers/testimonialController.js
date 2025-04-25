const Testimonial = require("../models/testimonialModel");

// Create a testimonial
exports.createTestimonial = async (req, res) => {
  try {
    const { message, name, position } = req.body;

    const testimonial = new Testimonial({
      message: {
        en: message.en,
        ar: message.ar,
      },
      name: {
        en: name.en,
        ar: name.ar,
      },
      position: {
        en: position.en,
        ar: position.ar,
      }
    });

    await testimonial.save();
    res.status(201).json(testimonial);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all testimonials
exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a testimonial
exports.updateTestimonial = async (req, res) => {
  try {
     const { message, name, position } = req.body;

    const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, {
      message: {
        en: message.en,
        ar: message.ar,
      },
      name: {
        en: name.en,
        ar: name.ar,
      },
      position: {
        en: position.en,
        ar: position.ar,
      }
    }, { new: true });
    if (!testimonial) return res.status(404).json({ error: 'Testimonial not found' });
    res.status(200).json(testimonial);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a testimonial
exports.deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
    if (!testimonial) return res.status(404).json({ error: 'Testimonial not found' });
    res.status(200).json({ message: 'Testimonial deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
