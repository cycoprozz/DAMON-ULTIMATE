import { Metadata } from 'next';
import { CustomerList } from '@/components/crm/CustomerList';

export const metadata: Metadata = {
  title: 'Customer Management - Carib Life Media',
  description: 'Manage customers and their interactions',
};

export default function CustomersPage() {
  return (
    <div>
      <div className="flex items-center justify-between p-8 border-b">
        <div>
          <h1 className="text-2xl font-bold">Customer Management</h1>
          <p className="text-gray-600 mt-1">
            View and manage all your customer relationships
          </p>
        </div>
      </div>
      <div className="p-8">
        <CustomerList />
      </div>
    </div>
  );
}
