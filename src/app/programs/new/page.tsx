// File: app/programs/new/page.tsx

'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NewProgramPage() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [status, setStatus] = useState<'Active' | 'Draft' | 'Archived'>('Draft');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from('programs').insert([
      { name, status, description }
    ]);

    setLoading(false);

    if (error) {
      alert('Failed to create program: ' + error.message);
    } else {
      router.push('/programs');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Program</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            className="w-full rounded-md border border-gray-300 bg-white text-black px-3 py-2 placeholder-gray-500 dark:bg-gray-900 dark:text-white dark:border-gray-600"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <select
            className="w-full rounded-md border border-gray-300 bg-white text-black px-3 py-2 placeholder-gray-500 dark:bg-gray-900 dark:text-white dark:border-gray-600"
            value={status}
            onChange={(e) => setStatus(e.target.value as any)}
          >
            <option value="Draft">Draft</option>
            <option value="Active">Active</option>
            <option value="Archived">Archived</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            className="w-full rounded-md border border-gray-300 bg-white text-black px-3 py-2 placeholder-gray-500 dark:bg-gray-900 dark:text-white dark:border-gray-600"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex justify-between">
          <Button type="submit" disabled={loading} variant="default">
            {loading ? 'Saving...' : 'Save Program'}
          </Button>
          <Link href="/programs">
            <Button variant="outline">Cancel</Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
