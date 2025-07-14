import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-xl w-full text-center bg-white rounded-xl shadow p-10">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to the Admin Portal</h1>
        <p className="text-gray-600 mb-6">
          Manage programs, settings, and more through the navigation menu.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/programs">
            <span className="inline-block px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              View Programs
            </span>
          </Link>
          <Link href="/programs/new">
            <span className="inline-block px-5 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition">
              Add New Program
            </span>
          </Link>
        </div>
      </div>
    </main>
  )
}
