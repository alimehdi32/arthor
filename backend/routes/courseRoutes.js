const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// @route   POST /api/course/generate
// @desc    Generate course roadmap from natural language prompt
router.post('/roadmap', courseController.generateRoadmap);

// @route   GET /api/course/demo
// @desc    Return a static/dummy course as a demo
//router.get('/demo', courseController.getDemoCourse);

module.exports = router;
