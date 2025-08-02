import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Get all metrics in parallel
    const [
      totalCustomers,
      customersByStatus,
      recentInteractions,
      activeLeads,
      convertedCustomers
    ] = await Promise.all([
      // Total customers
      prisma.customer.count(),

      // Customers by status
      prisma.customer.groupBy({
        by: ['status'],
        _count: true,
      }),

      // Recent interactions
      prisma.interaction.findMany({
        take: 5,
        orderBy: { date: 'desc' },
        include: {
          customer: {
            select: {
              name: true,
            },
          },
        },
      }),

      // Active leads
      prisma.customer.count({
        where: { status: 'LEAD' },
      }),

      // Converted customers (status = CUSTOMER)
      prisma.customer.count({
        where: { status: 'CUSTOMER' },
      }),
    ]);

    // Calculate conversion rate
    const conversionRate = totalCustomers > 0 
      ? (convertedCustomers / totalCustomers) * 100 
      : 0;

    // Format customers by status
    const customerStatusCounts = customersByStatus.reduce((acc, curr) => ({
      ...acc,
      [curr.status]: curr._count,
    }), {});

    // Format recent interactions
    const formattedInteractions = recentInteractions.map(interaction => ({
      id: interaction.id,
      customerName: interaction.customer.name,
      type: interaction.type,
      date: interaction.date,
      description: interaction.description,
    }));

    return NextResponse.json({
      metrics: {
        totalCustomers,
        activeLeads,
        conversionRate,
        recentInteractions: formattedInteractions,
      },
      customersByStatus: customerStatusCounts,
    });
  } catch (error: any) {
    console.error('Dashboard Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to load dashboard data' },
      { status: 500 }
    );
  }
}
