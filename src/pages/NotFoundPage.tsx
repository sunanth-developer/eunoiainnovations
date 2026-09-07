import { LinkButton } from '../components/Button'
import { Seo } from '../components/Seo'
import { PageHero } from './pageHero'
import page from './page.module.css'

export function NotFoundPage() {
  return (
    <div className={page.page}>
      <Seo title="Page not found | Eunoia Innovations" description="The requested page does not exist." path="/404" />
      <PageHero
        kicker="404"
        title="This page is not on the chart."
        lede="The address may have changed. Use the navigation or return to the homepage."
      />
      <div className={`wrap ${page.close}`}>
        <LinkButton href="/">Back to homepage</LinkButton>
        <LinkButton href="/contact" variant="ghost">
          Contact
        </LinkButton>
      </div>
    </div>
  )
}
