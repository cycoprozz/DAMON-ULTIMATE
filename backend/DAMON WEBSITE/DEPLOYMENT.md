# 🚀 Netlify Deployment Guide

## 📋 Prerequisites

1. **Netlify Account**: Sign up at [netlify.com](https://netlify.com)
2. **GitHub Repository**: Your code is already on GitHub
3. **Supabase Setup**: Database schema needs to be applied

## 🔧 Step 1: Set up Supabase Database

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Navigate to your project: `yweaorneenjsytxjsspa`
3. Go to **SQL Editor**
4. Copy and paste the contents of `frontend/supabase-schema.sql`
5. Run the SQL script to create all tables and policies

## 🚀 Step 2: Deploy to Netlify

### Option A: Deploy via Netlify UI (Recommended)

1. **Connect to GitHub**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub
   - Select your repository: `cycoprozz/DAMON-ULTIMATE`

2. **Configure Build Settings**:
   ```
   Base directory: frontend
   Build command: npm run build
   Publish directory: .next
   ```

3. **Set Environment Variables**:
   - Go to Site settings → Environment variables
   - Add the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://yweaorneenjsytxjsspa.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3ZWFvcm5lZW5qc3l0eGpzc3BhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxNzI0NzQsImV4cCI6MjA2OTc0ODQ3NH0.7KB_KBWTOePmECrzVOz9TaukjHEkoJ1_A_ldC2ZeJe0
   NEXTAUTH_SECRET=your-production-secret-key-here
   NEXTAUTH_URL=https://your-app-name.netlify.app
   ```

4. **Deploy**:
   - Click "Deploy site"
   - Wait for build to complete
   - Your site will be live at `https://your-app-name.netlify.app`

### Option B: Deploy via Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Deploy**:
   ```bash
   cd frontend
   netlify deploy --prod --dir=.next
   ```

## 🔧 Step 3: Configure Domain (Optional)

1. **Custom Domain**:
   - Go to Site settings → Domain management
   - Add your custom domain
   - Update DNS records as instructed

2. **Update Environment Variables**:
   - Update `NEXTAUTH_URL` with your custom domain
   - Redeploy if needed

## 🧪 Step 4: Test Your Deployment

1. **Test Authentication**:
   - Try signing up a new user
   - Test login functionality
   - Verify password reset

2. **Test Features**:
   - Create a new project
   - Upload files
   - Test all CRUD operations

3. **Check Database**:
   - Go to Supabase Dashboard
   - Verify tables are created
   - Check that data is being stored

## 🔒 Step 5: Security Configuration

1. **Supabase Auth Settings**:
   - Go to Supabase Dashboard → Authentication → Settings
   - Add your Netlify domain to allowed redirect URLs:
   ```
   https://your-app-name.netlify.app/auth/callback
   https://your-app-name.netlify.app/auth/signin
   https://your-app-name.netlify.app/auth/signup
   ```

2. **Environment Variables**:
   - Generate a strong `NEXTAUTH_SECRET`:
   ```bash
   openssl rand -base64 32
   ```

## 📊 Step 6: Monitor Your Deployment

1. **Netlify Analytics**:
   - Enable analytics in Site settings
   - Monitor traffic and performance

2. **Supabase Monitoring**:
   - Check database logs
   - Monitor API usage
   - Set up alerts if needed

## 🚨 Troubleshooting

### Build Errors
- Check Node.js version (should be 18+)
- Verify all dependencies are installed
- Check environment variables are set correctly

### Authentication Issues
- Verify Supabase URL and key are correct
- Check redirect URLs in Supabase settings
- Ensure RLS policies are applied

### Database Issues
- Run the SQL schema again
- Check table permissions
- Verify triggers are working

## 📞 Support

If you encounter issues:
1. Check Netlify build logs
2. Verify Supabase configuration
3. Test locally first: `npm run dev`

---

**Your Carib Life Media platform will be live at: `https://your-app-name.netlify.app`** 🎬✨ 