import { useTranslation } from 'react-i18next'
import { languageOptions } from '../data/i18n'
import Button from './ui/Button'

export default function Header() {
  const { t, i18n } = useTranslation()
  const links = t('navLinks', { returnObjects: true })
  const activeLanguage = i18n.resolvedLanguage?.slice(0, 2) ?? 'uz'

  return (
    <header
      className="sticky top-0 z-50 border-b border-[rgba(213,226,213,0.7)] bg-[rgba(246,249,244,0.85)] backdrop-blur"
      id="home"
    >
      <div className="mx-auto flex min-h-19.5 w-[min(1120px,92vw)] flex-wrap items-center justify-between gap-3 py-2 max-[370px]:flex-col max-[370px]:items-stretch md:flex-nowrap md:py-0">
        <a
          className="font-['Space_Grotesk'] text-xl font-bold tracking-[0.3px]"
          href="#home"
          aria-label={t('header.homeAriaLabel')}
        >
          IT Academy
        </a>

        <nav aria-label={t('header.navAriaLabel')}>
          <ul className="hidden items-center gap-4 md:flex">
            {links.map((link) => (
              <li key={link.label}>
                <a className="font-semibold text-(--text-muted) transition hover:text-(--text)" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3 max-[370px]:ml-0 max-[370px]:justify-between">
          <div
            className="inline-flex items-center rounded-full border border-(--stroke) bg-white p-1 max-[370px]:w-full max-[370px]:justify-center"
            role="group"
            aria-label={t('header.langAriaLabel')}
          >
            {languageOptions.map((item) => (
              <button
                key={item.code}
                type="button"
                className={`cursor-pointer rounded-full px-2.5 py-1.5 text-xs font-bold transition ${item.code === activeLanguage ? 'bg-(--accent) text-white' : 'text-(--text-muted)'}`}
                onClick={() => i18n.changeLanguage(item.code)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <Button as="a" href="#contact" className="hidden md:inline-flex">
            {t('header.signUp')}
          </Button>
        </div>
      </div>

      <div className="mx-auto w-[min(1120px,92vw)] pb-3 md:hidden">
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          {links.map((link) => (
            <li key={link.label}>
              <a className="text-sm font-semibold text-(--text-muted)" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button as="a" href="#contact" className="mt-3 w-full justify-center">
          {t('header.signUp')}
        </Button>
      </div>
    </header>
  )
}
