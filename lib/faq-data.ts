export interface FAQItem {
  question: string
  answer: string
  category: string
}

export const faqData: FAQItem[] = [
  {
    question: "How do I join the UICT Alumni Network?",
    answer:
      "Click the 'Join Network' button on the homepage and fill out the registration form with your UICT details. Your membership will be verified within 24-48 hours.",
    category: "Membership",
  },
  {
    question: "Is membership free?",
    answer:
      "Yes, basic membership is completely free for all UICT graduates. Premium membership with additional benefits is available for a small annual fee.",
    category: "Membership",
  },
  {
    question: "How can I post a job opportunity?",
    answer:
      "Once registered and logged in, go to the Jobs page and click 'Post a Job'. Fill in the job details and it will be reviewed and published within 24 hours.",
    category: "Jobs",
  },
  {
    question: "How do I find a mentor?",
    answer:
      "Visit the Mentorship page under Resources. You can browse available mentors, filter by expertise, and request a session directly through the platform.",
    category: "Mentorship",
  },
  {
    question: "How can I become a mentor?",
    answer:
      "Click 'Become a Mentor' on the Mentorship page. You'll need at least 3 years of professional experience and complete a brief onboarding process.",
    category: "Mentorship",
  },
  {
    question: "How do I update my profile information?",
    answer:
      "Log in to your account, go to Settings, and click 'Edit Profile'. You can update your photo, bio, job details, and contact information.",
    category: "Account",
  },
  {
    question: "How can I attend alumni events?",
    answer:
      "Browse the Events page to see upcoming events. Click 'Register' on any event you're interested in. Some events are free while others may have a fee.",
    category: "Events",
  },
  {
    question: "Can I suggest a new feature or report a bug?",
    answer:
      "Yes! Use the Contact page to submit feedback. We actively review all suggestions and work to improve the platform based on alumni input.",
    category: "General",
  },
]
