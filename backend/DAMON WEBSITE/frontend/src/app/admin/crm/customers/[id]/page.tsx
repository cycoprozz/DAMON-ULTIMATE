import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { CustomerForm } from '@/components/crm/CustomerForm';

export const metadata: Metadata = {
  title: 'Edit Customer - Carib Life Media',
  description: 'Edit customer details in the CRM system',
};

interface EditCustomerPageProps {
  params: {
    id: string;
  };
}

export default async function EditCustomerPage({ params }: EditCustomerPageProps) {
  const customer = await prisma.customer.findUnique({
    where: { id: params.id },
  });

  if (!customer) {
    notFound();
  }

  return (
    <div>
      <div className="flex items-center justify-between p-8 border-b">
        <div>
          <h1 className="text-2xl font-bold">Edit Customer</h1>
          <p className="text-gray-600 mt-1">
            Update customer information in the CRM system
          </p>
        </div>
      </div>
      <div className="p-8">
        <CustomerForm initialData={customer} />
      </div>
    </div>
  );
}
