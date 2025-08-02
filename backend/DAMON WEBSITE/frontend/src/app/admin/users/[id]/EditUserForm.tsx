'use client';

import { UserForm } from "@/components/admin/UserForm";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { UserRole, UserStatus } from "@prisma/client";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  company?: string;
  role: UserRole;
  status: UserStatus;
}

interface Props {
  user: User;
}

export function EditUserForm({ user }: Props) {
  const router = useRouter();
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleSubmit = async (data: any) => {
    const response = await fetch(`/api/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to update user');
    }

    router.push('/admin/users');
    router.refresh();
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this user?')) {
      return;
    }

    setDeleteLoading(true);

    try {
      const response = await fetch(`/api/users/${user.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to delete user');
      }

      router.push('/admin/users');
      router.refresh();
    } catch (error: any) {
      alert(error.message);
      setDeleteLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <UserForm
        initialData={user}
        onSubmit={handleSubmit}
        submitLabel="Update User"
      />

      <div className="border-t border-gray-200 pt-8">
        <div className="flex justify-end">
          <button
            type="button"
            disabled={deleteLoading}
            onClick={handleDelete}
            className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            {deleteLoading ? 'Deleting...' : 'Delete User'}
          </button>
        </div>
      </div>
    </div>
  );
}
