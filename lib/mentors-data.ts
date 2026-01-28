export interface Mentor {
  id: string
  name: string
  avatar: string
  title: string
  company: string
  expertise: string[]
  bio: string
  graduationYear: number
  availability: string
  sessions: number
}

export const mentorsData: Mentor[] = [
  {
    id: "1",
    name: "John Mukasa",
    avatar: "/professional-african-man.png",
    title: "Engineering Manager",
    company: "Google",
    expertise: ["Software Engineering", "System Design", "Leadership"],
    bio: "10+ years in software engineering, passionate about helping the next generation of African tech talent.",
    graduationYear: 2012,
    availability: "2 slots/week",
    sessions: 48,
  },
  {
    id: "2",
    name: "Sarah Achieng",
    avatar: "/professional-african-woman.png",
    title: "Product Director",
    company: "Microsoft",
    expertise: ["Product Management", "Strategy", "Career Transition"],
    bio: "Built products used by millions. Love mentoring aspiring PMs and helping engineers transition to product.",
    graduationYear: 2014,
    availability: "3 slots/week",
    sessions: 62,
  },
  {
    id: "3",
    name: "Michael Ouma",
    avatar: "/professional-african-man-smiling.jpg",
    title: "Data Science Lead",
    company: "Meta",
    expertise: ["Data Science", "Machine Learning", "Analytics"],
    bio: "Leading data science teams for 8 years. Excited to share insights on breaking into the field.",
    graduationYear: 2013,
    availability: "1 slot/week",
    sessions: 35,
  },
  {
    id: "4",
    name: "Grace Adebayo",
    avatar: "/professional-african-woman-executive.png",
    title: "VP of Design",
    company: "Figma",
    expertise: ["UX Design", "Design Leadership", "Portfolio Review"],
    bio: "Design leader with experience at startups and big tech. Happy to review portfolios and provide career advice.",
    graduationYear: 2011,
    availability: "2 slots/week",
    sessions: 55,
  },
]
