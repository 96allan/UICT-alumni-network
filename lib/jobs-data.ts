export interface Job {
  id: string
  title: string
  company: string
  companyLogo: string
  location: string
  type: "Full-time" | "Part-time" | "Contract" | "Internship"
  remote: "Remote" | "On-site" | "Hybrid"
  salary: string
  description: string
  requirements: string[]
  postedBy: string
  postedDate: string
  category: string
}

export const jobsData: Job[] = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "TechCorp International",
    companyLogo: "/tech-company-logo.jpg",
    location: "Kampala, Uganda",
    type: "Full-time",
    remote: "Hybrid",
    salary: "$80,000 - $120,000",
    description:
      "We're looking for a senior software engineer to lead our backend team and build scalable microservices.",
    requirements: ["5+ years experience", "Node.js/Python", "AWS", "System Design"],
    postedBy: "John Mukasa (Class of 2015)",
    postedDate: "2025-01-05",
    category: "Engineering",
  },
  {
    id: "2",
    title: "Product Manager",
    company: "InnovateTech",
    companyLogo: "/innovate-tech-logo.jpg",
    location: "Nairobi, Kenya",
    type: "Full-time",
    remote: "Remote",
    salary: "$70,000 - $95,000",
    description: "Join our product team to drive the roadmap for our B2B SaaS platform serving African businesses.",
    requirements: ["3+ years PM experience", "B2B SaaS", "Agile", "Data-driven"],
    postedBy: "Sarah Achieng (Class of 2018)",
    postedDate: "2025-01-03",
    category: "Product",
  },
  {
    id: "3",
    title: "Data Analyst",
    company: "FinServe Bank",
    companyLogo: "/bank-finance-logo.jpg",
    location: "Kampala, Uganda",
    type: "Full-time",
    remote: "On-site",
    salary: "$45,000 - $65,000",
    description: "Analyze financial data to provide insights for business decisions and risk management.",
    requirements: ["SQL", "Python/R", "Financial modeling", "2+ years experience"],
    postedBy: "Michael Ouma (Class of 2016)",
    postedDate: "2025-01-08",
    category: "Data",
  },
  {
    id: "4",
    title: "UX Designer",
    company: "DesignHub Africa",
    companyLogo: "/design-agency-logo.png",
    location: "Lagos, Nigeria",
    type: "Full-time",
    remote: "Remote",
    salary: "$50,000 - $75,000",
    description: "Create beautiful, user-centered designs for our diverse client portfolio across Africa.",
    requirements: ["Figma", "User Research", "Design Systems", "3+ years experience"],
    postedBy: "Grace Adebayo (Class of 2017)",
    postedDate: "2025-01-02",
    category: "Design",
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "CloudScale Solutions",
    companyLogo: "/cloud-solutions-logo.jpg",
    location: "Remote",
    type: "Contract",
    remote: "Remote",
    salary: "$90,000 - $130,000",
    description: "Build and maintain CI/CD pipelines, manage cloud infrastructure, and improve system reliability.",
    requirements: ["Kubernetes", "AWS/GCP", "Terraform", "4+ years experience"],
    postedBy: "David Ssemakula (Class of 2014)",
    postedDate: "2025-01-06",
    category: "Engineering",
  },
  {
    id: "6",
    title: "Marketing Intern",
    company: "StartupXYZ",
    companyLogo: "/abstract-startup-logo.png",
    location: "Kampala, Uganda",
    type: "Internship",
    remote: "Hybrid",
    salary: "$500 - $800/month",
    description: "Join our marketing team to learn digital marketing, content creation, and growth strategies.",
    requirements: ["Currently enrolled or recent graduate", "Strong communication", "Social media savvy"],
    postedBy: "Alumni Career Office",
    postedDate: "2025-01-09",
    category: "Marketing",
  },
]
