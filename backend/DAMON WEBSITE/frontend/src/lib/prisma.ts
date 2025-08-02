import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// Create a mock Prisma client for when database is not available
const createMockPrismaClient = () => {
  return {
    service: {
      findMany: async () => [
        {
          id: "1",
          name: "Top Quality Video, Film, & Digital Content Production",
          description: "We develop proprietary content such as exclusive interviews, docuseries, reality, drama series, and stimulates interaction amongst members of the Caribbean Diaspora market.",
          price: 2500,
          priceType: "project",
          duration: "2-3 weeks",
          features: "Exclusive interviews\nDocuseries\nReality series\nDrama series\nCaribbean Diaspora market focus",
          status: "ACTIVE",
          categoryId: "1",
          category: {
            id: "1",
            name: "Video Production",
            description: "Professional video production services",
            slug: "video-production",
            image: null
          }
        },
        {
          id: "2",
          name: "Artist & Event Promotion",
          description: "We create black documentaries, reality TV series, and digital promotional materials for cutting edge reggae, soca, dancehall, afrobeats artists, and events.",
          price: 1800,
          priceType: "project",
          duration: "1-2 months",
          features: "Black documentaries\nReality TV series\nDigital promotional materials\nReggae artists\nSoca artists\nDancehall artists\nAfrobeats artists",
          status: "ACTIVE",
          categoryId: "2",
          category: {
            id: "2",
            name: "Artist Promotion",
            description: "Artist and event promotion services",
            slug: "artist-promotion",
            image: null
          }
        },
        {
          id: "3",
          name: "Product Advertisement",
          description: "We feature Caribbean-owned business' products and services through commercial segments on our internationally aired tv programs.",
          price: 1200,
          priceType: "campaign",
          duration: "Ongoing",
          features: "Commercial segments\nInternationally aired TV programs\nCaribbean-owned business focus\nProduct placement\nService promotion",
          status: "ACTIVE",
          categoryId: "3",
          category: {
            id: "3",
            name: "Advertising",
            description: "Product and service advertising",
            slug: "advertising",
            image: null
          }
        }
      ],
      findUnique: async () => null,
      create: async () => ({}),
      update: async () => ({}),
      delete: async () => ({}),
    },
    serviceCategory: {
      findMany: async () => [
        {
          id: "1",
          name: "Video Production",
          description: "Professional video production services",
          slug: "video-production",
          image: null
        },
        {
          id: "2",
          name: "Artist Promotion",
          description: "Artist and event promotion services",
          slug: "artist-promotion",
          image: null
        },
        {
          id: "3",
          name: "Advertising",
          description: "Product and service advertising",
          slug: "advertising",
          image: null
        }
      ],
      findUnique: async () => null,
    },
    user: {
      findMany: async () => [],
      findUnique: async () => null,
      count: async () => 0,
    },
    customer: {
      findMany: async () => [],
      findUnique: async () => null,
      count: async () => 0,
    },
    order: {
      findMany: async () => [],
      count: async () => 0,
    },
    message: {
      findMany: async () => [],
      count: async () => 0,
    },
    $connect: async () => {},
    $disconnect: async () => {},
  } as any;
};

// Check if DATABASE_URL is available
const hasDatabaseUrl = process.env.DATABASE_URL && process.env.DATABASE_URL !== "";

let prisma: PrismaClient | ReturnType<typeof createMockPrismaClient>;

if (hasDatabaseUrl) {
  try {
    prisma = globalForPrisma.prisma || new PrismaClient();
  } catch (error) {
    console.warn('Database connection failed, using mock data:', error);
    prisma = createMockPrismaClient();
  }
} else {
  console.log('No DATABASE_URL found, using mock data');
  prisma = createMockPrismaClient();
}

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export { prisma };
