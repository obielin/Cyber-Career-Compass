
import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <style>{`
        :root {
          --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
        }
        
        body {
          font-family: var(--font-sans);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom selection color */
        ::selection {
          background: rgba(6, 182, 212, 0.2);
        }
      `}</style>
      {children}
    </div>
  );
}
