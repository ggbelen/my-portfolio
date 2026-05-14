'use client';
import { useEffect, useState } from 'react';
import CircularGallery from '@/components/CircularGallery';

export default function StackPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Detects theme changes on the <html> tag
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Update these paths to match the files you put in public/stack/
  const techItems = [
    { image: '/js.png', text: 'JavaScript' },
    { image: '/ts.png', text: 'TypeScript' },
    { image: '/python.png', text: 'Python' },
    { image: '/react.png', text: 'React' },
    { image: '/next.png', text: 'Next.js' },
    { image: '/tailwind.png', text: 'Tailwind' },
    { image: '/node.png', text: 'Node.js' },
    { image: '/firebase.png', text: 'Firebase' },
    { image: '/mysql.png', text: 'MySQL' },
  ];

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-transparent">
      <div className="w-full h-[600px] relative">
        <CircularGallery 
          items={techItems} 
          bend={3} 
          borderRadius={0.05}
          // Passes actual Hex for the Canvas API
          textColor={isDarkMode ? '#FFFFFF' : '#000000'} 
        />
      </div>
    </main>
  );
}