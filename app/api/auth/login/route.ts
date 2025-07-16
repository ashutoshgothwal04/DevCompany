import { type NextRequest, NextResponse } from "next/server"

// Demo users for authentication
const users = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@demo.com",
    password: "admin123",
    role: "admin" as const,
  },
  {
    id: "2",
    name: "Regular User",
    email: "user@demo.com",
    password: "user123",
    role: "user" as const,
  },
]

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Find user by email and password
    const user = users.find((u) => u.email === email && u.password === password)

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Return user data without password
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json({
      user: userWithoutPassword,
      message: "Login successful",
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
