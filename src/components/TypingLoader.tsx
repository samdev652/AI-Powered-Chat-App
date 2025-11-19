import React from "react";

const TypingLoader: React.FC = () => {
  return (
    <div className="flex items-center space-x-1 bg-muted text-foreground p-4 rounded-lg shadow mb-4">
      <div className="flex space-x-1">
        <div className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-2 w-2 bg-primary rounded-full animate-bounce"></div>
      </div>
      <span className="ml-2 text-sm text-muted-foreground">Thinking...</span>
    </div>
  );
};

export default TypingLoader;
