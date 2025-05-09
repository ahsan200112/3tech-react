const SeoMeta = require("../models/seoMetaModel");

// Get all SEO Meta
exports.getAllSEOMetas = async (req, res) => {
    try {
        const metas = await SeoMeta.find().sort({ createdAt: -1 });
        res.status(200).json(metas);
    } catch (err) {
        res.status(500).json({ message: "Error fetching SEO Meta data", error: err.message });
    }
};

// Create new SEO Meta
exports.createSEOMeta = async (req, res) => {
    try {
        const { page, title, description } = req.body;
        const newMeta = new SeoMeta({ page, title, description });
        await newMeta.save();
        res.status(201).json(newMeta);
    } catch (err) {
        res.status(400).json({ message: "Error creating SEO Meta", error: err.message });
    }
};

// Update SEO Meta
exports.updateSEOMeta = async (req, res) => {
    try {
        const { id } = req.params;
        const { page, title, description } = req.body;
        const updatedMeta = await SeoMeta.findByIdAndUpdate(
            id,
            { page, title, description },
            { new: true }
        );
        if (!updatedMeta) {
            return res.status(404).json({ message: "SEO Meta not found" });
        }
        res.status(200).json(updatedMeta);
    } catch (err) {
        res.status(400).json({ message: "Error updating SEO Meta", error: err.message });
    }
};

// Delete SEO Meta
exports.deleteSEOMeta = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMeta = await SeoMeta.findByIdAndDelete(id);
        if (!deletedMeta) {
            return res.status(404).json({ message: "SEO Meta not found" });
        }
        res.status(200).json({ message: "SEO Meta deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting SEO Meta", error: err.message });
    }
};
