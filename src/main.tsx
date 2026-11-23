import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import LandingPage from '@/components/landing/LandingPage';
import { BlogPage } from '@/components/blog/BlogPage';
import '@/index.css';

function App() {
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const isBlog = currentPath === '/blog' || currentPath.startsWith('/blog/');

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-black antialiased">
      <Navbar />
      <main className="flex-1 w-full">
        {isBlog ? <BlogPage /> : <LandingPage />}
      </main>
      <Footer />
    </div>
  );
}

const rootEl = document.getElementById('root');
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
