const PackagesPricing = require("../models/packagesPricingModel");
const validatePackagesPricing = require("../validation/packagesPricingValidation");

// Get all packages pricing 
exports.getPackagesPricing = async (req, res) => {
  try {
    const packagesPricing = await PackagesPricing.find();
    res.json(packagesPricing);
  } catch (error) {
    res.status(500).json({ message: "Error fetching packages pricing", error });
  }
};

// Create a new packages pricing 
exports.createPackagesPricing = [
  validatePackagesPricing,
   async (req, res) => {
  try {
    // Calculate yearly price based on monthly price
    const monthlyPrice = req.body.price; // Assume 'price' is the monthly price
    //const yearlyPrice = req.body.yearlyPrice; // Assume 'yearlyPrice' is the yearly price

    // You can calculate yearlyPrice if it was not provided
   /* if (!yearlyPrice) {
      req.body.yearlyPrice = monthlyPrice * 12; // If no yearly price provided, calculate it from monthly price
    } */

    const newPackages = new PackagesPricing(req.body);
    const savedPackages = await newPackages.save();
    res.status(201).json(savedPackages);
  } catch (error) {
    res.status(500).json({ message: "Error creating packages pricing", error });
  }
},
];

// Update a packages pricing by ID
exports.updatePackagesPricing = [
  validatePackagesPricing,
 async (req, res) => {
  try {
    // Calculate yearly price based on monthly price if it isn't provided
    const monthlyPrice = req.body.price;
   /* if (!req.body.yearlyPrice) {
      req.body.yearlyPrice = monthlyPrice * 12; // Calculate from monthly price if yearlyPrice is missing
    } */

    const updatedPackagesPricing = await PackagesPricing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPackagesPricing) {
      return res.status(404).json({ message: "Packages pricing not found" });
    }
    res.json(updatedPackagesPricing);
  } catch (error) {
    res.status(500).json({ message: "Error updating packages pricing", error });
  }
},
];

// Delete a packages pricing by ID
exports.deletePackagesPricing = async (req, res) => {
  try {
    const deletedPackagesPricing = await PackagesPricing.findByIdAndDelete(req.params.id);
    if (!deletedPackagesPricing) {
      return res.status(404).json({ message: "Packages pricing not found" });
    }
    res.json({ message: "Packages pricing deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting packages pricing", error });
  }
};
