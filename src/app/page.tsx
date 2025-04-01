// Import the ChatInterface component that handles the chat functionality
import ChatInterface from '@/components/ChatInterface';

/**
 * Home page component that provides the main layout for the chat application.
 * Uses a flex column layout with a fixed header and scrollable content area.
 */
export default function Home() {
  return (
    // Main container with full viewport height and no overflow
    <main className="h-screen overflow-hidden bg-white flex flex-col">
      {/* Fixed header at the top of the page */}
      <header className="flex-none bg-white border-b border-gray-200">
        <div className="container mx-auto py-4 px-4">
          <h1 className="text-2xl font-bold text-center">Chat with Gemini AI</h1>
        </div>
      </header>
      {/* Main content area that takes remaining space */}
      <div className="flex-1 container mx-auto px-4 overflow-hidden">
        <ChatInterface />
      </div>
    </main>
  );
}
