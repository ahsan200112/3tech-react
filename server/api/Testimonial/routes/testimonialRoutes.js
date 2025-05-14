const express = require("express");
const router = express.Router();
const testimonialController = require("../controllers/testimonialController");
const checkAccess = require('../../../middleware/checkAccess');

router.post('/',checkAccess('Testimonials', 'create'), testimonialController.createTestimonial);
router.get('/', testimonialController.getTestimonials);
router.put('/:id',checkAccess('Testimonials', 'edit'), testimonialController.updateTestimonial);
router.delete('/:id',checkAccess('Testimonials', 'delete'), testimonialController.deleteTestimonial);

module.exports = router;
