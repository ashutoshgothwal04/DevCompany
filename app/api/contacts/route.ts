import { type NextRequest, NextResponse } from "next/server"
import { database } from "@/lib/database"

export async function GET() {
  return NextResponse.json(
    database.contacts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
  )
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const newContact = {
      _id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
    }
    database.contacts.push(newContact)
    return NextResponse.json(newContact, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create contact" }, { status: 500 })
  }
}
