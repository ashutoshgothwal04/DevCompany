import { type NextRequest, NextResponse } from "next/server"

// In-memory storage for demo purposes
const users: any[] = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@demo.com",
    password: "admin123",
    role: "admin",
  },
  {
    id: "2",
    name: "Regular User",
    email: "user@demo.com",
    password: "user123",
    role: "user",
  },
]

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()

    // Check if user already exists
    const existingUser = users.find((u) => u.email === email)
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
      role: "user" as const,
    }

    users.push(newUser)

    // Return user data without password
    const { password: _, ...userWithoutPassword } = newUser

    return NextResponse.json({
      user: userWithoutPassword,
      message: "Registration successful",
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
