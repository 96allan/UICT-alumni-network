import { ExecutiveCard } from "@/components/executive/executive-card"
import { executiveCommittee } from "@/lib/executive-data"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Users } from "lucide-react"

export const metadata = {
  title: "Executive Committee | UICT Alumni Network",
  description: "Meet the dedicated leaders of the UICT Alumni Association Executive Committee.",
}

export default function ExecutivePage() {
  // Separate chairperson and vice chairperson for featured display
  const chairperson = executiveCommittee.find((m) => m.position === "Chairperson")
  const viceChairperson = executiveCommittee.find((m) => m.position === "Vice Chairperson")
  const otherMembers = executiveCommittee.filter(
    (m) => m.position !== "Chairperson" && m.position !== "Vice Chairperson",
  )

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 sm:py-24">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Executive Committee</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the dedicated leaders guiding the UICT Alumni Association towards excellence and fostering
                meaningful connections among our vibrant alumni community.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Section - Chairperson & Vice Chairperson */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Leadership</h2>
              <p className="mt-2 text-muted-foreground">Our association is led by experienced and passionate alumni</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {chairperson && <ExecutiveCard member={chairperson} featured />}
              {viceChairperson && <ExecutiveCard member={viceChairperson} featured />}
            </div>
          </div>
        </section>

        {/* Committee Members Grid */}
        <section className="py-12 sm:py-16 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Committee Members</h2>
              <p className="mt-2 text-muted-foreground">
                Dedicated individuals serving various roles in our association
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {otherMembers.map((member) => (
                <ExecutiveCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Get in Touch</h2>
            <p className="mt-4 text-muted-foreground">
              Have questions or suggestions for the executive committee? We'd love to hear from you. Reach out to any
              committee member or contact us through our official channels.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resources/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/join"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Join the Network
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
