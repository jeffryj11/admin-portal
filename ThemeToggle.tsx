
'use client';

import { useEffect } from 'react';

interface ThemeToggleProps {
  setTheme: (theme: 'light' | 'dark') => void;
}

export default function ThemeToggle({ setTheme }: ThemeToggleProps) {
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const activeTheme = stored === 'dark' ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', activeTheme === 'dark');
    setTheme(activeTheme);
  }, [setTheme]);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    const newTheme: 'light' | 'dark' = isDark ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', !isDark);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="p-2 text-sm rounded bg-gray-200 dark:bg-gray-800">
      Toggle Theme
    </button>
  );
}
