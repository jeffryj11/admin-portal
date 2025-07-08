"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "User Applications", href: "/users" },
  { label: "Settings", href: "/settings" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-4 hidden md:block">
        <h2 className="text-xl font-bold mb-6">Admin Menu</h2>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block text-sm py-1 px-2 rounded transition ${
                pathname === item.href
                  ? "bg-green-100 text-green-700 font-medium"
                  : "hover:text-green-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Nav Bar */}
        <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Texas Home Energy Rebates</h1>
          {/* Placeholder for future search / user dropdown */}
          <span className="text-sm text-gray-500 hidden md:block">
            Admin Panel
          </span>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
