import { useTranslation } from 'react-i18next'
import SectionHeading from './ui/SectionHeading'

export default function WhyUs() {
  const { t } = useTranslation()
  const benefits = t('whyUs.benefits', { returnObjects: true })

  return (
    <section className="bg-[rgba(237,244,230,0.55)] py-14 md:py-20" id="about">
      <div className="mx-auto w-[min(1120px,92vw)]">
        <SectionHeading title={t('whyUs.title')} subtitle={t('whyUs.subtitle')} />

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              className="rounded-2xl border border-(--stroke) bg-white p-4 shadow-[0_20px_35px_rgba(18,52,36,0.09)]"
              key={benefit.title}
            >
              <span
                className="mb-3 inline-flex h-13 w-13 items-center justify-center rounded-xl bg-(--surface-soft) text-2xl"
                aria-hidden="true"
              >
                {benefit.icon}
              </span>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-(--text)">{benefit.title}</h3>
              <p className="mt-2 text-(--text-muted)">{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
