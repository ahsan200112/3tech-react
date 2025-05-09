const mongoose = require("mongoose");

const seoMetaSchema = new mongoose.Schema({
    page: {
        type: String,
        required: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("SeoMeta", seoMetaSchema);
