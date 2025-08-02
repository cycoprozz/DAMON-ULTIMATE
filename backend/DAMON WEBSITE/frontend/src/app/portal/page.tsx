import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Client Portal - Carib Life Media",
  description: "Access your projects, invoices, and communications with Carib Life Media.",
};

// Mock data - in a real app, this would come from the database
const mockProjects = [
  {
    id: 1,
    name: "Corporate Brand Video",
    status: "In Progress",
    progress: 75,
    startDate: "2024-01-15",
    estimatedCompletion: "2024-02-15",
    description: "A comprehensive brand video showcasing the company's story and values."
  },
  {
    id: 2,
    name: "Social Media Campaign",
    status: "Completed",
    progress: 100,
    startDate: "2023-12-01",
    estimatedCompletion: "2024-01-31",
    description: "Multi-platform social media campaign for Q1 2024."
  },
  {
    id: 3,
    name: "Product Launch Video",
    status: "Planning",
    progress: 25,
    startDate: "2024-02-01",
    estimatedCompletion: "2024-03-15",
    description: "Dynamic product launch video for new software release."
  }
];

const mockInvoices = [
  {
    id: "INV-001",
    project: "Corporate Brand Video",
    amount: 2500,
    status: "Paid",
    dueDate: "2024-01-31",
    issueDate: "2024-01-15"
  },
  {
    id: "INV-002",
    project: "Social Media Campaign",
    amount: 1800,
    status: "Paid",
    dueDate: "2024-01-15",
    issueDate: "2023-12-15"
  },
  {
    id: "INV-003",
    project: "Product Launch Video",
    amount: 3200,
    status: "Pending",
    dueDate: "2024-02-28",
    issueDate: "2024-02-01"
  }
];

const mockMessages = [
  {
    id: 1,
    from: "Damion Johnson",
    subject: "Project Update - Corporate Brand Video",
    date: "2024-01-20",
    read: false,
    preview: "Great news! We've completed the filming phase and are now moving into post-production..."
  },
  {
    id: 2,
    from: "Sarah Mitchell",
    subject: "Social Media Content Approval",
    date: "2024-01-18",
    read: true,
    preview: "Hi there! We have the first batch of social media content ready for your review..."
  },
  {
    id: 3,
    from: "Marcus Chen",
    subject: "Product Launch Video - Initial Concepts",
    date: "2024-01-15",
    read: true,
    preview: "I'm excited to share the initial concepts for your product launch video..."
  }
];

export default function PortalPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
        <p className="text-gray-600">Here's what's happening with your projects.</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Active Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2</div>
                <p className="text-sm text-gray-600">1 in progress, 1 in planning</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Total Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$7,500</div>
                <p className="text-sm text-gray-600">Across all projects</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Unread Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1</div>
                <p className="text-sm text-gray-600">From your project team</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Project update received</p>
                    <p className="text-xs text-gray-600">Corporate Brand Video - 2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Invoice paid</p>
                    <p className="text-xs text-gray-600">INV-002 - Social Media Campaign - 3 days ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New project started</p>
                    <p className="text-xs text-gray-600">Product Launch Video - 1 week ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="space-y-6">
          <div className="grid gap-6">
            {mockProjects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{project.name}</CardTitle>
                    <Badge 
                      variant={
                        project.status === "Completed" ? "default" : 
                        project.status === "In Progress" ? "secondary" : "outline"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-black h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Start Date:</span>
                        <p className="text-gray-600">{project.startDate}</p>
                      </div>
                      <div>
                        <span className="font-medium">Estimated Completion:</span>
                        <p className="text-gray-600">{project.estimatedCompletion}</p>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm">View Details</Button>
                      <Button variant="outline" size="sm">Send Message</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="invoices" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Invoices</CardTitle>
              <CardDescription>View and manage your project invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockInvoices.map((invoice) => (
                  <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <div>
                          <p className="font-medium">{invoice.id}</p>
                          <p className="text-sm text-gray-600">{invoice.project}</p>
                        </div>
                        <Badge 
                          variant={invoice.status === "Paid" ? "default" : "secondary"}
                        >
                          {invoice.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">${invoice.amount.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">Due: {invoice.dueDate}</p>
                    </div>
                    <div className="ml-4">
                      <Button size="sm">View</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Messages</CardTitle>
              <CardDescription>Communicate with your project team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockMessages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      !message.read ? 'bg-blue-50 border-blue-200' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <p className="font-medium">{message.from}</p>
                          {!message.read && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                        </div>
                        <p className="font-medium text-sm">{message.subject}</p>
                        <p className="text-sm text-gray-600 mt-1">{message.preview}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">{message.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 