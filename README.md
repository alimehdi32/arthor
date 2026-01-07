# Arthor - AI-Powered Personalized Learning Platform

## 🎯 Problem Statement

In today's rapidly evolving digital landscape, learners face a critical challenge: **information overload without structured guidance**. While countless educational resources exist online—from YouTube tutorials to documentation, articles, and courses—learners struggle with:

1. **Lack of Personalization**: Generic learning paths don't account for individual experience levels, time constraints, or learning goals
2. **Resource Fragmentation**: Quality educational content is scattered across multiple platforms without cohesive organization
3. **No Clear Roadmap**: Learners don't know what to learn, in what order, or how long it will take to achieve their goals
4. **Progress Tracking Gaps**: Difficulty maintaining consistency and tracking learning progress over time
5. **One-Size-Fits-All Approach**: Traditional learning platforms fail to adapt to different learning intensities and deadlines

**Arthor** solves these problems by providing an **AI-powered learning roadmap generator** that creates personalized, day-by-day structured learning paths tailored to individual needs, integrating curated resources from multiple platforms, and tracking progress with gamification elements.

---

## 🚀 Solution Overview

Arthor is a full-stack web application that leverages **Google's Generative AI (Gemini)** to create customized learning roadmaps based on user preferences. The platform provides:

- **AI-Generated Roadmaps**: Personalized day-by-day learning plans with topic-specific resources
- **YouTube Integration**: Automatic video curation aligned with daily learning objectives
- **Progress Tracking**: Visual dashboards, streak tracking, and completion monitoring
- **Resource Management**: Organized storage of learning materials (videos, articles, books, projects)
- **Adaptive Learning**: Adjustable intensity levels (light, medium, intensive) based on time availability
- **User Authentication**: Secure JWT-based authentication with role-based access control

---

## 🏗️ Architecture

### Technology Stack

#### Backend
- **Runtime**: Node.js with Express.js 5.1.0
- **Database**: MongoDB with Mongoose ODM
- **AI Integration**: Google Generative AI (Gemini 2.5 Flash)
- **Authentication**: JWT (JSON Web Tokens) with bcrypt password hashing
- **External APIs**: 
  - YouTube Data API v3 for video search
  - Google GenAI for roadmap generation
  - Groq SDK for additional AI capabilities
- **Middleware**: CORS, Cookie Parser, Morgan (logging)

#### Frontend
- **Framework**: Next.js 15.3.5 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4 with custom design tokens
- **Animations**: Framer Motion 11
- **Component Library**: Radix UI (accessible components)
- **State Management**: React Hooks
- **HTTP Client**: Fetch API with credentials support
- **Icons**: Lucide React
- **Charts**: Recharts for data visualization
- **Drag & Drop**: @dnd-kit for interactive roadmap editing

### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Frontend (Next.js)                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  Dashboard   │  │   Create     │  │ PromptVault  │      │
│  │              │  │   Roadmap    │  │              │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  LearnTube   │  │   Explore    │  │  Auth Pages  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP/REST API
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      Backend (Express.js)                    │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                    Middleware Layer                   │  │
│  │  • CORS  • Auth  • Origin Check  • Cookie Parser     │  │
│  └──────────────────────────────────────────────────────┘  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │   Routes     │  │ Controllers  │  │   Models     │    │
│  │              │  │              │  │              │    │
│  │ • User       │  │ • Course     │  │ • User       │    │
│  │ • Course     │  │ • Video      │  │ • Course     │    │
│  │ • Stock      │  │              │  │ • Video      │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
└─────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┼─────────────┐
                ▼             ▼             ▼
         ┌───────────┐  ┌──────────┐  ┌──────────┐
         │  MongoDB  │  │ Google   │  │ YouTube  │
         │           │  │ GenAI    │  │ API      │
         └───────────┘  └──────────┘  └──────────┘
