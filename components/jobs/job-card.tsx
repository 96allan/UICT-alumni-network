import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign, Briefcase } from "lucide-react"
import type { Job } from "@/lib/jobs-data"

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  const typeColors = {
    "Full-time": "bg-green-100 text-green-800",
    "Part-time": "bg-blue-100 text-blue-800",
    Contract: "bg-orange-100 text-orange-800",
    Internship: "bg-purple-100 text-purple-800",
  }

  const remoteColors = {
    Remote: "bg-teal-100 text-teal-800",
    "On-site": "bg-slate-100 text-slate-800",
    Hybrid: "bg-indigo-100 text-indigo-800",
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    if (diffDays === 1) return "Posted yesterday"
    if (diffDays < 7) return `Posted ${diffDays} days ago`
    return `Posted on ${date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`
  }

  return (
    <Card className="transition-shadow hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-border">
            <Image src={job.companyLogo || "/placeholder.svg"} alt={job.company} fill className="object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
            </div>
            <p className="text-sm font-medium text-primary">{job.company}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Badge className={typeColors[job.type]}>{job.type}</Badge>
          <Badge className={remoteColors[job.remote]}>{job.remote}</Badge>
          <Badge variant="outline">{job.category}</Badge>
        </div>

        <p className="mt-4 text-sm text-muted-foreground line-clamp-2">{job.description}</p>

        <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="truncate">{job.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-primary" />
            <span className="truncate">{job.salary}</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {job.requirements.slice(0, 3).map((req) => (
            <span key={req} className="text-xs bg-secondary px-2 py-1 rounded-md text-secondary-foreground">
              {req}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Briefcase className="h-3 w-3" />
            <span>{job.postedBy}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{formatDate(job.postedDate)}</span>
          </div>
        </div>

        <div className="mt-4 flex gap-3">
          <Button className="flex-1">Apply Now</Button>
          <Button variant="outline">Save</Button>
        </div>
      </CardContent>
    </Card>
  )
}
