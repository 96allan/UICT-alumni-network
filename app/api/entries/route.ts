import { NextResponse } from "next/server"
import fs from "fs/promises"
import path from "path"

const DATA_DIR = path.join(process.cwd(), "data")
const DATA_FILE = path.join(DATA_DIR, "entries.json")

async function ensureDataFile() {
  await fs.mkdir(DATA_DIR, { recursive: true })
  try {
    await fs.access(DATA_FILE)
  } catch (err) {
    await fs.writeFile(DATA_FILE, "[]", "utf8")
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    await ensureDataFile()
    const raw = await fs.readFile(DATA_FILE, "utf8")
    const arr = JSON.parse(raw || "[]")
    const entry = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      ...body,
    }
    arr.push(entry)
    await fs.writeFile(DATA_FILE, JSON.stringify(arr, null, 2), "utf8")
    return NextResponse.json({ ok: true, entry })
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
