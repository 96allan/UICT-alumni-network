"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { InternshipCard } from "@/components/internships/internship-card"
import { internshipsData } from "@/lib/internships-data"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Search, GraduationCap, Plus } from "lucide-react"

export default function InternshipsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [category, setCategory] = useState("All Categories")
  const [paidFilter, setPaidFilter] = useState("All")
  const [durationFilter, setDurationFilter] = useState("All Durations")

  const categories = ["All Categories", ...new Set(internshipsData.map((i) => i.category))]
  const durations = ["All Durations", "3 months", "4 months", "6 months"]

  const filteredInternships = useMemo(() => {
    return internshipsData.filter((internship) => {
      const matchesSearch =
        searchQuery === "" ||
        internship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        internship.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        internship.requirements.some((r) => r.toLowerCase().includes(searchQuery.toLowerCase()))
      const matchesCategory = category === "All Categories" || internship.category === category
      const matchesPaid =
        paidFilter === "All" ||
        (paidFilter === "Paid" && internship.isPaid) ||
        (paidFilter === "Unpaid" && !internship.isPaid)
      const matchesDuration = durationFilter === "All Durations" || internship.duration === durationFilter
      return matchesSearch && matchesCategory && matchesPaid && matchesDuration
    })
  }, [searchQuery, category, paidFilter, durationFilter])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
                Internship Opportunities
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
                Kickstart your career with internships from UICT alumni companies and partners.
              </p>
              <div className="mt-6">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Post an Internship
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search internships, companies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={paidFilter} onValueChange={setPaidFilter}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Paid" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="Paid">Paid</SelectItem>
                    <SelectItem value="Unpaid">Unpaid</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={durationFilter} onValueChange={setDurationFilter}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    {durations.map((dur) => (
                      <SelectItem key={dur} value={dur}>
                        {dur}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                <GraduationCap className="inline-block h-4 w-4 mr-1" />
                {filteredInternships.length} {filteredInternships.length === 1 ? "internship" : "internships"} available
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {filteredInternships.map((internship) => (
                <InternshipCard key={internship.id} internship={internship} />
              ))}
            </div>

            {filteredInternships.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No internships found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
