import { prisma } from "@/lib/prisma";
import { ServiceList } from "@/components/admin/ServiceList";

export const revalidate = 0;

export default async function ServicesPage() {
  const services = await prisma.service.findMany({
    include: {
      category: true,
    },
    orderBy: [
      {
        category: {
          name: 'asc',
        },
      },
      {
        name: 'asc',
      },
    ],
  });

  return (
    <div className="container mx-auto py-8">
      <ServiceList services={services} />
    </div>
  );
