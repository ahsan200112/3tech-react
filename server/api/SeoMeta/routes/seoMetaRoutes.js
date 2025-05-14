const express = require("express");
const router = express.Router();
const seoMetaController = require("../controllers/seoMetaController");
const checkAccess = require('../../../middleware/checkAccess');

// GET all SEO Meta
router.get("/", checkAccess('SeoMeta', 'view'), seoMetaController.getAllSEOMetas);

// POST new SEO Meta
router.post("/", checkAccess('SeoMeta', 'create'), seoMetaController.createSEOMeta);

// PUT update SEO Meta
router.put("/:id", checkAccess('SeoMeta', 'edit'), seoMetaController.updateSEOMeta);

// DELETE SEO Meta
router.delete("/:id", checkAccess('SeoMeta', 'delete'), seoMetaController.deleteSEOMeta);

module.exports = router;
