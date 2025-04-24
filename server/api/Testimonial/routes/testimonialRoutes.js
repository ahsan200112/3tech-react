const express = require("express");
const router = express.Router();
const testimonialController = require("../controllers/testimonialController");

router.post('/', testimonialController.createTestimonial);
router.get('/', testimonialController.getTestimonials);
router.put('/:id', testimonialController.updateTestimonial);
router.delete('/:id', testimonialController.deleteTestimonial);

module.exports = router;
