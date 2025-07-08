import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-4 hidden md:block">
        <h2 className="text-xl font-bold mb-6">Admin Menu</h2>
        <nav className="space-y-2">
          <Link href="/" className="block text-sm hover:text-green-600">
            Dashboard
          </Link>
          <Link href="/users" className="block text-sm hover:text-green-600">
            User Applications
          </Link>
          <Link href="/settings" className="block text-sm hover:text-green-600">
            Settings
          </Link>
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="bg-white shadow px-4 py-3 flex items-center justify-between">
          <span className="text-sm font-medium">Admin Portal</span>
          {/* Removed: <span className="text-sm text-gray-500">Welcome Jacob</span> */}
        </header>

        {/* Page content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
