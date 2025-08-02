import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "ADMIN") {
    redirect("/auth/signin");
  }

  return (
    <div className="min-h-full">
      <div className="flex min-h-full">
        {/* Sidebar */}
        <div className="hidden w-64 bg-gray-900 lg:block">
          <div className="flex h-full flex-col">
            <div className="flex flex-1 flex-col overflow-y-auto">
              <nav className="flex-1 space-y-1 px-2 py-4">
                <div className="mb-8">
                  <h1 className="px-4 text-xl font-semibold text-white">Admin Dashboard</h1>
                </div>
                
                {/* Navigation Items */}
                <a
                  href="/admin"
                  className="group flex items-center px-2 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
                >
                  Dashboard
                </a>
                <a
                  href="/admin/users"
                  className="group flex items-center px-2 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
                >
                  Users
                </a>
                <a
                  href="/admin/services"
                  className="group flex items-center px-2 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
                >
                  Services
                </a>
                <a
                  href="/admin/orders"
                  className="group flex items-center px-2 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
                >
                  Orders
                </a>
                <a
                  href="/admin/messages"
                  className="group flex items-center px-2 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
                >
                  Messages
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-1 flex-col">
          <main className="flex-1 pb-8">
            {/* Page header */}
            <div className="bg-white shadow">
              <div className="px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-semibold text-gray-900">
                    Admin Dashboard
                  </h1>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500">
                      Signed in as {session.user.email}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
