import { useTranslation } from 'react-i18next'
import Button from './ui/Button'
import SectionHeading from './ui/SectionHeading'

export default function Courses() {
  const { t } = useTranslation()
  const items = t('courses.items', { returnObjects: true })

  return (
    <section className="py-14 md:py-20" id="courses">
      <div className="mx-auto w-[min(1120px,92vw)]">
        <SectionHeading title={t('courses.title')} subtitle={t('courses.subtitle')} />

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((course) => (
            <article
              className="overflow-hidden rounded-3xl border border-(--stroke) bg-white shadow-[0_20px_35px_rgba(18,52,36,0.09)]"
              key={course.title}
            >
              <img
                src={course.image}
                alt={course.title}
                loading="lazy"
                className="h-45 w-full object-cover"
              />
              <div className="grid gap-4 p-4">
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-(--text)">{course.title}</h3>
                <p className="min-h-17 text-(--text-muted)">{course.description}</p>
                <ul className="grid gap-2">
                  <li className="flex items-center justify-between rounded-xl border border-(--stroke) px-3 py-2">
                    <span>{t('courses.durationLabel')}</span>
                    <strong>{course.duration}</strong>
                  </li>
                  <li className="flex items-center justify-between rounded-xl border border-(--stroke) px-3 py-2">
                    <span>{t('courses.priceLabel')}</span>
                    <strong>{course.price}</strong>
                  </li>
                </ul>
                <Button as="a" href="#contact" fullWidth>
                  {t('courses.enroll')}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
