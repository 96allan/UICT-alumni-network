"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SearchFilters } from "@/components/directory/search-filters"
import { AlumniGrid } from "@/components/directory/alumni-grid"
import { alumniData } from "@/lib/alumni-data"
import { Users } from "lucide-react"

export default function DirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [graduationYear, setGraduationYear] = useState("All Years")
  const [department, setDepartment] = useState("All Departments")
  const [location, setLocation] = useState("All Locations")

  const filteredAlumni = useMemo(() => {
    return alumniData.filter((alumni) => {
      const matchesSearch =
        searchQuery === "" ||
        alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alumni.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alumni.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesYear = graduationYear === "All Years" || alumni.graduationYear === graduationYear

      const matchesDepartment = department === "All Departments" || alumni.department === department

      const matchesLocation = location === "All Locations" || alumni.location === location

      return matchesSearch && matchesYear && matchesDepartment && matchesLocation
    })
  }, [searchQuery, graduationYear, department, location])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
                Alumni Directory
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
                Connect with UICT graduates worldwide. Find classmates, mentors, and build your professional network.
              </p>
            </div>
          </div>
        </section>

        {/* Directory Section */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Stats Bar */}
            <div className="mb-8 flex items-center justify-between rounded-lg bg-card p-4 border border-border">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {filteredAlumni.length} {filteredAlumni.length === 1 ? "alumnus" : "alumni"} found
                </span>
              </div>
              <span className="text-sm text-muted-foreground">{alumniData.length} total members</span>
            </div>

            {/* Search & Filters */}
            <div className="mb-8">
              <SearchFilters
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                graduationYear={graduationYear}
                setGraduationYear={setGraduationYear}
                department={department}
                setDepartment={setDepartment}
                location={location}
                setLocation={setLocation}
              />
            </div>

            {/* Alumni Grid */}
            <AlumniGrid alumni={filteredAlumni} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
