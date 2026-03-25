import React from "react";

const NotFound: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full p-8">
    <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
    <p className="text-lg text-muted-foreground mb-8">The page you are looking for does not exist.</p>
    <a href="/" className="text-primary underline">Go Home</a>
  </div>
);

export default NotFound;
