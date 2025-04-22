const Pricing = require("../models/pricingModel");
const validatePricing = require("../validation/pricingValidation");

// Get all pricing plans
exports.getPricingPlans = async (req, res) => {
  try {
    const pricingPlans = await Pricing.find();
    res.json(pricingPlans);
  } catch (error) {
    res.status(500).json({ message: "Error fetching pricing plans", error });
  }
};

// Create a new pricing plan
exports.createPricingPlan = [
  validatePricing,
   async (req, res) => {
  try {
    // Calculate yearly price based on monthly price
    const monthlyPrice = req.body.price; // Assume 'price' is the monthly price
    const yearlyPrice = req.body.yearlyPrice; // Assume 'yearlyPrice' is the yearly price

    // You can calculate yearlyPrice if it was not provided
    if (!yearlyPrice) {
      req.body.yearlyPrice = monthlyPrice * 12; // If no yearly price provided, calculate it from monthly price
    }

    const newPlan = new Pricing(req.body);
    const savedPlan = await newPlan.save();
    res.status(201).json(savedPlan);
  } catch (error) {
    res.status(500).json({ message: "Error creating pricing plan", error });
  }
},
];

// Update a pricing plan by ID
exports.updatePricingPlan = [
  validatePricing,
 async (req, res) => {
  try {
    // Calculate yearly price based on monthly price if it isn't provided
    const monthlyPrice = req.body.price;
    if (!req.body.yearlyPrice) {
      req.body.yearlyPrice = monthlyPrice * 12; // Calculate from monthly price if yearlyPrice is missing
    }

    const updatedPlan = await Pricing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPlan) {
      return res.status(404).json({ message: "Pricing plan not found" });
    }
    res.json(updatedPlan);
  } catch (error) {
    res.status(500).json({ message: "Error updating pricing plan", error });
  }
},
];

// Delete a pricing plan by ID
exports.deletePricingPlan = async (req, res) => {
  try {
    const deletedPlan = await Pricing.findByIdAndDelete(req.params.id);
    if (!deletedPlan) {
      return res.status(404).json({ message: "Pricing plan not found" });
    }
    res.json({ message: "Pricing plan deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting pricing plan", error });
  }
};
