'use client';

import { UserForm } from "@/components/admin/UserForm";
import { useRouter } from "next/navigation";

export default function NewUserPage() {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to create user');
    }

    router.push('/admin/users');
    router.refresh();
  };

  return (
    <div>
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            New User
          </h2>
        </div>
      </div>

      <div className="mt-8">
        <UserForm onSubmit={handleSubmit} submitLabel="Create User" />
      </div>
    </div>
  );
}
