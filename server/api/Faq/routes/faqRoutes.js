const express = require("express");
const router = express.Router();
const faqController = require("../controllers/faqController");

router.get("/", faqController.getFAQs);
router.post("/", faqController.createFAQ);
router.put("/:id", faqController.updateFAQ);
router.delete("/:id", faqController.deleteFAQ);
router.get("/categories", faqController.getFAQCategories);
router.get("/category/:category", faqController.getFAQsByCategory);


module.exports = router;
