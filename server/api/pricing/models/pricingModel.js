// src/models/PricingPlan.js
const mongoose = require("mongoose");

const pricingPlanSchema = new mongoose.Schema({
  planId: { type: Number, unique: true }, // Unique and auto-incremented
  title: { type: String, required: true },
  description: { type: String, required: true },
  monthlyPrice: { type: Number, required: true },
  yearlyPrice: { type: Number, required: true },
  features: [
    {
      text: { type: String, required: true },
      available: { type: Boolean, required: true },
    },
  ],
});

// Pre-save hook to auto-increment planId
pricingPlanSchema.pre("save", async function (next) {
  if (!this.isNew) {
    return next(); // Agar update ho raha hai, to planId change na karein
  }

  try {
    // Sabse zyada `planId` wala document dhundhein
    const lastPlan = await mongoose
      .model("PricingPlan")
      .findOne()
      .sort({ planId: -1 }) // Descending order me sort karein
      .select("planId"); // Sirf `planId` fetch karein

    // Agar koi plan nahi hai, to `planId` 1 rakhein, warna increment karein
    this.planId = lastPlan ? lastPlan.planId + 1 : 1;
    next();
  } catch (err) {
    next(err); // Agar error ho to handle karein
  }
});

const PricingPlan = mongoose.model("PricingPlan", pricingPlanSchema);
module.exports = PricingPlan;
