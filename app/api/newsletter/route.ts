import { type NextRequest, NextResponse } from "next/server"
import { database } from "@/lib/database"

export async function GET() {
  return NextResponse.json(
    database.newsletter.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
  )
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Check if email already exists
    const existingSubscription = database.newsletter.find((sub) => sub.email === body.email)
    if (existingSubscription) {
      return NextResponse.json({ error: "Email already subscribed" }, { status: 400 })
    }

    const newSubscription = {
      _id: Date.now().toString(),
      email: body.email,
      createdAt: new Date().toISOString(),
    }
    database.newsletter.push(newSubscription)
    return NextResponse.json(newSubscription, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 })
  }
}
