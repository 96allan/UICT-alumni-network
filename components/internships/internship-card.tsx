import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Calendar, Briefcase } from "lucide-react"
import type { Internship } from "@/lib/internships-data"

interface InternshipCardProps {
  internship: Internship
}

export function InternshipCard({ internship }: InternshipCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  const isDeadlineSoon = () => {
    const deadline = new Date(internship.deadline)
    const now = new Date()
    const diffDays = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    return diffDays <= 7 && diffDays > 0
  }

  return (
    <Card className="transition-shadow hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-border">
            <Image
              src={internship.companyLogo || "/placeholder.svg"}
              alt={internship.company}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground">{internship.title}</h3>
            <p className="text-sm font-medium text-primary">{internship.company}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Badge className={internship.isPaid ? "bg-green-100 text-green-800" : "bg-slate-100 text-slate-800"}>
            {internship.isPaid ? "Paid" : "Unpaid"}
          </Badge>
          <Badge variant="outline">{internship.category}</Badge>
          {isDeadlineSoon() && <Badge className="bg-red-100 text-red-800">Deadline Soon</Badge>}
        </div>

        <p className="mt-4 text-sm text-muted-foreground line-clamp-2">{internship.description}</p>

        <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="truncate">{internship.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span>{internship.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span>Deadline: {formatDate(internship.deadline)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-primary" />
            <span>{internship.stipend}</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {internship.requirements.slice(0, 3).map((req) => (
            <span key={req} className="text-xs bg-secondary px-2 py-1 rounded-md text-secondary-foreground">
              {req}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <span className="text-xs text-muted-foreground">{internship.postedBy}</span>
        </div>

        <div className="mt-4 flex gap-3">
          <Button className="flex-1">Apply Now</Button>
          <Button variant="outline">Save</Button>
        </div>
      </CardContent>
    </Card>
  )
}
