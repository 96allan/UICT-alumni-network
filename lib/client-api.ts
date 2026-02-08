export async function createEntry(type: string, payload: any) {
  const res = await fetch("/api/entries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, payload }),
  })
  if (!res.ok) throw new Error("Failed to create entry")
  return res.json()
}
