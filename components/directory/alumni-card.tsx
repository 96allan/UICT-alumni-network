import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Briefcase, GraduationCap, Linkedin, Mail } from "lucide-react"

export interface Alumni {
  id: string
  name: string
  avatar: string
  title: string
  company: string
  department: string
  graduationYear: string
  location: string
  skills: string[]
  linkedin?: string
  email?: string
}

interface AlumniCardProps {
  alumni: Alumni
}

export function AlumniCard({ alumni }: AlumniCardProps) {
  const initials = alumni.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg hover:border-primary/30">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-20 w-20 border-2 border-primary/20">
            <AvatarImage src={alumni.avatar || "/placeholder.svg"} alt={alumni.name} />
            <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">{initials}</AvatarFallback>
          </Avatar>

          <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {alumni.name}
          </h3>

          <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
            <Briefcase className="h-3.5 w-3.5" />
            <span>{alumni.title}</span>
          </div>

          <p className="text-sm font-medium text-foreground/80">{alumni.company}</p>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <GraduationCap className="h-3.5 w-3.5" />
              <span>{alumni.graduationYear}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              <span>{alumni.location}</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-1.5">
            {alumni.skills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>

          <div className="mt-5 flex gap-2">
            {alumni.linkedin && (
              <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent" asChild>
                <a href={alumni.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            )}
            {alumni.email && (
              <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent" asChild>
                <a href={`mailto:${alumni.email}`} aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            )}
            <Button size="sm" className="h-8">
              Connect
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
