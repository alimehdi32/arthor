const Groq = require("groq-sdk");



async function SegregateIntention(userPrompt) {

  const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY, // replace with your Groq API key
    defaultModel: "openai/gpt-oss-20b", // replace with your preferred model
  });

  console.log('GROQ_API_KEY:', process.env.GROQ_API_KEY ? 'Loaded' : 'Missing');

  return groq.chat.completions.create({
    messages: [
      // Set an optional system message. This sets the behavior of the
      // assistant and can be used to provide specific instructions for
      // how it should behave throughout the conversation.
      {
        role: "system",
        content: "You are a helpful assistant with high expertise in understanding user intentions and segregating them into clear categories. Your task is to analyze the user's prompt and determine whether the user intends to 'generate a new course roadmap' , 'ask a query about an existing course roadmap' , 'asks a question regarding to any concepts in any subject in field of education which can be answered in a word, sentence or even a paragraph and no roadmap is needed for that' or 'the prompt is not related to education, it is a general query regarding modern world' or 'after reading the prompt you are uncertain about the subject and topic of the prompt'. Respond with only one of the following keywords: 'generate' or 'query' or 'Question' or 'Irrelevant' or 'uncertain'. If the user's intention is unclear, respond with 'uncertain'. Do not provide any additional explanations or context in your response.",
      },
      // Set a user message for the assistant to respond to.
      {
        role: "user",
        content: userPrompt,
      },
    ],
    model: "openai/gpt-oss-20b",
  });
};
module.exports = { SegregateIntention };