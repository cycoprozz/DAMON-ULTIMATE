'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CustomerStatus } from '@prisma/client';

interface DashboardMetrics {
  totalCustomers: number;
  activeLeads: number;
  conversionRate: number;
  recentInteractions: Array<{
    id: string;
    customerName: string;
    type: string;
    date: Date;
    description: string;
  }>;
}

interface CustomersByStatus {
  [key in CustomerStatus]: number;
}

export function CRMDashboard() {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [customersByStatus, setCustomersByStatus] = useState<CustomersByStatus | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch dashboard data
  const loadDashboardData = async () => {
    try {
      const response = await fetch('/api/crm/dashboard');
      const data = await response.json();
      setMetrics(data.metrics);
      setCustomersByStatus(data.customersByStatus);
    } catch (error) {
      console.error('Failed to load dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Load data on component mount
  useState(() => {
    loadDashboardData();
  }, []);

  if (isLoading) {
    return <div className="p-8">Loading dashboard...</div>;
  }

  return (
    <div className="p-8 space-y-8">
      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold text-sm text-gray-500">Total Customers</h3>
          <p className="text-3xl font-bold mt-2">{metrics?.totalCustomers || 0}</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold text-sm text-gray-500">Active Leads</h3>
          <p className="text-3xl font-bold mt-2">{metrics?.activeLeads || 0}</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold text-sm text-gray-500">Conversion Rate</h3>
          <p className="text-3xl font-bold mt-2">
            {metrics?.conversionRate.toFixed(1) || 0}%
          </p>
        </Card>
      </div>

      {/* Customer Distribution */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Customer Distribution</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {customersByStatus && Object.entries(customersByStatus).map(([status, count]) => (
            <div key={status} className="text-center">
              <div className="text-sm text-gray-500">{status}</div>
              <div className="text-2xl font-semibold mt-1">{count}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Recent Interactions</h3>
        <div className="space-y-4">
          {metrics?.recentInteractions.map((interaction) => (
            <div key={interaction.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="font-semibold">{interaction.customerName}</h4>
                  <span className="text-sm text-gray-500">
                    {new Date(interaction.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{interaction.description}</p>
                <div className="mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {interaction.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={() => window.location.href = '/crm/customers/new'}
            className="p-4 text-center bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Add Customer
          </button>
          <button
            onClick={() => window.location.href = '/crm/interactions/new'}
            className="p-4 text-center bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200"
          >
            Log Interaction
          </button>
          <button
            onClick={() => window.location.href = '/crm/tasks'}
            className="p-4 text-center bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200"
          >
            View Tasks
          </button>
          <button
            onClick={() => window.location.href = '/crm/reports'}
            className="p-4 text-center bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200"
          >
            Generate Report
          </button>
        </div>
      </Card>
    </div>
  );
}
