# 🎬 Carib Life Media Platform

A modern, full-stack web application for Carib Life Media's video production and content management platform.

## ✨ Features

### 🎥 Video Production Management
- **Project Tracking**: Manage video production projects from concept to delivery
- **File Management**: Upload and organize video files, images, and assets
- **Client Portal**: Secure client access to project progress and deliverables
- **Payment Integration**: Track project payments and budgets

### 🎨 Modern UI/UX
- **Caribbean Design**: Beautiful, culturally-inspired interface
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Dark/Light Mode**: Adaptive theming for optimal viewing
- **Accessibility**: WCAG compliant for inclusive design

### 🔐 Security & Authentication
- **JWT Authentication**: Secure user sessions and API access
- **Role-Based Access**: Admin and client user roles
- **File Security**: Protected file uploads and downloads
- **Rate Limiting**: API protection against abuse

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Headless UI** - Accessible UI components
- **Framer Motion** - Smooth animations

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Prisma ORM** - Database toolkit
- **PostgreSQL** - Relational database
- **JWT** - Authentication tokens
- **Cloudinary** - File storage and CDN

### DevOps
- **GitHub Actions** - CI/CD pipeline
- **Docker** - Containerization
- **Vercel** - Frontend deployment
- **Railway** - Backend deployment

## 📁 Project Structure

```
cariblife-platform/
├── frontend/                 # Next.js application
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   ├── components/      # React components
│   │   ├── lib/            # Utility functions
│   │   └── styles/         # Global styles
│   ├── public/             # Static assets
│   └── package.json
├── backend/                 # Express.js API
│   ├── routes/             # API endpoints
│   ├── middleware/         # Express middleware
│   ├── services/           # Business logic
│   ├── prisma/            # Database schema
│   └── package.json
└── README.md
```

## 🛠️ Installation

### Prerequisites
- Node.js 18+ 
- PostgreSQL 14+
- npm or yarn

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Configure your environment variables
npm run dev
```

### Database Setup
```bash
cd backend
npx prisma generate
npx prisma db push
npx prisma db seed
```

## 🔧 Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
```

### Backend (.env)
```env
DATABASE_URL="postgresql://user:password@localhost:5432/cariblifedb"
JWT_SECRET=your-jwt-secret
CORS_ORIGIN=http://localhost:3000
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

## 📚 API Documentation

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Projects
- `GET /api/projects` - Get user's projects
- `POST /api/projects` - Create new project
- `GET /api/projects/:id` - Get project details
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Files
- `POST /api/files/upload/:projectId` - Upload file
- `GET /api/files/project/:projectId` - Get project files
- `DELETE /api/files/:fileId` - Delete file

## 🎯 Key Features

### For Content Creators
- **Project Dashboard**: Track all your video projects
- **File Management**: Upload and organize media files
- **Client Communication**: Built-in messaging system
- **Progress Tracking**: Real-time project status updates

### For Clients
- **Project Portal**: View project progress and deliverables
- **File Downloads**: Secure access to final assets
- **Communication**: Direct messaging with production team
- **Payment Tracking**: Monitor project budgets and payments

### For Administrators
- **User Management**: Manage clients and team members
- **Project Oversight**: Monitor all active projects
- **Analytics**: Track platform usage and performance
- **System Settings**: Configure platform parameters

## 🚀 Deployment

### Frontend (Vercel)
```bash
npm run build
vercel --prod
```

### Backend (Railway)
```bash
railway login
railway link
railway up
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@cariblifemedia.com or join our Slack channel.

---

**Built with ❤️ by the Carib Life Media Team**