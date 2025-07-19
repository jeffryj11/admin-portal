'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'User Applications', href: '/users' },
  { label: 'Settings', href: '/settings' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-muted text-foreground">
      {/* Sidebar */}
      <aside className={`bg-white shadow-md w-64 fixed top-0 left-0 h-full z-30 transform transition-transform duration-200 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-6 border-b border-border flex items-center justify-between md:justify-start">
          <h2 className="text-xl font-bold text-primary">Admin Menu</h2>
          <button
            className="md:hidden text-gray-500"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer
                  ${pathname === item.href
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'}`}
              >
                {item.label}
              </div>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile sidebar toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-40 p-2 bg-white border border-border rounded-md shadow"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="h-5 w-5 text-gray-700" />
      </button>

      {/* Main Content*
