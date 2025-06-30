/course-gen-backend
│
├── /config/
│   └── openai.js                 # OpenAI API configuration
│   └── youtube.js               # YouTube Data API configuration
│
├── /controllers/
│   └── courseController.js      # Handles the main course generation logic
│
├── /routes/
│   └── courseRoutes.js          # API route(s) related to course generation
│
├── /services/
│   └── aiService.js             # Handles interaction with LLM (OpenAI, Claude, etc.)
│   └── youtubeService.js        # Handles YouTube search functionality
│
├── /middlewares/
│   └── errorHandler.js          # Centralized error handling
│   └── validatePrompt.js        # Middleware to validate prompt input
│
├── /utils/
│   └── topicExtractor.js        # (Optional) Breaks prompt into topics/lessons
│   └── videoSelector.js         # Chooses video from API result (if needed)
│
├── /models/                     # (If saving user history/favorites later)
│   └── Course.js                # Course schema/model (if using MongoDB)
│
├── .env                         # Store API keys here
├── .gitignore
├── app.js                       # Entry point – set up server and routes
├── package.json
└── README.md
