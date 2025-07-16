# Deployment Guide

## Quick Deployment Steps

### 1. Local Development Setup

1. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

2. **Run the setup script**
   \`\`\`bash
   npm run setup-db
   # or
   node scripts/setup-database.js
   \`\`\`

3. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`

### 2. Vercel Deployment (Recommended)

1. **Push to GitHub**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   \`\`\`

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with default settings

### 3. Database Setup (Production)

#### Option A: MongoDB Atlas (Free Tier)
1. Create account at [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create new cluster (free tier)
3. Get connection string
4. Add to Vercel environment variables:
   \`\`\`
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/fullstack_app
   \`\`\`
5. Run the MongoDB setup script:
   \`\`\`bash
   MONGODB_URI=your_connection_string node scripts/mongodb-setup.js
   \`\`\`

#### Current Setup (In-Memory)
- The application currently uses in-memory storage
- Perfect for demo and development
- All data resets on server restart
- No database setup required

### 4. Environment Variables

For production with MongoDB:

\`\`\`env
# Database
MONGODB_URI=your_mongodb_connection_string

# Authentication (for production)
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=https://your-domain.com
\`\`\`

### 4. Production Checklist

- [ ] Replace in-memory storage with real database
- [ ] Add password hashing (bcrypt)
- [ ] Implement proper session management
- [ ] Add input validation and sanitization
- [ ] Set up error logging
- [ ] Configure CORS properly
- [ ] Add rate limiting
- [ ] Optimize images and assets
- [ ] Set up monitoring and analytics

## Current Demo Accounts

- **Admin**: admin@demo.com / admin123
- **User**: user@demo.com / user123

## Features Working ✅

**Landing Page**
- Hero section with navigation
- Dynamic projects from backend
- Client testimonials
- Contact form with backend submission
- Newsletter subscription
- Responsive design

**Authentication**
- Login/Register modals in navbar
- Role-based access control
- Session management
- Protected admin routes

**Admin Panel**
- Project management (CRUD)
- Client management (CRUD)
- Contact form submissions view
- Newsletter subscriptions view
- Admin-only access

**Backend APIs**
- Authentication endpoints
- Projects CRUD operations
- Clients CRUD operations
- Contact form handling
- Newsletter subscriptions

## Next Steps for Production

1. **Database Migration**: Replace in-memory storage with MongoDB/PostgreSQL
2. **Security**: Add password hashing, JWT tokens, input validation
3. **Email Integration**: Set up SMTP for contact form notifications
4. **Image Upload**: Implement file upload for project/client images
5. **Analytics**: Add Google Analytics or similar
6. **SEO**: Optimize meta tags and structured data
7. **Performance**: Add caching, image optimization
8. **Testing**: Add unit and integration tests
