"use client"

import { AlumniCard, type Alumni } from "./alumni-card"
import { Users } from "lucide-react"

interface AlumniGridProps {
  alumni: Alumni[]
}

export function AlumniGrid({ alumni }: AlumniGridProps) {
  if (alumni.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <Users className="h-12 w-12 text-muted-foreground/50" />
        <h3 className="mt-4 text-lg font-medium text-foreground">No alumni found</h3>
        <p className="mt-1 text-sm text-muted-foreground">Try adjusting your search or filters</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {alumni.map((person) => (
        <AlumniCard key={person.id} alumni={person} />
      ))}
    </div>
  )
}
