import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-white shadow px-6 py-3 flex gap-6">
      <Link href="/users" className="hover:underline text-blue-600">Users</Link>
      <Link href="/settings" className="hover:underline text-blue-600">Settings</Link>
      <Link href="/logs" className="hover:underline text-blue-600">Logs</Link>
    </nav>
  );
}
