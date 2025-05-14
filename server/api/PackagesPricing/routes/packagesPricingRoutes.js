const express = require("express");
const router = express.Router();
const packagesPricingController = require("../controllers/packagesPricingController");
const validatePackagesPricing = require("../validation/packagesPricingValidation"); // Import validation middleware
const checkAccess = require('../../../middleware/checkAccess');

// Get all packages pricing
router.get("/", packagesPricingController.getPackagesPricing);

// Create a new packages pricing (with validation)
router.post("/", checkAccess('Packages', 'create'), validatePackagesPricing, packagesPricingController.createPackagesPricing);

// Update a packages pricing by ID (with validation)
router.put("/:id", checkAccess('Packages', 'edit'), validatePackagesPricing, packagesPricingController.updatePackagesPricing);

// Delete a packages pricing by ID
router.delete("/:id", checkAccess('Packages', 'delete'), packagesPricingController.deletePackagesPricing);

module.exports = router;
