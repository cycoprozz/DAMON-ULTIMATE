import { Metadata } from 'next';
import { CRMDashboard } from '@/components/crm/CRMDashboard';

export const metadata: Metadata = {
  title: 'CRM Dashboard - Carib Life Media',
  description: 'Customer Relationship Management dashboard for Carib Life Media',
};

export default function DashboardPage() {
  return (
    <div>
      <div className="flex items-center justify-between p-8 border-b">
        <div>
          <h1 className="text-2xl font-bold">CRM Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Manage your customer relationships and track business metrics
          </p>
        </div>
      </div>
      <CRMDashboard />
    </div>
  );
}
