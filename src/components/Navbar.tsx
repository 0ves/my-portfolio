'use client';

import { useEffect, useState } from 'react';
import DarkModeToggle from './DarkMode';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur shadow' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
     
        <h1 className="pt-2 px-10 text-xl font-bold">Oves Nadaf</h1>
     

     
        <ul className="flex gap-6 text-sm font-medium">
          {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:underline">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
