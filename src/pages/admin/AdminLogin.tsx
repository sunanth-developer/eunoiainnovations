import { useEffect, useState, type FormEvent } from 'react'
import { Button } from '../../components/Button'
import { SectionLabel } from '../../components/SectionLabel'
import { isAdminAuthed, loginAdmin } from '../../lib/adminAuth'
import { navigate } from '../../lib/router'
import { usePageTitle } from '../pageHero'
import styles from './AdminLogin.module.css'

export function AdminLogin() {
  usePageTitle('Admin login | Eunoia Innovations')
  const [error, setError] = useState('')

  useEffect(() => {
    if (isAdminAuthed()) navigate('/admin')
    const meta = document.createElement('meta')
    meta.setAttribute('name', 'robots')
    meta.setAttribute('content', 'noindex, nofollow')
    document.head.appendChild(meta)
    return () => meta.remove()
  }, [])

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const user = String(data.get('user') ?? '')
    const password = String(data.get('password') ?? '')
    if (!loginAdmin(user, password)) {
      setError('Those credentials are not recognised.')
      return
    }
    navigate('/admin')
  }

  return (
    <div className={styles.page}>
      <form className={styles.card} onSubmit={onSubmit}>
        <SectionLabel>Admin</SectionLabel>
        <h1 className={`display ${styles.title}`}>Sign in to write.</h1>
        <p className={styles.copy}>Private dashboard for publishing blog posts.</p>
        <p className={styles.demo}>
          Demo login: <strong>admin</strong> / <strong>eunoia-admin</strong>
        </p>
        <label>
          Username
          <input name="user" autoComplete="username" required autoFocus />
        </label>
        <label>
          Password
          <input name="password" type="password" autoComplete="current-password" required />
        </label>
        {error ? <p className={styles.error}>{error}</p> : null}
        <Button type="submit">Enter dashboard</Button>
      </form>
    </div>
  )
}
