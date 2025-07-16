// MongoDB setup script for Node.js
// Run with: node scripts/mongodb-setup.js

const { MongoClient } = require("mongodb")

// MongoDB connection URL (replace with your actual connection string)
const MONGODB_URI = process.env.MONGODB_URI ;
const DB_NAME = "fullstack_app"

async function setupDatabase() {
  const client = new MongoClient(MONGODB_URI)

  try {
    // Connect to MongoDB
    await client.connect()
    console.log("Connected to MongoDB")

    const db = client.db(DB_NAME)

    // Create collections
    const collections = ["users", "projects", "clients", "contacts", "newsletter"]

    for (const collectionName of collections) {
      try {
        await db.createCollection(collectionName)
        console.log(`Created collection: ${collectionName}`)
      } catch (error) {
        if (error.code === 48) {
          console.log(`Collection ${collectionName} already exists`)
        } else {
          throw error
        }
      }
    }

    // Create indexes
    await db.collection("users").createIndex({ email: 1 }, { unique: true })
    await db.collection("newsletter").createIndex({ email: 1 }, { unique: true })
    await db.collection("contacts").createIndex({ createdAt: -1 })
    await db.collection("projects").createIndex({ createdAt: -1 })
    await db.collection("clients").createIndex({ createdAt: -1 })

    console.log("Created indexes")

    // Insert sample users (check if they exist first)
    const existingUsers = await db.collection("users").countDocuments()
    if (existingUsers === 0) {
      await db.collection("users").insertMany([
        {
          name: "Admin User",
          email: "admin@demo.com",
          password: "admin123", // In production, hash this
          role: "admin",
          createdAt: new Date(),
        },
        {
          name: "Regular User",
          email: "user@demo.com",
          password: "user123", // In production, hash this
          role: "user",
          createdAt: new Date(),
        },
      ])
      console.log("Inserted sample users")
    }

    // Insert sample projects
    const existingProjects = await db.collection("projects").countDocuments()
    if (existingProjects === 0) {
      await db.collection("projects").insertMany([
        {
          name: "E-Commerce Platform",
          description:
            "A modern e-commerce platform built with Next.js and React, featuring real-time inventory management, secure payment processing, and responsive design.",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
          createdAt: new Date(),
        },
        {
          name: "Task Management App",
          description:
            "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
          image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
          createdAt: new Date(),
        },
        {
          name: "Healthcare Dashboard",
          description:
            "A comprehensive healthcare management dashboard for medical professionals, featuring patient records, appointment scheduling, and analytics.",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
          createdAt: new Date(),
        },
      ])
      console.log("Inserted sample projects")
    }

    // Insert sample clients
    const existingClients = await db.collection("clients").countDocuments()
    if (existingClients === 0) {
      await db.collection("clients").insertMany([
        {
          name: "Sarah Johnson",
          description:
            "Working with this team was an absolute pleasure. They delivered our project on time and exceeded all expectations. The attention to detail and professionalism was outstanding.",
          designation: "CEO, TechStart Inc.",
          image: "https://images.unsplash.com/photo-1494790108755-2616b9c5e8e1?w=100&h=100&fit=crop&crop=face",
          createdAt: new Date(),
        },
        {
          name: "Michael Chen",
          description:
            "The development team transformed our vision into reality. Their technical expertise and creative solutions helped us launch a product that our users love.",
          designation: "CTO, InnovateLab",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
          createdAt: new Date(),
        },
        {
          name: "Emily Rodriguez",
          description:
            "Exceptional service and quality work. The team was responsive, professional, and delivered exactly what we needed. Highly recommend their services.",
          designation: "Product Manager, DesignCo",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
          createdAt: new Date(),
        },
      ])
      console.log("Inserted sample clients")
    }

    console.log("Database setup completed successfully!")
  } catch (error) {
    console.error("Error setting up database:", error)
  } finally {
    await client.close()
  }
}

// Run the setup
setupDatabase()
