import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin } from "lucide-react"
import type { ExecutiveMember } from "@/lib/executive-data"

interface ExecutiveCardProps {
  member: ExecutiveMember
  featured?: boolean
}

export function ExecutiveCard({ member, featured = false }: ExecutiveCardProps) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  if (featured) {
    return (
      <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
        <CardContent className="p-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <Avatar className="h-32 w-32 border-4 border-primary/30 shadow-lg">
                <AvatarImage src={member.photo || "/placeholder.svg"} alt={member.name} />
                <AvatarFallback className="bg-primary/10 text-primary text-2xl font-bold">{initials}</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground shadow-md">
                {member.position}
              </div>
            </div>

            <h3 className="mt-6 text-xl font-bold text-foreground">{member.name}</h3>

            {member.bio && <p className="mt-3 text-sm text-muted-foreground max-w-md">{member.bio}</p>}

            <div className="mt-5 flex gap-3">
              {member.email && (
                <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                  <a href={`mailto:${member.email}`}>
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                </Button>
              )}
              {member.phone && (
                <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                  <a href={`tel:${member.phone}`}>
                    <Phone className="h-4 w-4" />
                    Call
                  </a>
                </Button>
              )}
              {member.linkedIn && (
                <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                  <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg hover:border-primary/30">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-24 w-24 border-2 border-primary/20 transition-transform group-hover:scale-105">
            <AvatarImage src={member.photo || "/placeholder.svg"} alt={member.name} />
            <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">{initials}</AvatarFallback>
          </Avatar>

          <div className="mt-4 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            {member.position}
          </div>

          <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {member.name}
          </h3>

          {member.bio && <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{member.bio}</p>}

          <div className="mt-4 flex gap-2">
            {member.email && (
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                <a href={`mailto:${member.email}`} aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            )}
            {member.phone && (
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                <a href={`tel:${member.phone}`} aria-label="Phone">
                  <Phone className="h-4 w-4" />
                </a>
              </Button>
            )}
            {member.linkedIn && (
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
