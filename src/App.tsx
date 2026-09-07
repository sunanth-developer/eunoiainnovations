import { useEffect, useState } from 'react'
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
import { AquaPage } from './pages/AquaPage'
import { BlogPage, BlogPostPage } from './pages/BlogPage'
import { ContactPage } from './pages/ContactPage'
import { EngagementPage } from './pages/EngagementPage'
import { Home } from './pages/Home'
import { IntegratedPage } from './pages/IntegratedPage'
import { LegalPage } from './pages/LegalPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ServicesPage } from './pages/ServicesPage'
import { SolutionsPage } from './pages/SolutionsPage'
import { SurveyPage } from './pages/SurveyPage'
import { WaterQualityPage } from './pages/WaterQualityPage'

registerGsap()

function cleanPath(path: string) {
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1)
  return path || '/'
}

function resolveView(path: string, authed: boolean) {
  const current = cleanPath(path)
  if (current.startsWith('/admin')) return authed ? 'admin' : 'admin-login'
  if (current.startsWith('/insights/') || current.startsWith('/blog/')) return 'insight-post'
  if (current.startsWith('/projects/')) return 'project'
  if (current === '/about' || current === '/why') return 'about'
  if (current === '/solutions' || current === '/technology' || current === '/platforms') return 'solutions'
  if (current === '/solutions/aqua-skimmer' || current === '/aqua-skimmer') return 'aqua'
  if (current === '/solutions/water-quality-monitoring') return 'water-quality'
  if (current === '/solutions/usv-bathymetric-survey' || current === '/survey') return 'survey'
  if (current === '/solutions/integrated-waterbody-solutions') return 'integrated'
  if (current === '/services') return 'services'
  if (current === '/projects' || current === '/deployments') return 'projects'
  if (current === '/engagement-models') return 'engagement'
  if (current === '/insights' || current === '/blog' || current === '/notes') return 'insights'
  if (current === '/contact') return 'contact'
  if (current === '/privacy') return 'privacy'
  if (current === '/terms') return 'terms'
  if (current === '/') return 'home'
  return 'notfound'
}

function insightSlug(path: string) {
  const value = cleanPath(path)
  const prefix = value.startsWith('/insights/') ? '/insights/' : '/blog/'
  return decodeURIComponent(value.slice(prefix.length).split('/')[0] ?? '')
}

function projectSlug(path: string) {
  return decodeURIComponent(cleanPath(path).slice('/projects/'.length).split('/')[0] ?? '')
}

export default function App() {
  const [path, setPath] = useState(() => appPath())
  const [compact, setCompact] = useState(false)
  const [authed, setAuthed] = useState(() => isAdminAuthed())
  const view = resolveView(path, authed)
  const admin = view === 'admin' || view === 'admin-login'

  useEffect(() => {
    const onPop = () => setPath(appPath())
    const onScroll = () => setCompact(window.scrollY > 16)
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
        {view === 'about' ? <AboutPage /> : null}
        {view === 'solutions' ? <SolutionsPage /> : null}
        {view === 'aqua' ? <AquaPage /> : null}
        {view === 'water-quality' ? <WaterQualityPage /> : null}
        {view === 'survey' ? <SurveyPage /> : null}
        {view === 'integrated' ? <IntegratedPage /> : null}
        {view === 'services' ? <ServicesPage /> : null}
        {view === 'projects' ? <ProjectsPage /> : null}
        {view === 'project' ? <ProjectDetailPage slug={projectSlug(path)} /> : null}
        {view === 'engagement' ? <EngagementPage /> : null}
        {view === 'insights' ? <BlogPage /> : null}
        {view === 'insight-post' ? <BlogPostPage slug={insightSlug(path)} /> : null}
        {view === 'contact' ? <ContactPage /> : null}
        {view === 'privacy' ? <LegalPage kind="privacy" /> : null}
        {view === 'terms' ? <LegalPage kind="terms" /> : null}
        {view === 'notfound' ? <NotFoundPage /> : null}
        {view === 'admin-login' ? <AdminLogin /> : null}
        {view === 'admin' ? <AdminDashboard /> : null}
      </main>
      {admin ? null : <Footer />}
    </>
  )
}
