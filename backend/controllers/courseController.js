const { GoogleGenAI } = require('@google/genai');
const Course = require('../models/Course');



exports.generateRoadmap = async (req, res) => {

  const { formData } = req.body;
  console.log("------------------------------Received Form Data:", formData);


  if (!formData) {
    console.error('Form data is required');
    return res.status(400).json({ error: 'Form data is required' });
  }

  const SystemPrompt = `
You are "Arthor", an AI-powered course planner that creates personalized, structured learning paths for any topic.

🎯 Objective:
Given a user's learning goal and preferences, generate a complete, day-by-day roadmap (not grouped by weeks).  
Each day should have a title, duration, topic-specific resources, and short academic notes.

---

🧾 Input variables:
- learningGoal: \${formData.topic} (e.g., "Learn React for frontend development")
- goalType: \${formData.goalType} (e.g., "skill-development", "career-switch", "exam-prep")
- intensity: \${formData.intensity} ("light" | "medium" | "intense")
- intensityLevels: (defines how many weeks each intensity represents)
- deadline: \${formData.deadline} (optional, e.g., "3 months from now")
- experience: \${formData.experience} (e.g., "beginner", "intermediate", "advanced")
- preferredResources: \${formData.preferredResources} (array of resource types, e.g., ["video", "book", "article"])

---

📦 Output JSON (strict format — no explanations, markdown, or extra text):

{
  "id": "roadmap-<unique_id>",
  "title": "<formData.topic> Learning Path",
  "description": "A comprehensive <goalType> roadmap for <formData.topic>",
  "days": [
    {
      "date": "<ISO date for each day starting from today>",
      "title": "Day 1: <topic keyword + concept>",
      "durationMins": "<number of minutes based on intensity>",
      "resources": [
        { "type": "video", "title": "<relevant video title>", "url": "<placeholder or suggestion>" },
        { "type": "book", "title": "<related book or chapter>", "url": "<placeholder>" },
        { "type": "article", "title": "<meaningful reading or blog>", "url": "<placeholder>" }
      ],
      "notes": "Brief summary or study direction for the day",
      "completed": false
    }
  ]
}

---

📌 Rules:
1. Each "day" must **logically build** upon the previous day’s topic, ensuring a progressive learning flow.
2. Every “title” must include the **main keyword** from \${formData.topic} to make YouTube video fetching accurate.
   - Example: if learningGoal = "Learn React", use titles like "React Components", "React State Management", not just "Components" or "State".
3. The number of days should equal: intensityLevels[\${formData.intensity}].weeks * 7  
   - If no match found, default to 56 days (8 weeks).
4. durationMins mapping:
   - light → 30
   - medium → 60
   - intense → 120
5. Date field should increment by 1 per day starting from today.
6. Resource structure must always include at least one video, one book, and one article.
7. Keep descriptions and notes **academic, concise, and actionable**.
8. Output **only** JSON — no markdown, no commentary, no triple backticks.

---

🧠 Example Output:

{
  "id": "roadmap-1",
  "title": "React Learning Path",
  "description": "A comprehensive skill development roadmap for React",
  "days": [
    {
      "date": "2025-10-22T00:00:00.000Z",
      "title": "Day 1: Introduction to React and JavaScript Basics",
      "durationMins": 60,
      "resources": [
        { "type": "video", "title": "React Basics Tutorial", "url": "#" },
        { "type": "book", "title": "Chapter 1 – Getting Started with React", "url": "#" },
        { "type": "article", "title": "Understanding JSX and Components", "url": "#" }
      ],
      "notes": "Set up your React environment and learn foundational syntax.",
      "completed": false
    },
    {
      "date": "2025-10-23T00:00:00.000Z",
      "title": "Day 2: React Components and Props",
      "durationMins": 60,
      "resources": [
        { "type": "video", "title": "React Components Explained", "url": "#" },
        { "type": "book", "title": "Chapter 2 – Working with Components", "url": "#" },
        { "type": "article", "title": "Props and Component Communication", "url": "#" }
      ],
      "notes": "Learn how to build reusable UI components and pass data through props.",
      "completed": false
    }
  ]
}

---

🧩 Refinement logic:
If the user refines their request (e.g., “Make it 2 weeks” or “Focus more on projects”),  
- Adjust the total number of days, redistribute the learning flow, and update only relevant parts.
- Keep the same schema and increment version numbers internally if you store versions.

---

Your role:
- Be a mentor-level academic planner.
- Focus on educational flow, realistic daily pacing, and actionable study structure.
- Produce **strict JSON output only** that perfectly matches the mock structure used in the Arthor frontend.



⚠️ VERY IMPORTANT:
Respond ONLY with valid JSON. 
Do NOT include any explanations, markdown formatting, code blocks, or backticks (no \`\`\`json, no text before or after). 
Output must begin with '{' and end with '}' — nothing else.
...
`;



  // server will get the API key from the environment variable `GEMINI_API_KEY`.
  const ai = new GoogleGenAI({});

  try {
    const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: SystemPrompt,
  });

  const courseData = JSON.parse(response.candidates[0].content.parts[0].text);
  console.log("------------------------------Parsed Course Data:", courseData);

  res.json(response.candidates[0].content.parts[0].text);
    
  } catch (error) {
    res.json({ error: 'Failed to generate roadmap', details: error.message });
    console.error("Error generating roadmap:", error);
  }

  
}

