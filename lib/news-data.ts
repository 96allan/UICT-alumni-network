export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  authorImage: string
  publishedDate: string
  category: string
  image: string
  readTime: string
}

export const newsData: NewsArticle[] = [
  {
    id: "1",
    title: "UICT Alumni Raises $5M for EdTech Startup",
    excerpt:
      "Class of 2016 graduate secures major funding to revolutionize education across East Africa with AI-powered learning platform.",
    content: "",
    author: "Alumni News Team",
    authorImage: "/news-editor.jpg",
    publishedDate: "2025-01-10",
    category: "Success Stories",
    image: "/startup-funding-announcement.jpg",
    readTime: "4 min read",
  },
  {
    id: "2",
    title: "Annual Reunion 2025: Registration Now Open",
    excerpt:
      "Mark your calendars! The biggest alumni gathering of the year is set for February 15th. Early bird tickets available.",
    content: "",
    author: "Events Committee",
    authorImage: "/event-organizer.png",
    publishedDate: "2025-01-08",
    category: "Events",
    image: "/alumni-reunion-campus.jpg",
    readTime: "3 min read",
  },
  {
    id: "3",
    title: "New Mentorship Program Launches",
    excerpt:
      "Connect with experienced alumni mentors to accelerate your career growth. Applications open for the Spring 2025 cohort.",
    content: "",
    author: "Career Services",
    authorImage: "/career-counselor.png",
    publishedDate: "2025-01-05",
    category: "Programs",
    image: "/mentorship-meeting.png",
    readTime: "5 min read",
  },
  {
    id: "4",
    title: "Alumni Spotlight: From UICT to Google",
    excerpt:
      "Interview with Jane Nakato, Class of 2018, on her journey from campus to becoming a Senior Engineer at Google.",
    content: "",
    author: "Alumni Relations",
    authorImage: "/interviewer.png",
    publishedDate: "2025-01-03",
    category: "Spotlight",
    image: "/professional-woman-tech.jpg",
    readTime: "7 min read",
  },
  {
    id: "5",
    title: "Scholarship Fund Reaches $1 Million Milestone",
    excerpt: "Thanks to generous alumni donations, the UICT Scholarship Fund has reached a historic milestone.",
    content: "",
    author: "Development Office",
    authorImage: "/development-officer.jpg",
    publishedDate: "2025-01-01",
    category: "Giving",
    image: "/scholarship-graduation.png",
    readTime: "4 min read",
  },
  {
    id: "6",
    title: "Tech Industry Trends: What Alumni Need to Know",
    excerpt: "Our industry experts share insights on emerging technologies and skills that will be in demand in 2025.",
    content: "",
    author: "Tech Advisory Board",
    authorImage: "/tech-advisor.png",
    publishedDate: "2024-12-28",
    category: "Industry",
    image: "/technology-trends.png",
    readTime: "6 min read",
  },
]
