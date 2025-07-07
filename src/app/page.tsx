// ./src/app/page.tsx
export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">User Applications</h2>
            <p className="text-gray-600 text-sm">View, review, and manage incoming rebate applications.</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Program Controls</h2>
            <p className="text-gray-600 text-sm">Manage eligibility criteria, funding tiers, and rebate settings.</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Translation Queue</h2>
            <p className="text-gray-600 text-sm">Upload, review, and approve translations for multilingual access.</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">System Logs</h2>
            <p className="text-gray-600 text-sm">Audit trail for admin actions, system alerts, and user events.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
