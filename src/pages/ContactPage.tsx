import { Contact } from '../home/Contact'
import { usePageTitle } from './pageHero'
import page from './page.module.css'

export function ContactPage() {
  usePageTitle('Contact | Eunoia Innovations')

  return (
    <div className={page.page}>
      <Contact />
    </div>
  )
}
