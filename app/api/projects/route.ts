import { type NextRequest, NextResponse } from "next/server"
import { database } from "@/lib/database"

export async function GET() {
  return NextResponse.json(database.projects)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const newProject = {
      _id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
    }
    database.projects.push(newProject)
    return NextResponse.json(newProject, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 })
  }
}
