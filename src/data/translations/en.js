import { courseImages } from './images'

export const enTranslation = {
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'Courses', href: '#courses' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  header: {
    signUp: 'Sign Up',
    navAriaLabel: 'Main navigation',
    homeAriaLabel: 'IT Academy home',
    langAriaLabel: 'Language selector',
  },
  hero: {
    eyebrow: 'IT Academy',
    title: 'Become a Professional Developer',
    description:
      'Learn modern technologies through practical classes, mentorship, and real projects. Start your career today.',
    startLearning: 'Start Learning',
    viewCourses: 'View Courses',
    codeCard: '</> Build your future',
    floatingTop: '1200+ Graduates',
    floatingBottom: '95% Internship Support',
  },
  courses: {
    title: 'Popular Courses',
    subtitle: 'Choose high-demand tracks for the modern tech market.',
    durationLabel: 'Duration',
    priceLabel: 'Price',
    enroll: 'Enroll',
    items: [
      {
        title: 'Frontend',
        duration: '4 months',
        price: '$300',
        description: 'Build modern web apps with HTML, CSS, JavaScript, and React.',
        image: courseImages.frontend,
      },
      {
        title: 'Backend',
        duration: '5 months',
        price: '$400',
        description: 'Master Node.js, APIs, databases, and scalable server architecture.',
        image: courseImages.backend,
      },
      {
        title: 'Mobile',
        duration: '6 months',
        price: '$500',
        description: 'Create fast Android and iOS apps with React Native.',
        image: courseImages.mobile,
      },
    ],
  },
  whyUs: {
    title: 'Why Choose Us?',
    subtitle: 'A learning system focused on measurable outcomes.',
    benefits: [
      {
        icon: '💻',
        title: 'Real Projects',
        text: 'Build practical portfolio pieces from real-world tasks.',
      },
      {
        icon: '🎓',
        title: 'Experienced Mentors',
        text: 'Get personal feedback from mentors with industry background.',
      },
      {
        icon: '📜',
        title: 'Certificate',
        text: 'Receive a certificate valuable for your career growth.',
      },
      {
        icon: '💼',
        title: 'Job Placement Support',
        text: 'Get help with CV, interviews, and job search strategy.',
      },
    ],
  },
  contact: {
    title: 'Register Now',
    description:
      'Take the first step toward becoming a specialist. Leave your details and our manager will contact you.',
    name: 'Name',
    phone: 'Phone',
    email: 'Email',
    message: 'Message',
    namePlaceholder: 'Your name',
    phonePlaceholder: '+998 90 123 45 67',
    emailPlaceholder: 'you@example.com',
    messagePlaceholder: 'Type your message',
    send: 'Send',
  },
  footer: {
    socialLinks: [
      { label: 'Telegram', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'YouTube', href: '#' },
      { label: 'LinkedIn', href: '#' },
    ],
    socialAriaLabel: 'Social media links',
    rights: 'All rights reserved.',
  },
}
