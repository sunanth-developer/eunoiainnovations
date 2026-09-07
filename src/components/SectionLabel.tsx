type SectionLabelProps = {
  children: string
  className?: string
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return <p className={`label ${className}`}>{children}</p>
}
