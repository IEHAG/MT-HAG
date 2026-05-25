import { setItem, getItem, removeItem } from '@/js/utils/storage.js'

const SESSION_KEY = 'adminSession'
const SESSION_TTL = 24 * 60 * 60 * 1000 // 24h

export class AdminAuth {
  constructor() {
    this.credentials = {
      username: import.meta.env.VITE_ADMIN_USER || 'adminhag@gmail.com',
      password: import.meta.env.VITE_ADMIN_PASS || 'CAÑOLA2027*',
    }
  }

  init() {
    const path = window.location.pathname
    const isLoginPage = /\/admin\/login\.html$/i.test(path) || path.endsWith('/admin/') || path.endsWith('/admin')

    if (this.isAuthenticated() && isLoginPage) {
      this.redirectToDashboard()
      return
    }

    const loginForm = document.getElementById('loginForm')
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => this.handleLogin(e))
    }
  }

  handleLogin(e) {
    e.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const errorEl = document.getElementById('errorMessage')

    errorEl.style.display = 'none'

    if (username === this.credentials.username && password === this.credentials.password) {
      this.saveSession(username)
      this.redirectToDashboard()
    } else {
      errorEl.textContent = 'Credenciales incorrectas. Inténtalo de nuevo.'
      errorEl.style.display = 'block'
    }
  }

  saveSession(username) {
    setItem(SESSION_KEY, {
      username,
      loginTime: new Date().toISOString(),
      isAuthenticated: true,
    })
  }

  isAuthenticated() {
    const session = getItem(SESSION_KEY)
    if (!session) return false
    const loginTime = new Date(session.loginTime).getTime()
    const elapsed = Date.now() - loginTime
    return session.isAuthenticated && elapsed < SESSION_TTL
  }

  logout() {
    removeItem(SESSION_KEY)
    window.location.href = 'login.html'
  }

  getCurrentUser() {
    return getItem(SESSION_KEY)
  }

  redirectToDashboard() {
    window.location.href = 'dashboard.html'
  }
}
