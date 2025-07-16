import { type NextRequest, NextResponse } from "next/server"
import { database } from "@/lib/database"

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const clientIndex = database.clients.findIndex((c) => c._id === params.id)

    if (clientIndex === -1) {
      return NextResponse.json({ error: "Client not found" }, { status: 404 })
    }

    database.clients[clientIndex] = { ...database.clients[clientIndex], ...body }
    return NextResponse.json(database.clients[clientIndex])
  } catch (error) {
    return NextResponse.json({ error: "Failed to update client" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const clientIndex = database.clients.findIndex((c) => c._id === params.id)

    if (clientIndex === -1) {
      return NextResponse.json({ error: "Client not found" }, { status: 404 })
    }

    database.clients.splice(clientIndex, 1)
    return NextResponse.json({ message: "Client deleted successfully" })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete client" }, { status: 500 })
  }
}
