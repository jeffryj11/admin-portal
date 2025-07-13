'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface UserApplication {
  id: string;
  first_name: string;
  last_name: string;
  status: 'pending' | 'approved' | 'rejected';
  submitted_at: string;
}

export default function UsersPage() {
  const [applications, setApplications] = useState<UserApplication[]>([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .order('submitted_at', { ascending: false });

      if (error) {
        console.error('Error fetching applications:', error.message);
      } else {
        setApplications(data || []);
      }
    };

    fetchApplications();
  }, []);

  const updateStatus = async (id: string, newStatus: 'approved' | 'rejected') => {
    const { error } = await supabase
      .from('applications')
      .update({ status: newStatus })
      .eq('id', id);

    if (!error) {
      setApplications((prev) =>
        prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
      );
    }
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">User Applications</h1>
      <div className="overflow-auto">
        <table className="min-w-full text-sm text-left border border-gray-700 rounded">
          <thead className="bg-gray-800 text-gray-300">
            <tr>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Submitted</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="border-t border-gray-700">
                <td className="px-4 py-2">{app.first_name}</td>
                <td className="px-4 py-2">{app.last_name}</td>
                <td className="px-4 py-2">
                  <Badge variant={app.status}>{app.status}</Badge>
                </td>
                <td className="px-4 py-2">{app.submitted_at.split('T')[0]}</td>
                <td className="px-4 py-2 space-x-2">
                  <Button
                    size="sm"
                    variant="success"
                    disabled={app.status !== 'pending'}
                    onClick={() => updateStatus(app.id, 'approved')}
                  >
                    Approve
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    disabled={app.status !== 'pending'}
                    onClick={() => updateStatus(app.id, 'rejected')}
                  >
                    Reject
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