```

---

## 📁 Project Structure

```
Arthor/
├── backend/
│   ├── config/
│   │   └── mongoConfig.js          # MongoDB connection configuration
│   ├── controllers/
│   │   ├── courseController.js     # AI roadmap generation & management
│   │   └── videoSearch.js          # YouTube video search integration
│   ├── middleware/
│   │   ├── auth.js                 # JWT authentication middleware
│   │   ├── CheckOrigin.js          # CORS origin validation
│   │   ├── checkLogin.js           # Login status verification
│   │   └── CheckStock.js           # Stock validation (future feature)
│   ├── models/
│   │   ├── Course.js               # Course/Roadmap schema
│   │   ├── user.js                 # User schema with role-based access
│   │   ├── video.js                # Video metadata schema
│   │   └── Stocks.js               # Stock tracking (future feature)
│   ├── routes/
│   │   ├── courseRoutes.js         # Course-related API endpoints
│   │   ├── Userconfig.js           # User authentication routes
│   │   └── stockConfig.js          # Stock routes (future feature)
│   ├── user/
│   │   ├── signup.js               # User registration logic
│   │   ├── login.js                # User login logic
│   │   ├── logout.js               # User logout logic
│   │   └── InitialiseStock.js      # Stock initialization
│   ├── .env                        # Environment variables
│   ├── app.js                      # Express server entry point
│   ├── package.json                # Backend dependencies
│   └── architecture.md             # Backend architecture documentation
│
├── frontend/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ui/                 # Base UI components (Button, Card, Input, etc.)
│   │   │   ├── dashboard/          # Dashboard-specific components
│   │   │   ├── roadmap/            # Roadmap creation & display components
│   │   │   └── navigation/         # Navigation components (TopNav)
│   │   ├── create/
│   │   │   └── page.js             # 3-step roadmap creation wizard
│   │   ├── PromptVault/
│   │   │   └── page.js             # Saved roadmaps library
│   │   ├── LearnTube/
│   │   │   └── page.js             # Video learning interface
│   │   ├── Explore/
│   │   │   └── page.js             # Community roadmaps exploration
│   │   ├── login/
│   │   │   └── page.js             # User login page
│   │   ├── SignUp/
│   │   │   └── page.js             # User registration page
│   │   ├── About/
│   │   │   └── page.js             # About page
│   │   ├── Contact/
│   │   │   └── page.js             # Contact page
│   │   ├── features/
│   │   │   └── page.js             # Features showcase
│   │   ├── reviews/
│   │   │   └── page.js             # User reviews
│   │   ├── page.js                 # Dashboard (homepage)
│   │   ├── layout.js               # Root layout with navigation
│   │   └── globals.css             # Global styles & design tokens
│   ├── lib/
│   │   └── utils.js                # Utility functions
│   ├── public/                     # Static assets
│   ├── __tests__/                  # Jest test files
│   ├── .env                        # Frontend environment variables
│   ├── package.json                # Frontend dependencies
│   ├── features.txt                # Feature list (free vs premium)
│   └── README.md                   # Frontend documentation
│
└── README.md                       # This file
```

---

## ✨ Key Features

### 🎓 AI-Powered Roadmap Generation
- **Intelligent Planning**: Uses Google Gemini 2.5 Flash to generate structured learning paths
- **Personalization**: Adapts to user's experience level (beginner, intermediate, advanced)
- **Flexible Intensity**: Three learning modes:
  - **Light**: 30 min/day, 12 weeks
  - **Medium**: 1 hour/day, 8 weeks
  - **Intensive**: 2+ hours/day, 4 weeks
- **Day-by-Day Structure**: Each day includes:
  - Topic title with main keyword
  - Duration in minutes
  - Curated resources (videos, books, articles, projects)
  - Study notes and guidance
  - Completion tracking

### 📹 YouTube Video Integration
- **Automatic Search**: Fetches relevant videos based on daily topics
- **Smart Selection**: Random selection from top results for variety
- **Metadata Storage**: Saves video ID, title, description, thumbnail, channel info
- **User-Specific**: Videos linked to user accounts for personalized libraries

### 📊 Progress Tracking & Gamification
- **Dashboard Analytics**: Visual representation of learning progress
- **Streak Tracking**: Daily learning streaks with longest streak records
- **Weekly Minutes Graph**: Bar chart showing learning time distribution
- **Completion Status**: Track completed vs. pending tasks
- **Recent Activity Feed**: Timeline of learning milestones

### 🔐 User Authentication & Authorization
- **Secure Registration**: Bcrypt password hashing with salt rounds
- **JWT Authentication**: Token-based authentication with HTTP-only cookies
- **Role-Based Access**: Admin and user roles with different permissions
- **Session Management**: 24-hour token expiration with automatic renewal
- **Protected Routes**: Middleware-based route protection

### 💾 Roadmap Management
- **Save & Retrieve**: Store unlimited roadmaps to user accounts
- **Edit & Fork**: Modify existing roadmaps or create variations
- **Search & Filter**: Find roadmaps by category, difficulty, date
- **Share**: Export and share roadmaps with community
- **Version Control**: Track roadmap iterations and updates

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach with breakpoints
- **Smooth Animations**: Framer Motion for enhanced user experience
- **Accessible Components**: WCAG 2.1 AA compliant with Radix UI
- **Dark Mode Ready**: Design tokens for easy theme switching
- **Interactive Elements**: Drag-and-drop, hover effects, transitions

---

## 🔧 Installation & Setup

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **MongoDB**: v5.0 or higher (local or MongoDB Atlas)
- **npm** or **yarn**: Latest version
- **API Keys**:
  - Google Generative AI API key
  - YouTube Data API v3 key

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   # MongoDB Configuration
   MONGODB_URI=mongodb://localhost:27017/arthor
   # or for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/arthor

   # JWT Secret (use a strong random string)
   JWT_SECRET=your_super_secret_jwt_key_here

   # Google Generative AI
   GEMINI_API_KEY=your_google_genai_api_key

   # YouTube Data API
   YOU_TUBE_API_KEY=your_youtube_api_key
   API_URL=https://www.googleapis.com/youtube/v3

   # Server Configuration
   PORT=5000
   NODE_ENV=development
   ```

