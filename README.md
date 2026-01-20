# AI-Powered Chat App

A modern, responsive AI chat application built with React, TypeScript, and Vite. Features a sleek interface with real-time conversations, chat history management, and markdown support for rich content display.

## ✨ Features

- 🤖 **AI-Powered Conversations** - Interact with GPT through an intuitive chat interface
- 💬 **Chat History Management** - Organized by time periods (Today, Yesterday, Last 7 Days)
- 📝 **Markdown & Code Highlighting** - Rich text formatting with syntax highlighting for code blocks
- 🎨 **Modern UI** - Built with Radix UI components and Tailwind CSS
- 📱 **Responsive Design** - Optimized for desktop and mobile devices
- ⚡ **Fast & Efficient** - Powered by Vite for lightning-fast development and builds
- 🔄 **Real-time Updates** - Powered by TanStack Query for efficient data fetching

## 🚀 Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router DOM
- **Markdown Rendering**: React Markdown
- **Code Highlighting**: React Syntax Highlighter

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/samdev652/AI-Powered-Chat-App.git
   cd AI-Powered-Chat-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure the API endpoint**
   
   Update the `BASE_URL` in `src/lib/api.ts` to point to your backend:
   ```typescript
   const BASE_URL = "http://127.0.0.1:8000";
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Button, Dialog, etc.)
│   ├── AppSidebar.tsx  # Navigation sidebar with chat history
│   └── MainLayout.tsx  # Main application layout
├── pages/              # Application pages
│   └── HomePage.tsx    # Main chat interface
├── lib/                # Utility functions and API calls
│   ├── api.ts          # API integration
│   └── utils.ts        # Helper functions
├── hooks/              # Custom React hooks
├── App.tsx             # Root application component
└── main.tsx            # Application entry point
```

## 🔌 API Integration

The app communicates with a backend API for chat functionality:

- **POST** `/prompt_gpt/` - Send a message to the AI
- **GET** `/get_chat_messages/: chatId/` - Retrieve chat history
- **GET** `/todays_chat/` - Get today's chats
- **GET** `/yesterdays_chat/` - Get yesterday's chats
- **GET** `/seven_days_chat/` - Get chats from the last 7 days

## 🎨 Features in Detail

### Chat Interface
- Clean, distraction-free chat layout
- Real-time message rendering with markdown support
- Code syntax highlighting for programming languages
- Auto-scrolling to latest messages

### Sidebar Navigation
- Organized chat history by time periods
- Quick access to recent conversations
- "New Chat" button for starting fresh conversations
- "Explore GPTs" section for discovering AI models

### Message Formatting
- Full markdown support
- Code blocks with syntax highlighting
- Responsive message bubbles
- Distinction between user and assistant messages

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 👤 Author

**samdev652**

- GitHub: [@samdev652](https://github.com/samdev652)

---

Built with ❤️ using React, TypeScript, and Vite
