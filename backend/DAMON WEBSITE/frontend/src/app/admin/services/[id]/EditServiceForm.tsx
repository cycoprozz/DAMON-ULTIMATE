'use client';

import { ServiceForm } from '@/components/admin/ServiceForm';
import { ServiceStatus } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Service {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: number;
  duration?: string | null;
  image?: string | null;
  features?: Record<string, any> | null;
  status: string;
}

interface Props {
  service: Service;
}

export function EditServiceForm({ service }: Props) {
  const router = useRouter();
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleSubmit = async (data: any) => {
    const response = await fetch(`/api/services/${service.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to update service');
    }

    router.push('/admin/services');
    router.refresh();
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this service?')) {
      return;
    }

    setDeleteLoading(true);

    try {
      const response = await fetch(`/api/services/${service.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to delete service');
      }

      router.push('/admin/services');
      router.refresh();
    } catch (error: any) {
      alert(error.message);
      setDeleteLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <ServiceForm
        initialData={{
          ...service,
          duration: service.duration || undefined,
          image: service.image || undefined,
          features: service.features || undefined,
          status: service.status as ServiceStatus || undefined,
        }}
        onSubmit={handleSubmit}
        submitLabel="Update Service"
      />

      <div className="border-t border-gray-200 pt-8">
        <div className="flex justify-end">
          <button
            type="button"
            disabled={deleteLoading}
            onClick={handleDelete}
            className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            {deleteLoading ? 'Deleting...' : 'Delete Service'}
          </button>
        </div>
      </div>
    </div>
  );
}
