const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const { searchVideos } = require('../controllers/videoSearch');
const { getVideos } = require('../controllers/videoSearch');
const { auth } = require('../middleware/auth');

// @route   POST /api/course/generate
// @desc    Generate course roadmap from natural language prompt
router.post('/roadmap', auth, courseController.generateRoadmap);
router.get('/get-roadmap', auth, courseController.getRoadmap);
router.post('/save-roadmap', auth, courseController.saveRoadmap);
router.get('/search-videos', auth, searchVideos);
router.get('/get-course-videos', auth, getVideos);

// @route   GET /api/course/demo
// @desc    Return a static/dummy course as a demo
//router.get('/demo', courseController.getDemoCourse);

module.exports = router;
