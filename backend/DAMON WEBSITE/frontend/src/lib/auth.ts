import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Define user roles for the application
type UserRole = "ADMIN" | "USER" | "CONTENT_CREATOR";

// Extend the built-in session types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email?: string | null;
      name?: string | null;
      role: UserRole;
    };
  }

  interface User {
    id: string;
    email: string;
    name: string;
    role: UserRole;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: UserRole;
  }
}

// Mock users for demo purposes
const mockUsers = [
  {
    id: "1",
    email: "admin@cariblifemedia.com",
    password: "admin123",
    firstName: "Damon",
    lastName: "Vanzant",
    role: "ADMIN" as UserRole,
  },
  {
    id: "2",
    email: "creator@cariblifemedia.com", 
    password: "creator123",
    firstName: "Content",
    lastName: "Creator",
    role: "CONTENT_CREATOR" as UserRole,
  },
  {
    id: "3",
    email: "user@cariblifemedia.com",
    password: "user123", 
    firstName: "Test",
    lastName: "User",
    role: "USER" as UserRole,
  },
];

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Find user in mock data
        const user = mockUsers.find(
          (u) => u.email === credentials.email && u.password === credentials.password
        );

        if (!user) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: `${user.firstName} ${user.lastName}`,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
  },
};
