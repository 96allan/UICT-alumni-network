"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, SlidersHorizontal } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SearchFiltersProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  graduationYear: string
  setGraduationYear: (year: string) => void
  department: string
  setDepartment: (dept: string) => void
  location: string
  setLocation: (loc: string) => void
}

const years = ["All Years", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015"]
const departments = [
  "All Departments",
  "Computer Science",
  "Information Technology",
  "Software Engineering",
  "Data Science",
  "Cybersecurity",
  "Network Engineering",
]
const locations = [
  "All Locations",
  "Kampala",
  "Nairobi",
  "Dar es Salaam",
  "Kigali",
  "London",
  "New York",
  "Dubai",
  "Remote",
]

export function SearchFilters({
  searchQuery,
  setSearchQuery,
  graduationYear,
  setGraduationYear,
  department,
  setDepartment,
  location,
  setLocation,
}: SearchFiltersProps) {
  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search by name, company, or skill..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 h-12 bg-card"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <SlidersHorizontal className="h-4 w-4" />
          <span>Filters:</span>
        </div>

        <Select value={graduationYear} onValueChange={setGraduationYear}>
          <SelectTrigger className="w-[140px] bg-card">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            {years.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={department} onValueChange={setDepartment}>
          <SelectTrigger className="w-[180px] bg-card">
            <SelectValue placeholder="Department" />
          </SelectTrigger>
          <SelectContent>
            {departments.map((dept) => (
              <SelectItem key={dept} value={dept}>
                {dept}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger className="w-[150px] bg-card">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((loc) => (
              <SelectItem key={loc} value={loc}>
                {loc}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setSearchQuery("")
            setGraduationYear("All Years")
            setDepartment("All Departments")
            setLocation("All Locations")
          }}
        >
          Clear All
        </Button>
      </div>
    </div>
  )
}
