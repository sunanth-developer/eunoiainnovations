import { useEffect, useState } from 'react'
import { AquaSkimmerPage } from './aqua/AquaSkimmerPage'
import { registerGsap } from './animations/gsap'
import { CustomCursor } from './components/CustomCursor'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { NoiseOverlay } from './components/NoiseOverlay'
import { isAdminAuthed, subscribeAdminAuth } from './lib/adminAuth'
import { appPath } from './lib/router'
import { AboutPage } from './pages/AboutPage'
import { AdminDashboard } from './pages/admin/AdminDashboard'
import { AdminLogin } from './pages/admin/AdminLogin'
import { BlogPage, BlogPostPage } from './pages/BlogPage'
import { ContactPage } from './pages/ContactPage'
import { DeploymentsPage } from './pages/DeploymentsPage'
import { Home } from './pages/Home'
import { PlatformsPage } from './pages/PlatformsPage'
import { SurveyPage } from './pages/SurveyPage'
import { TechnologyPage } from './pages/TechnologyPage'
import { WhyPage } from './pages/WhyPage'

registerGsap()

function resolveView(path: string, authed: boolean) {
  if (path.startsWith('/admin')) {
    return authed ? 'admin' : 'admin-login'
  }
  if (path.startsWith('/blog/')) return 'blog-post'
  if (path.startsWith('/blog') || path.startsWith('/notes') || path.startsWith('/insights')) return 'blog'
  if (path.startsWith('/aqua-skimmer')) return 'aqua'
  if (path.startsWith('/platforms')) return 'platforms'
  if (path.startsWith('/technology')) return 'technology'
  if (path.startsWith('/survey')) return 'survey'
  if (path.startsWith('/deployments')) return 'deployments'
  if (path.startsWith('/about')) return 'about'
  if (path.startsWith('/contact')) return 'contact'
  if (path.startsWith('/why')) return 'why'
  return 'home'
}

function blogSlug(path: string) {
  const raw = path.slice('/blog/'.length)
  return decodeURIComponent(raw.split('/')[0] ?? '')
}

export default function App() {
  const [path, setPath] = useState(() => appPath())
  const [compact, setCompact] = useState(false)
  const [authed, setAuthed] = useState(() => isAdminAuthed())
  const view = resolveView(path, authed)
  const admin = view === 'admin' || view === 'admin-login'

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

  useEffect(() => subscribeAdminAuth(() => setAuthed(isAdminAuthed())), [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <CustomCursor />
      <NoiseOverlay />
      <Navbar compact={compact || view !== 'home'} path={path} />
      <main id="main">
        {view === 'home' ? <Home /> : null}
        {view === 'why' ? <WhyPage /> : null}
        {view === 'aqua' ? <AquaSkimmerPage /> : null}
        {view === 'platforms' ? <PlatformsPage /> : null}
        {view === 'technology' ? <TechnologyPage /> : null}
        {view === 'survey' ? <SurveyPage /> : null}
        {view === 'deployments' ? <DeploymentsPage /> : null}
        {view === 'about' ? <AboutPage /> : null}
        {view === 'contact' ? <ContactPage /> : null}
        {view === 'blog' ? <BlogPage /> : null}
        {view === 'blog-post' ? <BlogPostPage slug={blogSlug(path)} /> : null}
        {view === 'admin-login' ? <AdminLogin /> : null}
        {view === 'admin' ? <AdminDashboard /> : null}
      </main>
      {admin ? null : <Footer />}
    </>
  )
}
