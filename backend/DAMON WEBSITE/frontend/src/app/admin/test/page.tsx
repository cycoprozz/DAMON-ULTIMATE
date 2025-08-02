'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'react-hot-toast';

export default function SystemTest() {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [aiQuery, setAiQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const createTestCustomer = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/crm/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: customerName,
          email: customerEmail,
          status: 'LEAD',
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      
      toast.success('Test customer created successfully');
      return data;
    } catch (error: any) {
      toast.error(error.message || 'Failed to create test customer');
    } finally {
      setLoading(false);
    }
  };

  const testAIAssistant = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: aiQuery,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      
      setResponse(data.response);
    } catch (error: any) {
      toast.error(error.message || 'Failed to get AI response');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-bold">System Test</h1>
        
        {/* CRM Test */}
        <div className="space-y-4 p-4 border rounded-lg">
          <h2 className="text-xl font-semibold">CRM Test</h2>
          <div className="space-y-2">
            <Label htmlFor="name">Customer Name</Label>
            <Input
              id="name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Customer Email</Label>
            <Input
              id="email"
              type="email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              placeholder="john@example.com"
            />
          </div>
          <Button
            onClick={createTestCustomer}
            disabled={loading || !customerName || !customerEmail}
          >
            Create Test Customer
          </Button>
        </div>

        {/* AI Test */}
        <div className="space-y-4 p-4 border rounded-lg">
          <h2 className="text-xl font-semibold">AI Assistant Test</h2>
          <div className="space-y-2">
            <Label htmlFor="query">Ask a question</Label>
            <Input
              id="query"
              value={aiQuery}
              onChange={(e) => setAiQuery(e.target.value)}
              placeholder="What services do you offer?"
            />
          </div>
          <Button
            onClick={testAIAssistant}
            disabled={loading || !aiQuery}
          >
            Test AI Assistant
          </Button>

          {response && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="font-semibold">AI Response:</p>
              <p className="mt-2">{response}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
