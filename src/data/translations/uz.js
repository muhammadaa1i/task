import { courseImages } from './images'

export const uzTranslation = {
  navLinks: [
    { label: 'Bosh sahifa', href: '#home' },
    { label: 'Kurslar', href: '#courses' },
    { label: 'Biz haqimizda', href: '#about' },
    { label: 'Aloqa', href: '#contact' },
  ],
  header: {
    signUp: "Ro'yxatdan o'tish",
    navAriaLabel: 'Asosiy menyu',
    homeAriaLabel: 'IT Academy bosh sahifasi',
    langAriaLabel: 'Til tanlash',
  },
  hero: {
    eyebrow: 'IT Academy',
    title: 'Professional dasturchiga aylaning',
    description:
      "Zamonaviy texnologiyalarni amaliy darslar, mentorlik va real loyihalar orqali o'rganing. Karyerangizni bugunoq boshlang.",
    startLearning: 'Boshlash',
    viewCourses: "Kurslarni ko'rish",
    codeCard: '</> Kelajagingizni quring',
    floatingTop: '1200+ bitiruvchi',
    floatingBottom: '95% amaliyot yordami',
  },
  courses: {
    title: 'Mashhur Kurslar',
    subtitle: "Bozorda talab yuqori bo'lgan yo'nalishlarni tanlang.",
    durationLabel: 'Davomiyligi',
    priceLabel: 'Narxi',
    enroll: 'Yozilish',
    items: [
      {
        title: 'Frontend',
        duration: '4 oy',
        price: '$300',
        description: 'HTML, CSS, JavaScript va React bilan zamonaviy web ilovalar yarating.',
        image: courseImages.frontend,
      },
      {
        title: 'Backend',
        duration: '5 oy',
        price: '$400',
        description: "Node.js, API, database va server arxitekturasini chuqur o'rganing.",
        image: courseImages.backend,
      },
      {
        title: 'Mobile',
        duration: '6 oy',
        price: '$500',
        description: 'React Native bilan Android va iOS uchun tezkor mobil ilovalar tuzing.',
        image: courseImages.mobile,
      },
    ],
  },
  whyUs: {
    title: 'Nima uchun biz?',
    subtitle: "Sizning natijangizga yo'naltirilgan ta'lim tizimi.",
    benefits: [
      {
        icon: '💻',
        title: 'Real loyihalar',
        text: 'Amaliy portfolio uchun real vazifalar ustida ishlaysiz.',
      },
      {
        icon: '🎓',
        title: 'Tajribali mentorlar',
        text: 'Bozor tajribasiga ega ustozlardan shaxsiy feedback olasiz.',
      },
      {
        icon: '📜',
        title: 'Sertifikat',
        text: 'Kurs yakunida karyera uchun foydali sertifikat taqdim etiladi.',
      },
      {
        icon: '💼',
        title: 'Ishga joylashish yordam',
        text: "CV, interview va ish topish bosqichlarida yo'l-yo'riq beriladi.",
      },
    ],
  },
  contact: {
    title: "Ro'yxatdan o'ting",
    description:
      "Mutaxassis bo'lish sari birinchi qadamni qo'ying. Ma'lumotlaringizni qoldiring, menejerimiz siz bilan bog'lanadi.",
    name: 'Ism',
    phone: 'Telefon',
    email: 'Email',
    message: 'Xabar',
    namePlaceholder: 'Ismingiz',
    phonePlaceholder: '+998 90 123 45 67',
    emailPlaceholder: 'you@example.com',
    messagePlaceholder: 'Savolingizni yozing',
    send: 'Yuborish',
  },
  footer: {
    socialLinks: [
      { label: 'Telegram', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'YouTube', href: '#' },
      { label: 'LinkedIn', href: '#' },
    ],
    socialAriaLabel: 'Ijtimoiy tarmoqlar',
    rights: 'Barcha huquqlar himoyalangan.',
  },
}
