import { UserRole } from '@prisma/client';

export interface NavItem {
  title: string;
  href: string;
  role?: UserRole[];
}

export const navigation: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'Services', href: '/services' },
  { title: 'Portfolio', href: '/portfolio' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
  { 
    title: 'Client Portal', 
    href: '/portal',
    role: [UserRole.CLIENT, UserRole.ADMIN] 
  },
  { 
    title: 'Admin Dashboard', 
    href: '/admin',
    role: [UserRole.ADMIN] 
  },
];
