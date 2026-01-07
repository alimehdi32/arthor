# Arthor - AI-Powered Learning Platform

A modern, responsive learning platform built with React, Next.js, Tailwind CSS, and Framer Motion. Arthor provides AI-generated learning roadmaps, interactive video lessons, and a comprehensive learning management system.

## 🚀 Features

### Core Functionality
- **AI-Powered Roadmap Generation**: Create personalized learning paths with a 3-step wizard
- **Interactive Dashboard**: Track progress, view streaks, and manage daily tasks
- **PromptVault**: Store and organize your learning roadmaps with filtering and search
- **LearnTube**: Custom video player with transcripts, chapters, and flashcard extraction
- **Community Features**: Explore and share roadmaps with the community

### Design System
- **Clean & Academic Visual Design**: Professional, educational-focused interface
- **Design Tokens**: Consistent color palette and spacing system
- **Responsive Design**: Mobile-first approach with clear breakpoints
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation
- **Animations**: Smooth Framer Motion animations for enhanced UX

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.5 with App Router
- **UI Library**: React 19 with custom components
- **Styling**: Tailwind CSS 4 with design tokens
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Charts**: Recharts for data visualization
- **Testing**: Jest with React Testing Library
- **Drag & Drop**: @dnd-kit for roadmap editing

## 📁 Project Structure

```
arthor-frontend/
├── app/                          # Next.js App Router pages
│   ├── page.js                   # Dashboard (homepage)
│   ├── create/                   # Roadmap creation wizard
│   ├── promptvault/              # Roadmap library
│   ├── learntube/                # Video learning interface
│   ├── explore/                  # Community roadmaps
│   ├── components/               # Component preview page
│   └── layout.js                 # Root layout with navigation
├── components/                   # Reusable UI components
│   ├── ui/                       # Base UI components
│   ├── dashboard/                # Dashboard-specific components
│   ├── roadmap/                  # Roadmap-related components
│   └── navigation/               # Navigation components
├── lib/                          # Utility functions
├── __tests__/                    # Test files
└── public/                       # Static assets
```

## 🎨 Design System

### Color Palette
```css
--bg: #FAFBFC          /* Background */
--card: #FFFFFF        /* Card backgrounds */
--text: #0F172A        /* Primary text */
--muted: #475569       /* Secondary text */
--accent: #0B5FFF      /* Primary accent */
--accent-2: #0F766E    /* Secondary accent */
--warning: #D97706     /* Warning states */
--error: #DC2626       /* Error states */
```

### Typography
- **Font**: Inter (Google Fonts)
- **Base Size**: 16px
- **Scale**: Tailwind's default scale with 8px spacing

### Components
- **PrimaryButton**: Main CTA with hover/tap animations
- **SecondaryButton**: Secondary actions with outline style
- **AnimatedCard**: Cards with hover lift effect
- **RoadmapTimeline**: Horizontal and vertical roadmap views
- **PromptComposer**: AI prompt input with templates
- **LearnTubePlayer**: Custom video player with controls

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd arthor-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage

## 📱 Pages & Routes

### Dashboard (`/`)
- Today's task card with progress tracking
- Quick actions for creating and resuming roadmaps
- Weekly learning time visualization
- Learning streak widget
- Recent activity feed

### Create Roadmap (`/create`)
- **Step 1**: Clarify goals (topic, goal type, time, deadline, experience)
- **Step 2**: Preview timeline with intensity adjustment
- **Step 3**: Resource preferences (books, courses, videos, projects)
- Real-time preview and generation

### PromptVault (`/promptvault`)
- Grid/list view of saved roadmaps
- Search and filtering by category, difficulty, date
- Progress tracking and completion status
- Fork, edit, and share functionality

### LearnTube (`/learntube`)
- Custom video player with play/pause, speed control
- Chapter navigation and progress tracking
- Interactive transcript with click-to-seek
- Flashcard extraction and quiz features

### Explore (`/explore`)
- Featured and popular roadmaps
- Category-based browsing
- Community ratings and reviews
- Author profiles and following

## 🧪 Testing

The project includes comprehensive testing setup:

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Structure
- Unit tests for individual components
- Integration tests for user flows
- Accessibility testing with jest-axe
- Mock implementations for external dependencies

## 🎯 Key Features Implementation

### AI Roadmap Generation
- 3-step wizard with form validation
- Real-time preview and timeline adjustment
- Resource preference selection
- Mock API integration ready for backend

### Interactive Video Learning
- Custom video controls with keyboard shortcuts
- Chapter-based navigation
- Transcript synchronization
- Progress tracking and completion states

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized for all screen sizes

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast color ratios
- Focus management

## 🔧 Customization

### Design Tokens
Update colors and spacing in `app/globals.css`:

```css
:root {
  --bg: #FAFBFC;
  --accent: #0B5FFF;
  /* ... other tokens */
}
```

### Component Variants
Use class-variance-authority for component variants:

```jsx
const buttonVariants = cva(
  "base-styles",
  {
    variants: {
      variant: { default: "...", outline: "..." },
      size: { sm: "...", md: "..." }
    }
  }
);
```

## 📈 Performance

- **Lazy Loading**: Components loaded on demand
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Bundle Analysis**: Built-in webpack analyzer
- **Caching**: Optimized for production builds

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Lucide](https://lucide.dev/) for beautiful icons

---

Built with ❤️ for the future of education