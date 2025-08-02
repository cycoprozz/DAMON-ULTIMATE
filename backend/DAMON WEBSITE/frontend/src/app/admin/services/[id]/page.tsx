import { prisma } from "@/lib/prisma";
import { EditServiceForm } from "./EditServiceForm";

interface Props {
  params: {
    id: string;
  };
}

async function getService(id: string) {
  const service = await prisma.service.findUnique({
    where: { id },
    include: {
      category: true,
    },
  });

  if (!service) {
    throw new Error("Service not found");
  }

  return service;
}

export default async function EditServicePage({ params }: Props) {
  const service = await getService(params.id);

  return (
    <div>
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Edit Service
          </h2>
        </div>
      </div>

      <div className="mt-8">
        <EditServiceForm service={service} />
      </div>
    </div>
  );
}
