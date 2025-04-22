// middlewares/pricingValidation.js
const { validationResult, body } = require("express-validator");

// Validation rules for pricing
const validatePricing = [
  body("title").notEmpty().withMessage("Title is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("monthlyPrice").notEmpty().withMessage("Monthly Price is required"),
  body("yearlyPrice").notEmpty().withMessage("Yearly Price is required"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validatePricing;
