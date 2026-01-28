import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { scholarshipsData } from "@/lib/scholarships-data"
import { Calendar, DollarSign, GraduationCap, ExternalLink } from "lucide-react"

export default function ScholarshipsPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
  }

  const typeColors = {
    Full: "bg-green-100 text-green-800",
    Partial: "bg-blue-100 text-blue-800",
    Grant: "bg-purple-100 text-purple-800",
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
                Scholarships & Grants
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
                Financial opportunities for UICT students and alumni pursuing further education.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              {scholarshipsData.map((scholarship) => (
                <Card key={scholarship.id} className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{scholarship.title}</CardTitle>
                        <p className="text-sm text-primary mt-1">{scholarship.provider}</p>
                      </div>
                      <Badge className={typeColors[scholarship.type]}>{scholarship.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{scholarship.description}</p>

                    <div className="flex flex-wrap gap-4 text-sm mb-4">
                      <div className="flex items-center gap-2 text-foreground">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="font-semibold">{scholarship.amount}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>Deadline: {formatDate(scholarship.deadline)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <GraduationCap className="h-4 w-4 text-primary" />
                        <span>{scholarship.level}</span>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4">
                      <p className="text-xs text-muted-foreground mb-2">Eligibility:</p>
                      <div className="flex flex-wrap gap-2">
                        {scholarship.eligibility.map((req) => (
                          <span
                            key={req}
                            className="text-xs bg-secondary px-2 py-1 rounded-md text-secondary-foreground"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full mt-4">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Want to Fund a Scholarship?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Give back to the UICT community by establishing a scholarship or contributing to existing funds.
            </p>
            <Button size="lg">Donate Now</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
