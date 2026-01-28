import { Alumnus, Event, NewsArticle, Testimonial, Document } from '../types';

export const alumni: Alumnus[] = [
  { id: 1, name: 'Dr. Evelyn Reed', photoUrl: 'https://picsum.photos/seed/evelyn/200', graduationYear: 2005, course: 'Computer Science', profession: 'AI Researcher', country: 'USA' },
  { id: 2, name: 'Marcus Chen', photoUrl: 'https://picsum.photos/seed/marcus/200', graduationYear: 2010, course: 'Electrical Engineering', profession: 'Hardware Architect', country: 'Taiwan' },
  { id: 3, name: 'Aisha Khan', photoUrl: 'https://picsum.photos/seed/aisha/200', graduationYear: 2012, course: 'Information Technology', profession: 'Cybersecurity Analyst', country: 'UAE' },
  { id: 4, name: 'Leo Martinez', photoUrl: 'https://picsum.photos/seed/leo/200', graduationYear: 2018, course: 'Software Engineering', profession: 'Frontend Developer', country: 'Spain' },
  { id: 5, name: 'Sofia Rossi', photoUrl: 'https://picsum.photos/seed/sofia/200', graduationYear: 2008, course: 'Computer Science', profession: 'Project Manager', country: 'Italy' },
  { id: 6, name: 'Kenji Tanaka', photoUrl: 'https://picsum.photos/seed/kenji/200', graduationYear: 2015, course: 'Data Science', profession: 'Data Scientist', country: 'Japan' },
  { id: 7, name: 'Chloe Dubois', photoUrl: 'https://picsum.photos/seed/chloe/200', graduationYear: 2019, course: 'Information Technology', profession: 'Cloud Engineer', country: 'France' },
  { id: 8, name: 'David Miller', photoUrl: 'https://picsum.photos/seed/david/200', graduationYear: 2003, course: 'Electrical Engineering', profession: 'CEO, Tech Startup', country: 'Germany' },
];

export const alumniSpotlight: Alumnus[] = [
  { id: 1, name: 'Dr. Evelyn Reed', photoUrl: 'https://picsum.photos/seed/evelyn/400', graduationYear: 2005, course: 'Computer Science', profession: 'AI Researcher', country: 'USA', quote: "UICT provided the foundation for my entire career in artificial intelligence.", achievements: ["Published 20+ papers", "Lead researcher at a top AI lab"] },
  { id: 8, name: 'David Miller', photoUrl: 'https://picsum.photos/seed/david/400', graduationYear: 2003, course: 'Electrical Engineering', profession: 'CEO, Tech Startup', country: 'Germany', quote: "The network I built at UICT was instrumental in launching my company.", achievements: ["Secured $50M in funding", "Forbes 30 Under 30"] },
  { id: 6, name: 'Kenji Tanaka', photoUrl: 'https://picsum.photos/seed/kenji/400', graduationYear: 2015, course: 'Data Science', profession: 'Data Scientist', country: 'Japan', quote: "The practical skills I learned at UICT are ones I use every single day.", achievements: ["Developed a predictive model for a Fortune 500", "Speaker at international conferences"] },
];

export const events: Event[] = [
  { id: 1, title: 'Annual Alumni Reunion 2024', date: 'Dec 15, 2024', type: 'Reunion', imageUrl: 'https://picsum.photos/seed/reunion/600/400' },
  { id: 2, title: 'Webinar: The Future of AI', date: 'Nov 22, 2024', type: 'Webinar', imageUrl: 'https://picsum.photos/seed/webinar/600/400' },
  { id: 3, title: 'Board of Directors Meeting', date: 'Oct 30, 2024', type: 'Meeting', imageUrl: 'https://picsum.photos/seed/meeting/600/400' },
];

export const news: NewsArticle[] = [
  { id: 1, title: 'Alumni-led startup secures new funding', summary: 'Innovatech, founded by David Miller (\'03), has just closed a $50M Series B funding round.', imageUrl: 'https://picsum.photos/seed/startup/600/400', category: 'Achievements' },
  { id: 2, title: 'New Mentorship Program Launched', summary: 'We are excited to announce a new program connecting recent graduates with experienced alumni in their fields.', imageUrl: 'https://picsum.photos/seed/mentor/600/400', category: 'Projects' },
  { id: 3, title: 'Call for Nominations: Alumni Awards', summary: 'Nominations for the 2024 Distinguished Alumni Awards are now open. Submit your nominations by Nov 1st.', imageUrl: 'https://picsum.photos/seed/awards/600/400', category: 'Notices' },
];

export const testimonials: Testimonial[] = [
  { id: 1, author: 'Aisha Khan', text: 'UICT shaped my career—joining this alumni network helped me connect with great people and find amazing opportunities.', graduationYear: 2012 },
  { id: 2, author: 'Leo Martinez', text: 'The mentorship program is fantastic. I received invaluable guidance that helped me navigate the early stages of my career.', graduationYear: 2018 },
  { id: 3, author: 'Sofia Rossi', text: 'Being part of this community feels like coming home. The events are a great way to reconnect and stay updated.', graduationYear: 2008 },
];

export const documents: Document[] = [
  { id: 1, title: 'Alumni Association Constitution', type: 'Constitution', url: '#' },
  { id: 2, title: 'AGM Minutes - June 2024', type: 'Minutes', url: '#' },
  { id: 3, title: 'Annual Report 2023', type: 'Report', url: '#' },
  { id: 4, title: 'Membership Application Form', type: 'Form', url: '#' },
];

export const alumniLocations: { country: string; count: number }[] = [
    { country: "USA", count: 200 },
    { country: "India", count: 150 },
    { country: "UK", count: 80 },
    { country: "Canada", count: 120 },
    { country: "Australia", count: 70 },
    { country: "Germany", count: 60 },
    { country: "UAE", count: 50 },
    { country: "Singapore", count: 45 },
    { country: "Japan", count: 30 },
    { country: "Brazil", count: 25 },
];
