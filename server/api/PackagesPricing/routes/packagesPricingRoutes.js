const express = require("express");
const router = express.Router();
const packagesPricingController = require("../controllers/packagesPricingController");
const validatePackagesPricing = require("../validation/packagesPricingValidation"); // Import validation middleware

// Get all packages pricing
router.get("/", packagesPricingController.getPackagesPricing);

// Create a new packages pricing (with validation)
router.post("/", validatePackagesPricing, packagesPricingController.createPackagesPricing);

// Update a packages pricing by ID (with validation)
router.put("/:id", validatePackagesPricing, packagesPricingController.updatePackagesPricing);

// Delete a packages pricing by ID
router.delete("/:id", packagesPricingController.deletePackagesPricing);

module.exports = router;
