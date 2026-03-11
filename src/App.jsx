import { lazy, Suspense, useEffect } from 'react'
import Header from './components/Header'

const Hero = lazy(() => import('./components/Hero'))
const Courses = lazy(() => import('./components/Courses'))
const WhyUs = lazy(() => import('./components/WhyUs'))
const ContactSection = lazy(() => import('./components/ContactSection'))
const Footer = lazy(() => import('./components/Footer'))

function SectionFallback() {
  return <div className="mx-auto h-40 w-[min(1120px,92vw)] animate-pulse rounded-3xl bg-white/50" aria-hidden="true" />
}

function HeroFallback() {
  return <div className="mx-auto h-80 w-[min(1120px,92vw)] animate-pulse rounded-3xl bg-white/40" aria-hidden="true" />
}

export default function App() {
  useEffect(() => {
    const preloadSections = () => {
      import('./components/Courses')
      import('./components/WhyUs')
      import('./components/ContactSection')
      import('./components/Footer')
    }

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(preloadSections, { timeout: 1200 })
      return () => window.cancelIdleCallback(idleId)
    }

    const timer = window.setTimeout(preloadSections, 900)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="page-shell">
      <Header />
      <main>
        <Suspense fallback={<HeroFallback />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Courses />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <WhyUs />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}
