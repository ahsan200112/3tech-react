const express = require("express");
const router = express.Router();
const faqController = require("../controllers/faqController");
const checkAccess = require('../../../middleware/checkAccess');

router.get("/", faqController.getFAQs);
router.post("/", checkAccess('Faqs', 'create'), faqController.createFAQ);
router.put("/:id", checkAccess('Faqs', 'edit'), faqController.updateFAQ);
router.delete("/:id", checkAccess('Faqs', 'delete'), faqController.deleteFAQ);
router.get("/categories", checkAccess('Faqs', 'view'), faqController.getFAQCategories);
router.get("/category/:category", checkAccess('Faqs', 'view'), faqController.getFAQsByCategory);


module.exports = router;
