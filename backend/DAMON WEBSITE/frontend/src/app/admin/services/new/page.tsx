'use client';

import { ServiceForm } from "@/components/admin/ServiceForm";
import { useRouter } from "next/navigation";

export default function NewServicePage() {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    const response = await fetch('/api/services', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to create service');
    }

    router.push('/admin/services');
    router.refresh();
  };

  return (
    <div>
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            New Service
          </h2>
        </div>
      </div>

      <div className="mt-8">
        <ServiceForm onSubmit={handleSubmit} submitLabel="Create Service" />
      </div>
    </div>
  );
}
