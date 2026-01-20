# 🤖 AI-Powered Chat App

A modern, sleek chat application powered by AI, built with React, TypeScript, and Vite. This application provides an intuitive ChatGPT-like interface where users can have intelligent conversations with an AI assistant.

![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.1.2-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.16-38bdf8?logo=tailwindcss)

## ✨ Features

- 💬 **Real-time AI Chat** - Engage in intelligent conversations with an AI assistant
- 📝 **Markdown Support** - Rich text formatting with code syntax highlighting
- 🎨 **Modern UI** - Clean and responsive design with Tailwind CSS
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 💾 **Chat History** - Automatic chat organization by time (Today, Yesterday, Last 7 Days)
- 🔄 **Multiple Conversations** - Create and manage multiple chat sessions
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🌙 **Dark Mode Support** - Eye-friendly dark theme built-in
- 🎯 **TypeScript** - Fully typed for enhanced developer experience

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern UI library
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Vite 7.1.2** - Next-generation frontend tooling
- **React Router DOM 6.30.1** - Client-side routing
- **TanStack Query 5.90.7** - Powerful data synchronization

### UI Components & Styling
- **Tailwind CSS 4.1.16** - Utility-first CSS framework
- **Radix UI** - Headless UI components
  - Avatar, Dialog, Separator, Slot, Tooltip
- **Lucide React** - Beautiful & consistent icons
- **React Markdown** - Markdown rendering
- **React Syntax Highlighter** - Code syntax highlighting

### State Management & API
- **Axios** - HTTP client for API requests
- **TanStack React Query** - Server state management

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**
- **Backend API Server** running on `http://127.0.0.1:8000`

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/samdev652/AI-Powered-Chat-App.git
   cd AI-Powered-Chat-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Configure API endpoint** (if needed)
   
   Update the `BASE_URL` in `src/lib/api.ts` to point to your backend API:
   ```typescript
   const BASE_URL = "http://127.0.0.1:8000";
   ```

### Running the Application

#### Development Mode
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

#### Build for Production
```bash
npm run build
```

#### Preview Production Build
```bash
npm run preview
```

#### Lint Code
```bash
npm run lint
```

## 📁 Project Structure

```
AI-Powered-Chat-App/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── AppSidebar.tsx  # Sidebar with chat history
│   │   ├── MainLayout.tsx  # Main layout wrapper
│   │   ├── Navbar.tsx      # Navigation bar
│   │   └── TypingLoader.tsx # Loading indicator
│   ├── pages/              # Page components
│   │   └── HomePage.tsx    # Main chat interface
│   ├── hooks/              # Custom React hooks
│   │   └── use-mobile.ts   # Mobile detection hook
│   ├── lib/                # Utilities and API
│   │   ├── api.ts          # API client & endpoints
│   │   └── utils.ts        # Helper functions
│   ├── App.tsx             # Main App component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html             # HTML template
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Project dependencies
```

## 🔌 API Endpoints

The frontend connects to the following backend API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/prompt_gpt/` | Send message to AI and get response |
| GET | `/get_chat_messages/{chat_id}/` | Retrieve messages for a specific chat |
| GET | `/todays_chat/` | Get today's chat sessions |
| GET | `/yesterdays_chat/` | Get yesterday's chat sessions |
| GET | `/seven_days_chat/` | Get chat sessions from last 7 days |

## 💡 Usage

1. **Start a New Chat**
   - Click the "New Chat" button in the sidebar
   - Type your message in the input field
   - Press Enter or click the send button

2. **Continue Existing Chat**
   - Select a chat from the sidebar (organized by time)
   - Messages will load automatically
   - Continue the conversation

3. **Code in Messages**
   - The app supports markdown formatting
   - Code blocks are automatically highlighted
   - Inline code is also supported

## 🎨 Customization

### Changing Theme Colors
Edit the Tailwind configuration in `tailwind.config.js` or update CSS variables in `src/index.css`.

### Modifying API Base URL
Update the `BASE_URL` constant in `src/lib/api.ts`.

### Adding New Components
Place reusable components in `src/components/ui/` and page-specific components in `src/components/`.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Powered by [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- UI Components from [Radix UI](https://www.radix-ui.com/)
- Icons by [Lucide](https://lucide.dev/)

## 📧 Contact

For questions or support, please open an issue in the GitHub repository.

---

**Made with ❤️ using React + TypeScript + Vite**
