import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Calendar, Briefcase, BookOpen, ArrowRight, GraduationCap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <GraduationCap className="h-4 w-4" />
                Welcome to the UICT Alumni Network
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
                Connect. Grow. <span className="text-primary">Succeed.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
                Join thousands of UICT graduates building their careers, sharing knowledge, and creating opportunities
                together.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/directory">
                    Explore Directory
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  Join the Network
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-y border-border bg-card py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-0 bg-transparent shadow-none">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Alumni Directory</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Find and connect with fellow UICT graduates worldwide
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-transparent shadow-none">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Job Board</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Exclusive job opportunities from alumni-led companies
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-transparent shadow-none">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Events</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Networking events, reunions, and professional workshops
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-transparent shadow-none">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Mentorship</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Get guidance from experienced alumni in your field
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-primary p-8 text-center sm:p-12">
              <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl text-balance">
                Ready to connect with your alumni community?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                Browse our directory to find classmates, mentors, and professional connections.
              </p>
              <Button variant="secondary" size="lg" className="mt-8" asChild>
                <Link href="/directory">
                  Browse Directory
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
