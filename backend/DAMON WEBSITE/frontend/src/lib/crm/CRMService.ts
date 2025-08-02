import { prisma } from '../prisma';

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  notes?: string;
  status: 'LEAD' | 'PROSPECT' | 'CUSTOMER' | 'INACTIVE';
  lastContactDate?: Date;
}

export interface Interaction {
  id: string;
  customerId: string;
  type: 'EMAIL' | 'CALL' | 'MEETING' | 'CHAT' | 'OTHER';
  description: string;
  date: Date;
  outcome?: string;
  nextAction?: string;
}

export class CRMService {
  // Customer Management
  async createCustomer(data: Omit<Customer, 'id'>): Promise<Customer> {
    return prisma.customer.create({
      data,
    });
  }

  async updateCustomer(id: string, data: Partial<Omit<Customer, 'id'>>): Promise<Customer> {
    return prisma.customer.update({
      where: { id },
      data,
    });
  }

  async getCustomer(id: string): Promise<Customer | null> {
    return prisma.customer.findUnique({
      where: { id },
      include: {
        interactions: true,
        serviceHistory: true,
      },
    });
  }

  async getCustomers(filters?: {
    status?: Customer['status'];
    search?: string;
  }): Promise<Customer[]> {
    const where: any = {};
    if (filters?.status) {
      where.status = filters.status;
    }
    if (filters?.search) {
      where.OR = [
        { name: { contains: filters.search, mode: 'insensitive' } },
        { email: { contains: filters.search, mode: 'insensitive' } },
        { company: { contains: filters.search, mode: 'insensitive' } },
      ];
    }

    return prisma.customer.findMany({
      where,
      orderBy: { lastContactDate: 'desc' },
    });
  }

  // Interaction Management
  async recordInteraction(data: Omit<Interaction, 'id'>): Promise<Interaction> {
    const interaction = await prisma.interaction.create({
      data,
    });

    // Update customer's last contact date
    await prisma.customer.update({
      where: { id: data.customerId },
      data: { lastContactDate: data.date },
    });

    return interaction;
  }

  async getCustomerInteractions(customerId: string): Promise<Interaction[]> {
    return prisma.interaction.findMany({
      where: { customerId },
      orderBy: { date: 'desc' },
    });
  }

  // Analytics
  async getCustomerMetrics() {
    const [totalCustomers, activeLeads, conversionRate] = await Promise.all([
      prisma.customer.count(),
      prisma.customer.count({ where: { status: 'LEAD' } }),
      this.calculateConversionRate(),
    ]);

    return {
      totalCustomers,
      activeLeads,
      conversionRate,
    };
  }

  private async calculateConversionRate(): Promise<number> {
    const [converted, total] = await Promise.all([
      prisma.customer.count({ where: { status: 'CUSTOMER' } }),
      prisma.customer.count({ where: { status: { in: ['LEAD', 'CUSTOMER'] } } }),
    ]);

    return total > 0 ? (converted / total) * 100 : 0;
  }
}
