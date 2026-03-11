import { useTranslation } from 'react-i18next'
import Button from './ui/Button'
import SectionHeading from './ui/SectionHeading'

export default function ContactSection() {
  const { t } = useTranslation()

  return (
    <section className="py-14 md:py-20" id="contact">
      <div className="mx-auto grid w-[min(1120px,92vw)] items-start gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl bg-[#12311f] p-5 sm:p-6">
          <SectionHeading
            title={t('contact.title')}
            subtitle={t('contact.description')}
            className="[&>h2]:text-emerald-100 [&>p]:text-emerald-100"
          />
        </div>

        <form
          className="grid gap-2.5 rounded-3xl border border-(--stroke) bg-white p-4 shadow-[0_20px_35px_rgba(18,52,36,0.09)] sm:p-5"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="name" className="font-bold text-(--text)">
            {t('contact.name')}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder={t('contact.namePlaceholder')}
            required
            className="rounded-xl border border-(--stroke) px-3 py-2 text-(--text) outline-none focus:border-(--accent) focus:ring-2 focus:ring-[rgba(14,163,113,0.35)]"
          />

          <label htmlFor="phone" className="font-bold text-(--text)">
            {t('contact.phone')}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder={t('contact.phonePlaceholder')}
            required
            className="rounded-xl border border-(--stroke) px-3 py-2 text-(--text) outline-none focus:border-(--accent) focus:ring-2 focus:ring-[rgba(14,163,113,0.35)]"
          />

          <label htmlFor="email" className="font-bold text-(--text)">
            {t('contact.email')}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder={t('contact.emailPlaceholder')}
            required
            className="rounded-xl border border-(--stroke) px-3 py-2 text-(--text) outline-none focus:border-(--accent) focus:ring-2 focus:ring-[rgba(14,163,113,0.35)]"
          />

          <label htmlFor="message" className="font-bold text-(--text)">
            {t('contact.message')}
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder={t('contact.messagePlaceholder')}
            required
            className="rounded-xl border border-(--stroke) px-3 py-2 text-(--text) outline-none focus:border-(--accent) focus:ring-2 focus:ring-[rgba(14,163,113,0.35)]"
          />

          <Button type="submit" className="mt-1">
            {t('contact.send')}
          </Button>
        </form>
      </div>
    </section>
  )
}
