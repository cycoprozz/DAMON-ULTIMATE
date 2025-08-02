import { Metadata } from 'next';
import { CustomerForm } from '@/components/crm/CustomerForm';

export const metadata: Metadata = {
  title: 'Add Customer - Carib Life Media',
  description: 'Add a new customer to the CRM system',
};

export default function NewCustomerPage() {
  return (
    <div>
      <div className="flex items-center justify-between p-8 border-b">
        <div>
          <h1 className="text-2xl font-bold">Add New Customer</h1>
          <p className="text-gray-600 mt-1">
            Create a new customer record in the CRM system
          </p>
        </div>
      </div>
      <div className="p-8">
        <CustomerForm />
      </div>
    </div>
  );
}
