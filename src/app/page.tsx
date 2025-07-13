import AdminLayout from "@/components/layout/AdminLayout";

export default function DashboardPage() {
  return (
    <AdminLayout>
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">Welcome to the Admin Portal</h1>
        <p className="mt-2 text-gray-600">
          Use the sidebar or top nav to manage program settings, users, and logs.
        </p>
      </div>
    </AdminLayout>
  );
}
