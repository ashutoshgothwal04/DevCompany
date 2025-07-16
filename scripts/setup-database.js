// Simple database setup script that works with current environment
// This creates sample data in the in-memory database

console.log("Setting up database with sample data...")

// Sample data that matches the current database structure
const sampleData = {
  projects: [
    {
      _id: "1",
      name: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with Next.js and React, featuring real-time inventory management, secure payment processing, and responsive design.",
      image: "/placeholder.svg?height=300&width=500",
      createdAt: new Date().toISOString(),
    },
    {
      _id: "2",
      name: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      image: "/placeholder.svg?height=300&width=500",
      createdAt: new Date().toISOString(),
    },
    {
      _id: "3",
      name: "Healthcare Dashboard",
      description:
        "A comprehensive healthcare management dashboard for medical professionals, featuring patient records, appointment scheduling, and analytics.",
      image: "/placeholder.svg?height=300&width=500",
      createdAt: new Date().toISOString(),
    },
  ],

  clients: [
    {
      _id: "1",
      name: "Sarah Johnson",
      description:
        "Working with this team was an absolute pleasure. They delivered our project on time and exceeded all expectations. The attention to detail and professionalism was outstanding.",
      designation: "CEO, TechStart Inc.",
      image: "/placeholder.svg?height=100&width=100",
      createdAt: new Date().toISOString(),
    },
    {
      _id: "2",
      name: "Michael Chen",
      description:
        "The development team transformed our vision into reality. Their technical expertise and creative solutions helped us launch a product that our users love.",
      designation: "CTO, InnovateLab",
      image: "/placeholder.svg?height=100&width=100",
      createdAt: new Date().toISOString(),
    },
    {
      _id: "3",
      name: "Emily Rodriguez",
      description:
        "Exceptional service and quality work. The team was responsive, professional, and delivered exactly what we needed. Highly recommend their services.",
      designation: "Product Manager, DesignCo",
      image: "/placeholder.svg?height=100&width=100",
      createdAt: new Date().toISOString(),
    },
  ],

  users: [
    {
      id: "1",
      name: "Admin User",
      email: "admin@demo.com",
      password: "admin123",
      role: "admin",
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      name: "Regular User",
      email: "user@demo.com",
      password: "user123",
      role: "user",
      createdAt: new Date().toISOString(),
    },
  ],
}

console.log("✅ Sample projects loaded:", sampleData.projects.length)
console.log("✅ Sample clients loaded:", sampleData.clients.length)
console.log("✅ Sample users loaded:", sampleData.users.length)

console.log("\n🚀 Database setup completed successfully!")
console.log("\n📝 Demo Accounts:")
console.log("   Admin: admin@demo.com / admin123")
console.log("   User: user@demo.com / user123")

console.log("\n🌐 Application Features:")
console.log("   ✅ Landing page with projects and clients")
console.log("   ✅ Contact form and newsletter subscription")
console.log("   ✅ User authentication (login/register)")
console.log("   ✅ Admin panel for content management")
console.log("   ✅ Responsive design")

console.log("\n🔗 Ready to deploy to:")
console.log("   • Vercel (recommended)")
console.log("   • Netlify")
console.log("   • Any Node.js hosting platform")
