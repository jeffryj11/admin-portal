'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle, Eye, Pencil, Trash2 } from 'lucide-react';
import Link from 'next/link';

interface Program {
  id: string;
  name: string;
  status: 'Active' | 'Draft' | 'Archived';
  description: string;
}

export default function ProgramPage() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      const { data, error } = await supabase
        .from('programs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading programs:', error.message);
      } else {
        setPrograms(data || []);
      }
    };

    fetchPrograms();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this program?');
    if (confirmDelete) {
      const { error } = await supabase.from('programs').delete().eq('id', id);
      if (!error) {
        setPrograms((prev) => prev.filter((p) => p.id !== id));
      } else {
        alert('Failed to delete program.');
      }
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Programs</h1>
        <Button asChild>
          <Link href="/programs/new">
            <PlusCircle className="mr-2 h-4 w-4" /> Add Program
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program) => (
          <Card key={program.id} className="bg-white text-black">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {program.name}
                <span
                  className={\`text-sm px-2 py-1 rounded-full font-semibold \${program.status === 'Active'
                    ? 'bg-green-600 text-white'
                    : program.status === 'Draft'
                    ? 'bg-yellow-600 text-white'
                    : 'bg-gray-600 text-white'}\`}
                >
                  {program.status}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-700">{program.description}</p>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm" asChild>
                  <Link href={`/programs/${program.id}`}>
                    <Eye className="h-4 w-4 mr-1" /> View
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/programs/${program.id}/edit`}>
                    <Pencil className="h-4 w-4 mr-1" /> Edit
                  </Link>
                </Button>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(program.id)}>
                  <Trash2 className="h-4 w-4 mr-1" /> Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}