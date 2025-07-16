// Database utility for managing in-memory data
// In production, replace with actual database connections

export interface User {
  id: string
  name: string
  email: string
  password: string
  role: "admin" | "user"
  createdAt: string
}

export interface Project {
  _id: string
  name: string
  description: string
  image: string
  createdAt: string
}

export interface Client {
  _id: string
  name: string
  description: string
  designation: string
  image: string
  createdAt: string
}

export interface Contact {
  _id: string
  fullName: string
  email: string
  mobile: string
  city: string
  createdAt: string
}

export interface Newsletter {
  _id: string
  email: string
  createdAt: string
}

// In-memory storage (replace with actual database in production)
export const database = {
  users: [
    {
      id: "1",
      name: "Admin User",
      email: "admin@demo.com",
      password: "admin123",
      role: "admin" as const,
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      name: "Regular User",
      email: "user@demo.com",
      password: "user123",
      role: "user" as const,
      createdAt: new Date().toISOString(),
    },
  ] as User[],

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
  ] as Project[],

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
  ] as Client[],

  contacts: [] as Contact[],
  newsletter: [] as Newsletter[],
}
