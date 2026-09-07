import { useEffect, useState } from 'react'
import { AquaSkimmerPage } from './aqua/AquaSkimmerPage'
import { registerGsap } from './animations/gsap'
import { CustomCursor } from './components/CustomCursor'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { NoiseOverlay } from './components/NoiseOverlay'
import { useActiveSection } from './hooks/useActiveSection'
import { appPath } from './lib/router'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { DeploymentsPage } from './pages/DeploymentsPage'
import { Home } from './pages/Home'
import { Insights } from './pages/Insights'
import { PlatformsPage } from './pages/PlatformsPage'
import { SurveyPage } from './pages/SurveyPage'
import { TechnologyPage } from './pages/TechnologyPage'

registerGsap()

function resolveView(path: string) {
  if (path.startsWith('/aqua-skimmer')) return 'aqua'
  if (path.startsWith('/platforms')) return 'platforms'
  if (path.startsWith('/technology')) return 'technology'
  if (path.startsWith('/survey')) return 'survey'
  if (path.startsWith('/deployments')) return 'deployments'
  if (path.startsWith('/about')) return 'about'
  if (path.startsWith('/contact')) return 'contact'
  if (path.startsWith('/notes') || path.startsWith('/insights')) return 'notes'
  return 'home'
}

export default function App() {
  const [path, setPath] = useState(() => appPath())
  const [compact, setCompact] = useState(false)
  const view = resolveView(path)
  const section = useActiveSection(view === 'home')

  useEffect(() => {
    const onPop = () => setPath(appPath())
    const onScroll = () => setCompact(window.scrollY > 24)
    window.addEventListener('popstate', onPop)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('popstate', onPop)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <CustomCursor />
      <NoiseOverlay />
      <Navbar compact={compact || view !== 'home'} path={path} section={section} />
      <main id="main">
        {view === 'home' ? <Home /> : null}
        {view === 'aqua' ? <AquaSkimmerPage /> : null}
        {view === 'platforms' ? <PlatformsPage /> : null}
        {view === 'technology' ? <TechnologyPage /> : null}
        {view === 'survey' ? <SurveyPage /> : null}
        {view === 'deployments' ? <DeploymentsPage /> : null}
        {view === 'about' ? <AboutPage /> : null}
        {view === 'contact' ? <ContactPage /> : null}
        {view === 'notes' ? <Insights /> : null}
      </main>
      <Footer />
    </>
  )
}
