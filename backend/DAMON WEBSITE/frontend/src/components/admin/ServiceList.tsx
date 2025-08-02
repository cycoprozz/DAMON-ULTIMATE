'use client';

import { ServiceStatus } from "@prisma/client";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string | null;
  status: ServiceStatus;
  category: {
    id: string;
    name: string;
  };
}

interface ServiceListProps {
  services: Service[];
}

export function ServiceList({ services }: ServiceListProps) {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this service?")) {
      return;
    }

    try {
      const response = await fetch(`/api/services?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to delete service");
      }

      toast.success("Service deleted successfully");
      router.refresh();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Services</h2>
        <Link href="/admin/services/new">
          <Button>Add New Service</Button>
        </Link>
      </div>
      <div className="grid gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-4 border rounded-lg bg-white shadow-sm flex justify-between items-center"
          >
            <div>
              <div className="font-medium">{service.name}</div>
              <div className="text-sm text-gray-500">
                Category: {service.category.name}
              </div>
              <div className="text-sm text-gray-500">
                Price: ${service.price.toFixed(2)}
              </div>
              <div className="text-sm text-gray-500">
                Status: {service.status}
              </div>
            </div>
            <div className="flex gap-2">
              <Link href={`/admin/services/${service.id}`}>
                <Button variant="outline">Edit</Button>
              </Link>
              <Button
                variant="destructive"
                onClick={() => handleDelete(service.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
