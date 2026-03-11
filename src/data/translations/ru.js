import { courseImages } from './images'

export const ruTranslation = {
  navLinks: [
    { label: 'Главная', href: '#home' },
    { label: 'Курсы', href: '#courses' },
    { label: 'О нас', href: '#about' },
    { label: 'Контакты', href: '#contact' },
  ],
  header: {
    signUp: 'Записаться',
    navAriaLabel: 'Основная навигация',
    homeAriaLabel: 'Главная страница IT Academy',
    langAriaLabel: 'Выбор языка',
  },
  hero: {
    eyebrow: 'IT Academy',
    title: 'Станьте профессиональным разработчиком',
    description:
      'Изучайте современные технологии через практические занятия, менторство и реальные проекты. Начните карьеру уже сегодня.',
    startLearning: 'Начать обучение',
    viewCourses: 'Смотреть курсы',
    codeCard: '</> Создайте свое будущее',
    floatingTop: '1200+ выпускников',
    floatingBottom: '95% помощь со стажировкой',
  },
  courses: {
    title: 'Популярные курсы',
    subtitle: 'Выберите направления с высоким спросом на рынке.',
    durationLabel: 'Длительность',
    priceLabel: 'Цена',
    enroll: 'Записаться',
    items: [
      {
        title: 'Frontend',
        duration: '4 месяца',
        price: '$300',
        description: 'Создавайте современные веб-приложения с HTML, CSS, JavaScript и React.',
        image: courseImages.frontend,
      },
      {
        title: 'Backend',
        duration: '5 месяцев',
        price: '$400',
        description: 'Освойте Node.js, API, базы данных и архитектуру серверных приложений.',
        image: courseImages.backend,
      },
      {
        title: 'Mobile',
        duration: '6 месяцев',
        price: '$500',
        description: 'Разрабатывайте быстрые Android и iOS приложения на React Native.',
        image: courseImages.mobile,
      },
    ],
  },
  whyUs: {
    title: 'Почему мы?',
    subtitle: 'Система обучения, ориентированная на результат.',
    benefits: [
      {
        icon: '💻',
        title: 'Реальные проекты',
        text: 'Работайте над практическими задачами для сильного портфолио.',
      },
      {
        icon: '🎓',
        title: 'Опытные менторы',
        text: 'Получайте персональную обратную связь от экспертов индустрии.',
      },
      {
        icon: '📜',
        title: 'Сертификат',
        text: 'После курса вы получите сертификат для карьерного роста.',
      },
      {
        icon: '💼',
        title: 'Помощь с трудоустройством',
        text: 'Поддержка по CV, интервью и стратегии поиска работы.',
      },
    ],
  },
  contact: {
    title: 'Запишитесь на курс',
    description:
      'Сделайте первый шаг к профессии. Оставьте свои данные, и наш менеджер свяжется с вами.',
    name: 'Имя',
    phone: 'Телефон',
    email: 'Email',
    message: 'Сообщение',
    namePlaceholder: 'Ваше имя',
    phonePlaceholder: '+998 90 123 45 67',
    emailPlaceholder: 'you@example.com',
    messagePlaceholder: 'Введите ваше сообщение',
    send: 'Отправить',
  },
  footer: {
    socialLinks: [
      { label: 'Telegram', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'YouTube', href: '#' },
      { label: 'LinkedIn', href: '#' },
    ],
    socialAriaLabel: 'Ссылки на соцсети',
    rights: 'Все права защищены.',
  },
}
