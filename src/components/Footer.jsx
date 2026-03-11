import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const links = t('navLinks', { returnObjects: true })
  const socialLinks = t('footer.socialLinks', { returnObjects: true })

  return (
    <footer className="border-t border-(--stroke) bg-[#f0f5ee] py-8 pb-4">
      <div className="mx-auto flex w-[min(1120px,92vw)] flex-wrap items-center justify-center gap-4 text-center md:justify-between md:text-left">
        <a className="font-['Space_Grotesk'] text-xl font-bold tracking-[0.3px]" href="#home">
          IT Academy
        </a>

        <ul className="flex flex-wrap justify-center gap-4 md:justify-start">
          {links.map((link) => (
            <li key={link.label}>
              <a className="font-semibold text-(--text-muted)" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap justify-center gap-4 md:justify-start" aria-label={t('footer.socialAriaLabel')}>
          {socialLinks.map((item) => (
            <li key={item.label}>
              <a className="font-semibold text-(--text-muted)" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-5 text-center text-sm text-(--text-muted)">
        © {new Date().getFullYear()} IT Academy. {t('footer.rights')}
      </p>
    </footer>
  )
}
