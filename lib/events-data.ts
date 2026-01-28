export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  type: "virtual" | "in-person" | "hybrid"
  category: string
  attendees: number
  image: string
}

export const eventsData: Event[] = [
  {
    id: "1",
    title: "Annual Alumni Reunion 2025",
    description:
      "Join us for the biggest alumni gathering of the year. Network with fellow graduates, enjoy keynote speeches, and celebrate our community.",
    date: "2025-02-15",
    time: "10:00 AM - 6:00 PM",
    location: "UICT Main Campus, Auditorium Hall",
    type: "in-person",
    category: "Networking",
    attendees: 245,
    image: "/alumni-reunion.png",
  },
  {
    id: "2",
    title: "Tech Career Workshop",
    description:
      "Learn the latest industry trends and get career advice from successful alumni working at top tech companies.",
    date: "2025-01-20",
    time: "2:00 PM - 4:00 PM",
    location: "Zoom",
    type: "virtual",
    category: "Career",
    attendees: 120,
    image: "/tech-workshop-career.jpg",
  },
  {
    id: "3",
    title: "Startup Pitch Night",
    description:
      "Alumni entrepreneurs pitch their startups to investors and fellow alumni. Great networking opportunity for founders.",
    date: "2025-01-25",
    time: "6:00 PM - 9:00 PM",
    location: "Innovation Hub, Downtown",
    type: "hybrid",
    category: "Entrepreneurship",
    attendees: 85,
    image: "/startup-pitch.png",
  },
  {
    id: "4",
    title: "Data Science Meetup",
    description:
      "Monthly meetup for alumni working in data science and machine learning. Share insights and learn from peers.",
    date: "2025-01-30",
    time: "5:30 PM - 7:30 PM",
    location: "Google Meet",
    type: "virtual",
    category: "Technical",
    attendees: 67,
    image: "/data-science-meetup.png",
  },
  {
    id: "5",
    title: "Alumni Golf Tournament",
    description:
      "Annual charity golf tournament. All proceeds go to the UICT scholarship fund for underprivileged students.",
    date: "2025-03-08",
    time: "8:00 AM - 3:00 PM",
    location: "Green Valley Golf Club",
    type: "in-person",
    category: "Social",
    attendees: 48,
    image: "/golf-tournament-charity.jpg",
  },
  {
    id: "6",
    title: "Women in Tech Panel",
    description: "Inspiring panel discussion featuring successful women alumni in technology leadership roles.",
    date: "2025-02-05",
    time: "3:00 PM - 5:00 PM",
    location: "UICT Conference Center",
    type: "hybrid",
    category: "Diversity",
    attendees: 156,
    image: "/women-in-tech-panel.jpg",
  },
]
