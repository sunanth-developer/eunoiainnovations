import { Seo } from '../components/Seo'
import { contactDetails } from '../data/site'
import { PageHero } from './pageHero'
import page from './page.module.css'
import styles from './site.module.css'

type LegalPageProps = {
  kind: 'privacy' | 'terms'
}

export function LegalPage({ kind }: LegalPageProps) {
  const privacy = kind === 'privacy'

  return (
    <div className={page.page}>
      <Seo
        title={privacy ? 'Privacy Policy | Eunoia Innovations' : 'Terms | Eunoia Innovations'}
        description={
          privacy
            ? 'How Eunoia Innovations handles enquiry information submitted through this website.'
            : 'Terms of use for the Eunoia Innovations website.'
        }
        path={privacy ? '/privacy' : '/terms'}
      />
      <PageHero
        kicker={privacy ? 'Privacy' : 'Terms'}
        title={privacy ? 'Privacy policy' : 'Terms of use'}
        lede={
          privacy
            ? 'This page describes how enquiry information submitted through the website is used.'
            : 'This website is provided to describe Eunoia’s technology, services and ways of working.'
        }
      />
      <section className={styles.section}>
        <div className={`wrap ${page.copy}`}>
          {privacy ? (
            <>
              <p>
                Contact forms collect only the information you submit so the team can respond
                to a project enquiry. That information is used for that purpose and is not
                sold.
              </p>
              <p>
                If a file is uploaded through a configured contact endpoint, it is handled
                only as supporting material for the enquiry.
              </p>
              <p>
                Questions about personal data can be sent to {contactDetails.email}.
              </p>
            </>
          ) : (
            <>
              <p>
                Content on this website describes Eunoia’s products and services. Performance
                depends on site conditions, configuration and the agreed scope of work.
              </p>
              <p>
                Nothing on this website is an offer, tender response or certified laboratory
                result. Project details should be confirmed in writing.
              </p>
              <p>
                For project discussions, contact {contactDetails.email}.
              </p>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
