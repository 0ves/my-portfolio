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
   <nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm' : ''
  }`}
>
  <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
    {/* Logo / Name */}
    <h1 className="text-xl font-semibold dark:text-white">
      Oves Nadaf
    </h1>

    {/* Navigation Links + Dark Mode */}
    <div className="flex items-center gap-6">
      <ul className="flex gap-6 text-sm font-medium dark:text-white">
        {['Projects', 'About', 'Skills', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-500 transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <DarkModeToggle />
    </div>
  </div>
</nav>

  );
}
