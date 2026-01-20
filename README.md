# AI-Powered Chat App

A modern, AI-powered chat application built with React and TypeScript. Features a clean interface with conversation history management and real-time messaging.

## ✨ Features

- 💬 Real-time chat interface with AI responses
- 📝 Markdown support with syntax highlighting for code blocks
- 🗂️ Conversation history organized by time (Today, Yesterday, Last 7 Days)
- 🎨 Modern UI with Tailwind CSS and Radix UI components
- 📱 Responsive design for all devices
- ⚡ Fast and lightweight with Vite

## 🛠️ Tech Stack

- **Frontend Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI
- **State Management:** TanStack Query (React Query)
- **Routing:** React Router v6
- **Markdown:** React Markdown with syntax highlighting
- **Icons:** Lucide React

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Backend API running on `http://127.0.0.1:8000`

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/samdev652/AI-Powered-Chat-App.git
cd AI-Powered-Chat-App
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔌 API Endpoints

The app expects a backend server running on `http://127.0.0.1:8000` with the following endpoints:

- `POST /prompt_gpt/` - Send a message to the AI
  - Body: `{ chat_id: string, content: string }`
- `GET /get_chat_messages/{chatId}/` - Retrieve messages for a specific chat
- `GET /todays_chat/` - Get today's conversations
- `GET /yesterdays_chat/` - Get yesterday's conversations
- `GET /seven_days_chat/` - Get conversations from the last 7 days

## 🏗️ Project Structure

```
src/
├── components/        # React components
│   ├── ui/           # Reusable UI components
│   ├── AppSidebar.tsx
│   ├── MainLayout.tsx
│   ├── Navbar.tsx
│   └── TypingLoader.tsx
├── pages/            # Page components
│   └── HomePage.tsx
├── lib/              # Utilities and API
│   ├── api.ts
│   └── utils.ts
├── hooks/            # Custom React hooks
└── main.tsx          # Application entry point
```

## 🎨 Features in Detail

### Chat Interface
- Clean, intuitive messaging interface
- User messages aligned to the right with primary color
- AI responses with markdown rendering
- Code syntax highlighting for programming languages
- Smooth scrolling to latest messages

### Conversation History
- Sidebar with organized chat history
- Categorized by time periods
- Easy navigation between conversations
- Create new chat sessions

### Markdown Support
- Full markdown rendering for AI responses
- Syntax highlighted code blocks
- Support for inline code, links, lists, and more

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.
