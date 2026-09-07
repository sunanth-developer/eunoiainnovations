const SESSION_KEY = 'eunoia.admin.session'
const SESSION_MS = 8 * 60 * 60 * 1000
const AUTH_EVENT = 'eunoia:admin-auth'

function credentials() {
  const user = String(import.meta.env.VITE_ADMIN_USER ?? '').trim() || 'admin'
  const password = String(import.meta.env.VITE_ADMIN_PASSWORD ?? '') || 'eunoia-admin'
  return { user, password }
}

function emitAuth() {
  window.dispatchEvent(new Event(AUTH_EVENT))
}

export function isAdminAuthed() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY)
    if (!raw) return false
    const data = JSON.parse(raw) as { exp?: number }
    if (!data.exp || Date.now() > data.exp) {
      sessionStorage.removeItem(SESSION_KEY)
      return false
    }
    return true
  } catch {
    return false
  }
}

export function loginAdmin(user: string, password: string) {
  const expected = credentials()
  if (user.trim() !== expected.user || password !== expected.password) return false
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({ exp: Date.now() + SESSION_MS }))
  emitAuth()
  return true
}

export function logoutAdmin() {
  sessionStorage.removeItem(SESSION_KEY)
  emitAuth()
}

export function subscribeAdminAuth(listener: () => void) {
  window.addEventListener(AUTH_EVENT, listener)
  return () => window.removeEventListener(AUTH_EVENT, listener)
}
