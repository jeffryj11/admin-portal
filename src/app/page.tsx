export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="text-center space-y-6 max-w-xl">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to the Admin Portal
        </h1>
        <p className="text-gray-700 text-lg">
          Use the sidebar or top nav to manage program settings, users, and logs.
        </p>
      </div>
    </main>
  );
}