4. **Start the backend server**
   ```bash
   # Development mode with auto-reload
   npm run dev

   # Production mode
   npm start
   ```

   Server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the `frontend` directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   Application will run on `http://localhost:3000`

### Database Setup

MongoDB will automatically create collections on first use. The application uses three main collections:

- **users**: User accounts with authentication credentials
- **courses**: Learning roadmaps with day-by-day structure
- **videos**: YouTube video metadata linked to users

---

## 📡 API Documentation

### Authentication Endpoints

#### POST `/user/signup`
Register a new user account.

#### POST `/user/login`
Authenticate user and receive JWT token.

#### GET `/user/logout`
Clear authentication cookie and logout user.

#### GET `/user/me`
Check if user is authenticated.

**Headers:** `Cookie: token=<jwt_token>`

#### GET `/user/get-user`
Get authenticated user information.

**Headers:** `Cookie: token=<jwt_token>`

---

### Course/Roadmap Endpoints

#### POST `/course/roadmap`
Generate AI-powered learning roadmap.

**Headers:** `Cookie: token=<jwt_token>`

#### POST `/course/save-roadmap`
Save generated roadmap to user account.

**Headers:** `Cookie: token=<jwt_token>`

#### GET `/course/get-roadmap`
Retrieve all saved roadmaps for authenticated user.

**Headers:** `Cookie: token=<jwt_token>`

---

### Video Search Endpoints

#### GET `/course/search-videos?query=<search_term>`
Search YouTube for videos and save to user library.

**Headers:** `Cookie: token=<jwt_token>`

**Query Parameters:**
- `query`: URL-encoded search term (e.g., "React%20Hooks%20Tutorial")

#### GET `/course/get-course-videos?query=<search_term>`
Retrieve saved video for specific query.

**Headers:** `Cookie: token=<jwt_token>`

**Query Parameters:**
- `query`: URL-encoded search term

---

## 🧪 Testing

### Backend Testing
```bash
cd backend
npm test
```

### Frontend Testing
```bash
cd frontend

# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

---

## 🚀 Deployment

### Backend Deployment (Example: Heroku)

1. **Create Heroku app**
   ```bash
   heroku create arthor-backend
   ```

2. **Set environment variables**
   ```bash
   heroku config:set MONGODB_URI=<your_mongodb_atlas_uri>
   heroku config:set JWT_SECRET=<your_jwt_secret>
   heroku config:set GEMINI_API_KEY=<your_genai_key>
   heroku config:set YOU_TUBE_API_KEY=<your_youtube_key>
   ```

3. **Deploy**
   ```bash
   git push heroku main
   ```

### Frontend Deployment (Example: Vercel)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   cd frontend
   vercel
   ```

3. **Set environment variables in Vercel dashboard**
   - `NEXT_PUBLIC_API_URL`: Your backend URL

---

## 🎯 Future Enhancements

### Planned Features (Premium)
- **Learning Style Preferences**: Visual, auditory, kinesthetic learning modes
- **Smart Topic Explorer**: AI-suggested related skills and prerequisites
- **Skill Level Estimator**: Interactive quizzes to assess current knowledge
- **Ask AI Doubt Solver**: In-app chatbot for concept clarification
- **Advanced Analytics**: Detailed progress insights and learning patterns
- **Resume Booster**: Certification and project recommendations
- **Peer Learning Rooms**: Community chat and study groups
- **Mentorship Matching**: Connect with experienced professionals
- **Offline Mode**: Downloadable PDF roadmaps
- **Calendar Integration**: Export to Google Calendar, Notion
- **AI-Generated Flashcards**: Automatic flashcard creation from content

### Technical Improvements
- Real-time collaboration on roadmaps
- WebSocket integration for live updates
- GraphQL API for efficient data fetching
- Redis caching for improved performance
- Elasticsearch for advanced search
- CI/CD pipeline with automated testing
- Docker containerization
- Kubernetes orchestration

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Code Style Guidelines
- Follow ESLint configuration for JavaScript/React
- Use Prettier for code formatting
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 👥 Team & Acknowledgments

### Built With
- [Express.js](https://expressjs.com/) - Backend framework
- [Next.js](https://nextjs.org/) - React framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Google Generative AI](https://ai.google.dev/) - AI roadmap generation
- [YouTube Data API](https://developers.google.com/youtube/v3) - Video integration
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [Lucide Icons](https://lucide.dev/) - Icon library

### Special Thanks
- Google for providing Generative AI capabilities
- YouTube for comprehensive video API
- The open-source community for amazing tools and libraries

---

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/yourusername/arthor/issues)

---

## 📊 Project Status

**Current Version**: 1.0.0  
**Status**: Active Development  

---

**Built with ❤️ for the future of personalized education**
