const express = require("express");
const router = express.Router();
const seoMetaController = require("../controllers/seoMetaController");

// GET all SEO Meta
router.get("/", seoMetaController.getAllSEOMetas);

// POST new SEO Meta
router.post("/", seoMetaController.createSEOMeta);

// PUT update SEO Meta
router.put("/:id", seoMetaController.updateSEOMeta);

// DELETE SEO Meta
router.delete("/:id", seoMetaController.deleteSEOMeta);

module.exports = router;
