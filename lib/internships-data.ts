export interface Internship {
  id: string
  title: string
  company: string
  companyLogo: string
  location: string
  duration: string
  stipend: string
  description: string
  requirements: string[]
  postedBy: string
  postedDate: string
  deadline: string
  category: string
  isPaid: boolean
}

export const internshipsData: Internship[] = [
  {
    id: "1",
    title: "Software Development Intern",
    company: "TechCorp International",
    companyLogo: "/tech-company-logo.jpg",
    location: "Kampala, Uganda",
    duration: "3 months",
    stipend: "$600/month",
    description: "Join our engineering team to work on real-world projects using modern web technologies.",
    requirements: ["Currently enrolled in CS/IT program", "Basic JavaScript/Python", "Eager to learn"],
    postedBy: "Alumni Career Office",
    postedDate: "2025-01-05",
    deadline: "2025-02-15",
    category: "Engineering",
    isPaid: true,
  },
  {
    id: "2",
    title: "Data Science Intern",
    company: "AnalyticsPro",
    companyLogo: "/analytics-company-logo.png",
    location: "Nairobi, Kenya",
    duration: "6 months",
    stipend: "$800/month",
    description: "Work with our data team to analyze large datasets and build predictive models.",
    requirements: ["Statistics background", "Python/R", "SQL basics", "Final year student preferred"],
    postedBy: "Sarah Achieng (Class of 2018)",
    postedDate: "2025-01-03",
    deadline: "2025-02-01",
    category: "Data Science",
    isPaid: true,
  },
  {
    id: "3",
    title: "Marketing Intern",
    company: "BrandAfrica",
    companyLogo: "/marketing-agency-logo.png",
    location: "Remote",
    duration: "3 months",
    stipend: "$400/month",
    description: "Learn digital marketing, content creation, and social media management.",
    requirements: ["Communication skills", "Social media savvy", "Creative mindset"],
    postedBy: "Grace Adebayo (Class of 2017)",
    postedDate: "2025-01-08",
    deadline: "2025-02-20",
    category: "Marketing",
    isPaid: true,
  },
  {
    id: "4",
    title: "UI/UX Design Intern",
    company: "DesignHub Africa",
    companyLogo: "/design-studio-logo.png",
    location: "Lagos, Nigeria",
    duration: "4 months",
    stipend: "$500/month",
    description: "Create user interfaces and conduct user research for various client projects.",
    requirements: ["Figma proficiency", "Design portfolio", "User-centered thinking"],
    postedBy: "Michael Ouma (Class of 2016)",
    postedDate: "2025-01-02",
    deadline: "2025-01-31",
    category: "Design",
    isPaid: true,
  },
  {
    id: "5",
    title: "Finance Intern",
    company: "FinServe Bank",
    companyLogo: "/abstract-bank-logo.png",
    location: "Kampala, Uganda",
    duration: "3 months",
    stipend: "Unpaid",
    description: "Gain hands-on experience in financial analysis, reporting, and banking operations.",
    requirements: ["Finance/Accounting major", "Excel proficiency", "Attention to detail"],
    postedBy: "Alumni Career Office",
    postedDate: "2025-01-06",
    deadline: "2025-02-10",
    category: "Finance",
    isPaid: false,
  },
  {
    id: "6",
    title: "Cloud Engineering Intern",
    company: "CloudScale Solutions",
    companyLogo: "/cloud-company-logo.png",
    location: "Remote",
    duration: "6 months",
    stipend: "$700/month",
    description: "Learn cloud technologies, DevOps practices, and infrastructure management.",
    requirements: ["Linux basics", "Networking fundamentals", "Willingness to get certified"],
    postedBy: "David Ssemakula (Class of 2014)",
    postedDate: "2025-01-09",
    deadline: "2025-03-01",
    category: "Engineering",
    isPaid: true,
  },
]
