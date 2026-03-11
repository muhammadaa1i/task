import { useTranslation } from 'react-i18next'
import Button from './ui/Button'
import SectionHeading from './ui/SectionHeading'

export default function ContactSection() {
  const { t } = useTranslation()

  return (
    <section className="py-14 md:py-20" id="contact">
      <div className="mx-auto grid w-[min(560px,92vw)] items-start gap-4">
        <div className="rounded-3xl border border-emerald-900/30 bg-[linear-gradient(135deg,#0d3a28,#0a2e21)] p-6 shadow-[0_18px_40px_rgba(8,33,24,0.28)] sm:p-7">
          <SectionHeading
            title={t('contact.title')}
            subtitle={t('contact.description')}
            className="[&>h2]:max-w-[16ch] [&>h2]:text-emerald-100 [&>p]:max-w-[46ch] [&>p]:text-emerald-100"
          />
        </div>

        <form
          className="grid gap-3 rounded-3xl border border-(--stroke) bg-white p-5 shadow-[0_20px_35px_rgba(18,52,36,0.09)] sm:p-7"
          onSubmit={(event) => event.preventDefault()}
          noValidate
        >
          <label htmlFor="name" className="text-base font-bold text-(--text)">
            {t('contact.name')}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder={t('contact.namePlaceholder')}
            required
            className="rounded-xl border border-(--stroke) px-4 py-3 text-(--text) outline-none placeholder:text-slate-400 focus:border-(--accent) focus:ring-2 focus:ring-[rgba(14,163,113,0.35)]"
          />

          <label htmlFor="phone" className="text-base font-bold text-(--text)">
            {t('contact.phone')}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder={t('contact.phonePlaceholder')}
            required
            className="rounded-xl border border-(--stroke) px-4 py-3 text-(--text) outline-none placeholder:text-slate-400 focus:border-(--accent) focus:ring-2 focus:ring-[rgba(14,163,113,0.35)]"
          />

          <label htmlFor="email" className="text-base font-bold text-(--text)">
            {t('contact.email')}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder={t('contact.emailPlaceholder')}
            required
            className="rounded-xl border border-(--stroke) px-4 py-3 text-(--text) outline-none placeholder:text-slate-400 focus:border-(--accent) focus:ring-2 focus:ring-[rgba(14,163,113,0.35)]"
          />

          <label htmlFor="message" className="text-base font-bold text-(--text)">
            {t('contact.message')}
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder={t('contact.messagePlaceholder')}
            required
            className="rounded-xl border border-(--stroke) px-4 py-3 text-(--text) outline-none placeholder:text-slate-400 focus:border-(--accent) focus:ring-2 focus:ring-[rgba(14,163,113,0.35)]"
          />

          <Button type="submit" className="mt-2 w-full justify-center">
            {t('contact.send')}
          </Button>
        </form>
      </div>
    </section>
  )
}
