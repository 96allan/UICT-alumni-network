import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Video, BookOpen, Download, ExternalLink, Briefcase, Target, Users } from "lucide-react"
import Link from "next/link"

const careerResources = [
  {
    title: "Resume Templates",
    description: "Professional resume templates tailored for tech and business roles.",
    icon: FileText,
    type: "Download",
    link: "#",
  },
  {
    title: "Interview Preparation Guide",
    description: "Comprehensive guide covering technical and behavioral interviews.",
    icon: BookOpen,
    type: "PDF",
    link: "#",
  },
  {
    title: "LinkedIn Optimization Workshop",
    description: "Video series on building a standout LinkedIn profile.",
    icon: Video,
    type: "Video",
    link: "#",
  },
  {
    title: "Salary Negotiation Tips",
    description: "Learn how to negotiate your salary and benefits package.",
    icon: Target,
    type: "Article",
    link: "#",
  },
  {
    title: "Career Path Planning",
    description: "Framework for planning your career trajectory in tech.",
    icon: Briefcase,
    type: "Guide",
    link: "#",
  },
  {
    title: "Networking Strategies",
    description: "Best practices for building professional relationships.",
    icon: Users,
    type: "Article",
    link: "#",
  },
]

const upcomingWorkshops = [
  { title: "Tech Interview Bootcamp", date: "Jan 20, 2025", spots: 15 },
  { title: "Personal Branding Workshop", date: "Jan 25, 2025", spots: 20 },
  { title: "Career Transition Panel", date: "Feb 5, 2025", spots: 50 },
]

export default function CareerResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
                Career Resources
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
                Tools, guides, and resources to help you advance your career.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Resource Library</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {careerResources.map((resource) => (
                <Card key={resource.title} className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <resource.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        <span className="text-xs text-muted-foreground">{resource.type}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      {resource.type === "Download" || resource.type === "PDF" ? (
                        <>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </>
                      ) : (
                        <>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Upcoming Workshops</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {upcomingWorkshops.map((workshop) => (
                <Card key={workshop.title}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground">{workshop.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{workshop.date}</p>
                    <p className="text-xs text-primary mt-2">{workshop.spots} spots available</p>
                    <Button size="sm" className="mt-4 w-full">
                      Register
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Need Career Guidance?</h2>
                <p className="mb-6 opacity-90">
                  Book a 1-on-1 session with our career counselors or connect with alumni mentors.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="secondary" asChild>
                    <Link href="/resources/mentorship">Find a Mentor</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                  >
                    Book Counseling
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
