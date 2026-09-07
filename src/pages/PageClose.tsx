import { LinkButton } from '../components/Button'
import { handleAppLink } from '../lib/router'
import styles from './page.module.css'

type PageCloseProps = {
  href?: string
  label?: string
  secondaryHref?: string
  secondaryLabel?: string
}

export function PageClose({
  href = '/contact',
  label = 'Start a conversation',
  secondaryHref,
  secondaryLabel,
}: PageCloseProps) {
  return (
    <div className={`wrap ${styles.close}`}>
      <LinkButton href={href} onClick={(event) => handleAppLink(event, href)}>
        {label}
      </LinkButton>
      {secondaryHref && secondaryLabel ? (
        <LinkButton
          href={secondaryHref}
          variant="ghost"
          onClick={(event) => handleAppLink(event, secondaryHref)}
        >
          {secondaryLabel}
        </LinkButton>
      ) : null}
    </div>
  )
}
