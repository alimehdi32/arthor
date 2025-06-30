const { GoogleGenAI } = require('@google/genai');


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
        🧾 Learning goal: ${prompt}
        `

    // server will get the API key from the environment variable `GEMINI_API_KEY`.
    const ai = new GoogleGenAI({});

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: systemPrompt,
    });

    

    res.json(response.candidates[0].content.parts[0].text);
}