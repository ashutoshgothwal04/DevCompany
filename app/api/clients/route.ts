import { type NextRequest, NextResponse } from "next/server"
import { database } from "@/lib/database"

export async function GET() {
  return NextResponse.json(database.clients)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const newClient = {
      _id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
    }
    database.clients.push(newClient)
    return NextResponse.json(newClient, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create client" }, { status: 500 })
  }
}
