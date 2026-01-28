"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { JobCard } from "@/components/jobs/job-card"
import { jobsData } from "@/lib/jobs-data"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Search, Briefcase, Plus } from "lucide-react"

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [jobType, setJobType] = useState("All Types")
  const [remoteType, setRemoteType] = useState("All")
  const [category, setCategory] = useState("All Categories")

  const categories = ["All Categories", ...new Set(jobsData.map((j) => j.category))]
  const jobTypes = ["All Types", "Full-time", "Part-time", "Contract", "Internship"]
  const remoteTypes = ["All", "Remote", "On-site", "Hybrid"]

  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      const matchesSearch =
        searchQuery === "" ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.requirements.some((r) => r.toLowerCase().includes(searchQuery.toLowerCase()))
      const matchesType = jobType === "All Types" || job.type === jobType
      const matchesRemote = remoteType === "All" || job.remote === remoteType
      const matchesCategory = category === "All Categories" || job.category === category
      return matchesSearch && matchesType && matchesRemote && matchesCategory
    })
  }, [searchQuery, jobType, remoteType, category])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
                Job Board
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
                Exclusive job opportunities shared by UICT alumni and partner companies.
              </p>
              <div className="mt-6">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Post a Job
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
                  placeholder="Search jobs, companies, skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <Select value={jobType} onValueChange={setJobType}>
                  <SelectTrigger className="w-[130px]">
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={remoteType} onValueChange={setRemoteType}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {remoteTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                <Briefcase className="inline-block h-4 w-4 mr-1" />
                {filteredJobs.length} {filteredJobs.length === 1 ? "job" : "jobs"} available
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No jobs found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
