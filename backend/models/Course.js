const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  type: { type: String, required: true },           // e.g. "video", "article", "project"
  title: { type: String, required: true },          // Resource title
  url: { type: String, default: '#' }               // Optional resource URL
}, { _id: false });

const daySchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },          // Date when the topic is scheduled
  title: { type: String, required: true },          // e.g. "Day 1: React Fundamentals"
  durationMins: { type: Number, default: 60 },      // e.g. 60 minutes
  resources: { type: [resourceSchema], default: [] },
  notes: { type: String, default: 'Focus on core concepts and applications.' },
  completed: { type: Boolean, default: false }
}, { _id: false });

const courseSchema = new mongoose.Schema({
  id: { type: String, default: () => `roadmap-${Date.now()}` },
  course: { type: String, required: true },          // e.g. "React Learning Path"
  description: { type: String, default: '' },
  duration: { type: String, required: true },        // e.g. "8 weeks"
  difficulty: { type: String, default: 'beginner' }, // beginner | intermediate | advanced
  tags: { type: [String], default: [] },             // e.g. ["React", "frontend", "JavaScript"]
  days: { type: [daySchema], default: [] },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', courseSchema);
