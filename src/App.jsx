import { lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

const Courses = lazy(() => import('./components/Courses'))
const WhyUs = lazy(() => import('./components/WhyUs'))
const ContactSection = lazy(() => import('./components/ContactSection'))
const Footer = lazy(() => import('./components/Footer'))

function SectionFallback() {
  return <div className="mx-auto h-40 w-[min(1120px,92vw)] animate-pulse rounded-3xl bg-white/50" />
}

export default function App() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <Hero />
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
