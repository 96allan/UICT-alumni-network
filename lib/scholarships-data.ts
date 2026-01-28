export interface Scholarship {
  id: string
  title: string
  provider: string
  amount: string
  deadline: string
  eligibility: string[]
  description: string
  type: "Full" | "Partial" | "Grant"
  level: "Undergraduate" | "Graduate" | "Both"
}

export const scholarshipsData: Scholarship[] = [
  {
    id: "1",
    title: "UICT Alumni Excellence Scholarship",
    provider: "UICT Alumni Association",
    amount: "$5,000",
    deadline: "2025-03-15",
    eligibility: ["UICT student", "GPA 3.5+", "Financial need"],
    description: "Supporting outstanding UICT students with demonstrated academic excellence and financial need.",
    type: "Full",
    level: "Undergraduate",
  },
  {
    id: "2",
    title: "Women in Tech Scholarship",
    provider: "TechCorp Foundation",
    amount: "$3,000",
    deadline: "2025-02-28",
    eligibility: ["Female student", "STEM major", "2nd year+"],
    description: "Empowering women pursuing careers in technology and engineering fields.",
    type: "Partial",
    level: "Both",
  },
  {
    id: "3",
    title: "Innovation Research Grant",
    provider: "African Tech Initiative",
    amount: "$10,000",
    deadline: "2025-04-01",
    eligibility: ["Research proposal required", "Faculty endorsement", "Graduate student"],
    description: "Funding innovative research projects that address challenges in Africa.",
    type: "Grant",
    level: "Graduate",
  },
  {
    id: "4",
    title: "Community Leadership Award",
    provider: "UICT Alumni Chapter - Kampala",
    amount: "$2,500",
    deadline: "2025-03-01",
    eligibility: ["Community service record", "Leadership roles", "Any year"],
    description: "Recognizing students who demonstrate exceptional leadership and community impact.",
    type: "Partial",
    level: "Undergraduate",
  },
]
