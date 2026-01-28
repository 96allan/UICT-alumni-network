"use client"

import { useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { mentorsData } from "@/lib/mentors-data"
import { Search, Calendar, MessageCircle, Star } from "lucide-react"

export default function MentorshipPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expertiseFilter, setExpertiseFilter] = useState("All")

  const allExpertise = ["All", ...new Set(mentorsData.flatMap((m) => m.expertise))]

  const filteredMentors = mentorsData.filter((mentor) => {
    const matchesSearch =
      searchQuery === "" ||
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise.some((e) => e.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesExpertise = expertiseFilter === "All" || mentor.expertise.includes(expertiseFilter)
    return matchesSearch && matchesExpertise
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
                Mentorship Program
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
                Connect with experienced UICT alumni who can guide your career journey.
              </p>
              <div className="mt-6">
                <Button>Become a Mentor</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search mentors by name or expertise..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={expertiseFilter} onValueChange={setExpertiseFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by expertise" />
                </SelectTrigger>
                <SelectContent>
                  {allExpertise.map((exp) => (
                    <SelectItem key={exp} value={exp}>
                      {exp}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {filteredMentors.map((mentor) => (
                <Card key={mentor.id} className="transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-primary">
                        <Image
                          src={mentor.avatar || "/placeholder.svg"}
                          alt={mentor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground">{mentor.name}</h3>
                        <p className="text-sm text-primary">{mentor.title}</p>
                        <p className="text-sm text-muted-foreground">{mentor.company}</p>
                        <p className="text-xs text-muted-foreground mt-1">Class of {mentor.graduationYear}</p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-muted-foreground">{mentor.bio}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {mentor.expertise.map((exp) => (
                        <Badge key={exp} variant="secondary">
                          {exp}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{mentor.availability}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{mentor.sessions} sessions</span>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-3">
                      <Button className="flex-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Session
                      </Button>
                      <Button variant="outline">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredMentors.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No mentors found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
