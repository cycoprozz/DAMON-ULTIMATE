import { PrismaClient, UserRole, UserStatus } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://cariblife_user:cariblife_password@localhost:5432/cariblife_db"
    }
  }
});

async function createAdminUser() {
  const email = 'admin@cariblifemedia.com';
  const password = 'Admin123!@#'; // Change this password immediately after first login
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const admin = await prisma.user.create({
      data: {
        email,
        passwordHash: hashedPassword,
        firstName: 'Admin',
        lastName: 'User',
        role: UserRole.ADMIN,
        status: UserStatus.ACTIVE,
      },
    });

    console.log('Admin user created successfully:', admin.email);
  } catch (error: any) {
    if (error.code === 'P2002') {
      console.log('User with this email already exists');
    } else {
      console.error('Error creating admin user:', error);
    }
  } finally {
    await prisma.$disconnect();
  }
}

createAdminUser();
