import { showToast } from './utils/toast.js'
import { getItem } from './utils/storage.js'

document.querySelectorAll('.social-icons a').forEach(link => {
  link.addEventListener('click', () => {
    showToast(`Redirigiendo a ${link.textContent.trim()}...`, 'info', 2000)
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('mainNav')
  const submenu = document.getElementById('submenu')

  if (nav && submenu) {
    nav.addEventListener('click', (event) => {
      const btn = event.target.closest('#planEstudioBtn')
      if (!btn) return
      event.stopPropagation()
      event.preventDefault()
      const isOpen = !submenu.classList.contains('hidden')
      document.querySelectorAll('.submenu:not(.hidden)').forEach(s => s.classList.add('hidden'))
      if (isOpen) return
      const rect = btn.getBoundingClientRect()
      submenu.style.position = 'fixed'
      submenu.style.top = `${rect.bottom + 6}px`
      submenu.style.left = `${Math.max(8, rect.left)}px`
      submenu.style.minWidth = `${Math.max(rect.width, 260)}px`
      submenu.classList.remove('hidden')
    })

    document.addEventListener('click', (event) => {
      if (!submenu.contains(event.target) && !event.target.closest('#planEstudioBtn')) {
        submenu.classList.add('hidden')
      }
    })
  }

  renderHomeNews()
})

function renderHomeNews() {
  const grid = document.getElementById('homeNewsGrid')
  if (!grid) return
  const news = getItem('hag_noticias', [])
  if (news.length === 0) {
    grid.innerHTML = '<p class="news-empty">No hay noticias publicadas aún.</p>'
    return
  }
  const latest = [...news].reverse().slice(0, 6)
  grid.innerHTML = latest.map(n => `
    <div class="news-card">
      ${n.image ? `<img src="${n.image}" alt="${n.title}" class="news-card-img" loading="lazy">` : '<div class="news-card-img news-card-img-placeholder"><i class="fas fa-newspaper"></i></div>'}
      <div class="news-card-body">
        <span class="news-card-date">${n.date || ''}</span>
        <h3 class="news-card-title">${n.title}</h3>
        <p class="news-card-text">${n.content.substring(0, 120)}${n.content.length > 120 ? '...' : ''}</p>
      </div>
    </div>
  `).join('')
}
