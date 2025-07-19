'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'User Applications', href: '/users' },
  { label: 'Settings', href: '/settings' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <div className="flex min-h-screen bg-muted text-foreground dark:bg-slate-900 dark:text-white">
      {/* Sidebar */}
      <aside
        className={`bg-white dark:bg-slate-800 shadow-md w-64 fixed top-0 left-0 h-full z-30 transform transition-transform duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between md:justify-start">
          <h2 className="text-xl font-bold text-primary dark:text-white">Admin Menu</h2>
          <button className="md:hidden text-gray-500" onClick={() => setSidebarOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer ${
                  pathname === item.href
                    ? 'bg-primary text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                }`}
              >
                {item.label}
              </div>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile sidebar toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-40 p-2 bg-white dark:bg-slate-800 border rounded-md shadow"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="h-5 w-5 text-gray-700 dark:text-white" />
      </button>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 w-full">
        <header className="bg-white dark:bg-slate-800 px-6 py-4 shadow border-b border-gray-200 dark:border-gray-700 flex items-center justify-between sticky top-0 z-20">
          <h1 className="text-lg font-semibold text-primary dark:text-white">
            Texas Home Energy Rebates – Admin Portal
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 dark:text-gray-300 hidden md:block">Admin Panel</span>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-slate-700"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </header>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
