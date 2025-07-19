export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-10">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Admin Portal</h1>
      <p className="mb-6 text-lg text-gray-600">
        Manage programs, settings, and more through the navigation menu.
      </p>
      <div className="space-x-4">
        <a
          href="/programs"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          View Programs
        </a>
        <a
          href="/programs/new"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Add New Program
        </a>
      </div>
    </main>
  );
}