exports.saveRoadmap = async (req, res) => {
  try {
    const { id, title, description, days, duration, difficulty, tags } = req.body;

    console.log("------------------------------ Saving Roadmap Data:", req.body);

    // Validate basic structure
    if (!title || !days || !Array.isArray(days) || days.length === 0) {
      return res.status(400).json({ error: "Invalid roadmap structure" });
    }

    // Create the course document
    const newCourse = new Course({
      courseId: id || `roadmap-${Date.now()}`,
      course: title,
      description,
      duration: duration || `${Math.ceil(days.length / 7)} weeks`,
      difficulty: difficulty || "unspecified",
      tags: tags || [],
      roadmap: days.map((day, index) => ({
        day: index + 1,
        date: day.date,
        title: day.title,
        durationMins: day.durationMins,
        resources: day.resources?.map(r => ({
          type: r.type,
          title: r.title,
          url: r.url
        })) || [],
        notes: day.notes,
        completed: day.completed || false
      })),
      createdBy: req.user.id,
      createdAt: new Date(),
    });

    await newCourse.save();

    console.log("✅ Roadmap saved successfully:", newCourse);

    res.json({ success: true, message: "Course roadmap saved successfully", course: newCourse });
  } catch (error) {
    console.error("❌ Error saving roadmap:", error);
    res.status(500).json({ error: "Failed to save roadmap" });
  }
};


exports.getRoadmap = async (req, res) => {
  try {
    const courses = await Course.find({ createdBy: req.user.id }).lean();

    if (!courses || courses.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No saved roadmaps found for this user.'
      });
    }

    // Transform each saved course into the same format returned by generateRoadmap
    const formattedRoadmaps = courses.map(course => ({
      id: course._id.toString(),
      title: course.course || 'Untitled Learning Path',
      description: course.description || `A comprehensive learning roadmap for ${course.course || 'this topic'}`,
      duration: course.duration || 'Not specified',
      difficulty: course.difficulty || 'beginner',
      tags: course.tags || [],
      days: (course.days || []).map(day => ({
        date: day.date || new Date().toISOString(),
        title: day.title || 'Untitled Day',
        durationMins: day.durationMins || 60,
        resources: (day.resources || []).map(r => ({
          type: r.type || 'video',
          title: r.title || 'Untitled Resource',
          url: r.url || '#'
        })),
        notes: day.notes || 'Focus on understanding the key concepts and applying them in practice.',
        completed: day.completed || false
      }))
    }));

    // If user has multiple saved roadmaps, return them as an array
    res.status(200).json({
      success: true,
      message: 'Roadmaps fetched successfully.',
      roadmaps: formattedRoadmaps
    });

  } catch (error) {
    console.error('❌ Error fetching roadmap:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch roadmaps due to a server error.'
    });
  }
};
