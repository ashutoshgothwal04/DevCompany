# Full Stack Development Project

A comprehensive full-stack application featuring a modern landing page and admin panel for managing projects, clients, contacts, and newsletter subscriptions.

## Features

### Landing Page
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **Our Projects**: Dynamic project showcase fetched from backend
- **Happy Clients**: Client testimonials and reviews section
- **Contact Form**: Functional contact form with backend integration
- **Newsletter Subscription**: Email subscription functionality
- **Responsive Design**: Mobile-first responsive design

### Admin Panel
- **Project Management**: Add, edit, and delete projects
- **Client Management**: Manage client testimonials and information
- **Contact Details**: View all contact form submissions
- **Newsletter Subscriptions**: Track email subscriptions
- **Real-time Updates**: Live data management with instant updates

## Technology Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Styling**: Tailwind CSS with custom design system

## Getting Started

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd project-directory
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx                 # Landing page
│   ├── admin/
│   │   └── page.tsx            # Admin panel
│   ├── api/
│   │   ├── projects/           # Project API routes
│   │   ├── clients/            # Client API routes
│   │   ├── contacts/           # Contact form API
│   │   └── newsletter/         # Newsletter API
│   └── layout.tsx              # Root layout
├── components/
│   ├── hero.tsx                # Hero section
│   ├── projects-section.tsx    # Projects showcase
│   ├── clients-section.tsx     # Client testimonials
│   ├── contact-section.tsx     # Contact form
│   ├── newsletter-section.tsx  # Newsletter subscription
│   ├── footer.tsx              # Footer component
│   ├── admin/                  # Admin panel components
│   └── ui/                     # UI components (shadcn/ui)
└── scripts/
    └── database-setup.sql      # Database structure reference
\`\`\`

## API Endpoints

### Projects
- `GET /api/projects` - Fetch all projects
- `POST /api/projects` - Create new project
- `PUT /api/projects/[id]` - Update project
- `DELETE /api/projects/[id]` - Delete project

### Clients
- `GET /api/clients` - Fetch all clients
- `POST /api/clients` - Create new client
- `PUT /api/clients/[id]` - Update client
- `DELETE /api/clients/[id]` - Delete client

### Contacts
- `GET /api/contacts` - Fetch all contact submissions
- `POST /api/contacts` - Submit contact form

### Newsletter
- `GET /api/newsletter` - Fetch all subscriptions
- `POST /api/newsletter` - Subscribe to newsletter

## Database Integration

Currently using in-memory storage for demonstration. For production deployment:

1. **MongoDB Setup**
   \`\`\`bash
   # Install MongoDB driver
   npm install mongodb mongoose
   \`\`\`

2. **Environment Variables**
   \`\`\`env
   MONGODB_URI=your_mongodb_connection_string
   \`\`\`

3. **Replace API routes** with proper database connections

## Deployment

### Frontend & Backend
- **Vercel**: Recommended for Next.js applications
- **Netlify**: Alternative deployment option
- **AWS/Azure/GCP**: For custom server deployments

### Database Options
- **MongoDB Atlas**: Free tier available
- **Supabase**: PostgreSQL alternative
- **PlanetScale**: MySQL alternative

## Additional Features (Bonus)

### Image Cropping
To implement image cropping functionality:

1. Install image processing library:
   \`\`\`bash
   npm install react-image-crop sharp
   \`\`\`

2. Add cropping component to admin forms
3. Process images on upload with specified ratios (450x350)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is created for educational purposes as part of a full-stack development assessment.
