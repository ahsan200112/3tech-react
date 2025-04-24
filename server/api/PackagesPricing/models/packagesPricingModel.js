// src/models/PricingPlan.js
const mongoose = require("mongoose");

const packagesPricingSchema = new mongoose.Schema({
  planId: { type: Number, unique: true }, // Unique and auto-incremented
  title: { type: String, required: true },
  description: { type: String, required: true },
  monthlyPrice: { type: Number, required: true },
  //yearlyPrice: { type: Number, required: true },
  features: [
    {
      text: { type: String, required: true },
      available: { type: Boolean, required: true },
    },
  ],
});

// Pre-save hook to auto-increment planId
packagesPricingSchema.pre("save", async function (next) {
  if (!this.isNew) {
    return next(); // If the document is being updated, skip the planId generation
  }

  try {
    if (!this.planId) {
      const lastPlan = await PackagesPricing.findOne()
        .sort({ planId: -1 }) // Get the last planId in descending order
        .select("planId"); // Only fetch the planId field

      // If no last plan found, set planId to 1; otherwise, increment the last planId by 1
      this.planId = lastPlan ? lastPlan.planId + 1 : 1;
    }

    next();
  } catch (err) {
    console.error("Error generating planId:", err);
    next(err); // Pass error to next middleware
  }
});

const PackagesPricing = mongoose.model("PackagesPricing", packagesPricingSchema);

module.exports = PackagesPricing;
