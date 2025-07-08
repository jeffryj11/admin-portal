import AdminLayout from "@/components/layout/AdminLayout";

export default function Page() {
  return (
    <AdminLayout>
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Welcome to the Admin Portal</h1>
        <p className="text-gray-600">
          Use the sidebar or top nav to manage program settings, users, and logs.
        </p>
      </div>
    </AdminLayout>
  );
}
