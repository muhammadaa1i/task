import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './data/i18n'

const App = lazy(() => import('./App.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div className="mx-auto mt-10 h-80 w-[min(1120px,92vw)] animate-pulse rounded-3xl bg-white/40" aria-hidden="true" />}>
      <App />
    </Suspense>
  </StrictMode>,
)
