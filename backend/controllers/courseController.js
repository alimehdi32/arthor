const { GoogleGenAI } = require('@google/genai');
const Course = require('../models/Course');



exports.generateRoadmap = async (req, res) => {

  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  const systemPrompt = `
           I want you to act as an AI course planner. Given a learning goal, generate a complete course roadmap broken down by weeks and days.

The roadmap should be:

Structured by weeks, each with a clear title (e.g., “Week 1: HTML Basics”)

Each week should contain an estimatedTime (e.g., “7 days”)

Inside each week, break it down into multiple days, with:

day number (starting from 1)

a topic for that day

a short description of the topic

📌 Important: Respond in the following exact JSON format (no explanation, only JSON):
     {
  "courseTitle": "<course name>",
  "duration": "<total duration, e.g., '8 weeks'>",
  "weeks": [
    {
      "title": "Week 1: <Title>",
      "estimatedTime": "<e.g., 7 days>",
      "days": [
        {
          "day": 1,
          "topic": "<Topic for Day 1>",
          "description": "<Short description>"
        },
        ...
      ]
    },
    ...
  ]
}       
        do not include any other text, only the JSON response, also do not use triple backticks or the word 'json'
        🧾 Learning goal: ${prompt}



        additional: In the Scenario where User has already asked to generate a roadmap on a specific course, you generated the roadmap then if the user ask for some query, for example "i want 2 weeks to complete OOPs in Java, so generate my roadmap with respect to this" so make only those changes which fulfill the user's query. Then again return the updated roadmap as specified in JSON format with only the changes necessary. 
        `

  // server will get the API key from the environment variable `GEMINI_API_KEY`.
  const ai = new GoogleGenAI({});

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: systemPrompt,
  });

  const courseData = JSON.parse(response.candidates[0].content.parts[0].text);
  console.log("------------------------------Parsed Course Data:", courseData);

  res.json(response.candidates[0].content.parts[0].text);
}

exports.saveRoadmap = async (req, res) => {
  try {
    const { courseTitle, duration, weeks } = req.body;
    console.log("------------------------------Saving Course Data:", req.body);
    const newCourse = new Course({
      course: courseTitle,
      duration: duration,
      roadmap: weeks.map(week => ({
        title: week.title,
        estimatedTime: week.estimatedTime,
        days: week.days.map(day => ({
          day: day.day,
          topic: day.topic,
          description: day.description
        }))
      })),
      createdBy: req.user.id
    })
    newCourse.save()
      .then(() => {
        console.log("Course saved successfully:", newCourse);
      })
      .catch(err => {
        console.error("Error saving course:", err);
      });

    res.json({ success: true, message: 'Course saved successfully' });
  } catch (error) {
    console.error("Error saving course:", error);
    res.status(500).json({ error: 'Failed to save course' });
  }
}

exports.getRoadmap = async (req, res) => {
  try {
    const courses = await Course.find({ createdBy: req.user.id });
    if (!courses || courses.length === 0) {
      return res.status(404).json({ error: 'No courses found' });
    }
    res.json({
      success: true,
      courses: courses
    });
  } catch (error) {
    console.error("Error fetching roadmap:", error);
    res.status(500).json({ error: 'Failed to fetch roadmap' });

  }
}