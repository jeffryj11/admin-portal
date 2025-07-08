export default function AdminHome() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 space-y-6">
      <div className="bg-blue-100 border border-blue-300 text-blue-800 text-sm px-4 py-2 rounded-md shadow">
        👋 <strong>Welcome Jacob!</strong> This admin portal is now scaffolded and live.
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-700 text-lg">
          Use the sidebar or top nav to manage program settings, user applications, and system logs.
        </p>
      </div>
    </main>
  );
}
