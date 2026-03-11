import { useTranslation } from 'react-i18next'
import Button from './ui/Button'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="py-10 md:py-16">
      <div className="mx-auto grid w-[min(1120px,92vw)] items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-4 text-sm font-extrabold tracking-[0.08em] text-(--accent-dark) uppercase">
            {t('hero.eyebrow')}
          </p>
          <h1 className="max-w-full text-4xl leading-none font-bold text-(--text) text-balance wrap-anywhere max-[370px]:text-3xl sm:max-w-[12ch] sm:text-5xl md:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-(--text-muted) wrap-anywhere sm:text-lg">
            {t('hero.description')}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button as="a" href="#contact" className="w-full sm:w-auto">
              {t('hero.startLearning')}
            </Button>
            <Button as="a" href="#courses" variant="secondary" className="w-full sm:w-auto">
              {t('hero.viewCourses')}
            </Button>
          </div>
        </div>

        <div
          className="relative min-h-56 overflow-hidden rounded-3xl bg-[linear-gradient(145deg,#163d2e,#1f5d45)] p-4 shadow-[0_20px_35px_rgba(18,52,36,0.09)] sm:min-h-70 sm:p-6 md:min-h-87.5"
          aria-hidden="true"
        >
          <div className="w-[min(360px,74%)] rounded-2xl border border-white/20 bg-white/10 p-5 max-[370px]:w-full">
            <p className="font-semibold text-emerald-100">{t('hero.codeCard')}</p>
            <div className="mt-4 grid gap-2.5">
              <span className="block h-2 rounded-full bg-white/35" />
              <span className="block h-2 w-[84%] rounded-full bg-white/35" />
              <span className="block h-2 w-[62%] rounded-full bg-white/35" />
            </div>
          </div>
          <div className="floating-card floating-top">{t('hero.floatingTop')}</div>
          <div className="floating-card floating-bottom">{t('hero.floatingBottom')}</div>
        </div>
      </div>
    </section>
  )
}
