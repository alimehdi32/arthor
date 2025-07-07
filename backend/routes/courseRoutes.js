const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const { searchVideos } = require('../controllers/videoSearch');

// @route   POST /api/course/generate
// @desc    Generate course roadmap from natural language prompt
router.post('/roadmap', courseController.generateRoadmap);
router.get('/search-videos', searchVideos);

// @route   GET /api/course/demo
// @desc    Return a static/dummy course as a demo
//router.get('/demo', courseController.getDemoCourse);

module.exports = router;
