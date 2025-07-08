// ./src/app/layout.tsx
import "../globals.css";
import Link from "next/link";

export const metadata = {
  title: "Admin Dashboard",
  description: "Manage rebate applications and system settings",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        <header className="bg-white shadow-md p-4">
          <nav className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Admin Portal</h1>
            <div className="space-x-4">
              <Link href="/dashboard" className="text-sm hover:underline">
                Dashboard
              </Link>
              <Link href="/users" className="text-sm hover:underline">
                User Applications
              </Link>
              <Link href="/programs" className="text-sm hover:underline">
                Program Controls
              </Link>
              <Link href="/translations" className="text-sm hover:underline">
                Translations
              </Link>
              <Link href="/logs" className="text-sm hover:underline">
                System Logs
              </Link>
            </div>
          </nav>
        </header>
        <main className="max-w-6xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
