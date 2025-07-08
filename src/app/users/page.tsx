// src/app/users/page.tsx
import { UserApplication } from '@/types';
import { mockUserApplications } from '@/lib/mockUserApplications';

export default function UsersPage() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">User Applications</h1>

      <div className="overflow-x-auto border rounded-lg shadow-sm">
        <table className="min-w-full table-auto text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Submitted</th>
            </tr>
          </thead>
          <tbody>
            {mockUserApplications.map((app: UserApplication, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{app.firstName}</td>
                <td className="px-4 py-2">{app.lastName}</td>
                <td className="px-4 py-2">{app.status}</td>
                <td className="px-4 py-2">{app.submittedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
