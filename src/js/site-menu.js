import { getItem } from './utils/storage.js'

function renderSiteMenu() {
  try {
    const items = getItem('siteMenuItems', [])
    if (!items.length) return

    const nav = document.getElementById('mainNav')
    if (!nav) return

    const extras = Array.from(nav.children).filter(
      c => c.id && (c.id === 'chatbot-toggle' || c.id === 'chatbot-container')
    )

    nav.innerHTML = ''

    items.forEach(item => {
      const btn = document.createElement('button')
      btn.className = 'nav-button'
      btn.addEventListener('click', () => {
        if (item.target === '_blank') {
          window.open(item.href, '_blank', 'noopener')
        } else {
          window.location.href = item.href
        }
      })

      const iconEl = document.createElement('i')
      iconEl.className = item.icon && item.icon.startsWith('fa') ? `icon ${item.icon}` : 'icon'
      iconEl.textContent = item.icon && !item.icon.startsWith('fa') ? item.icon : '🔗'
      btn.appendChild(iconEl)
      btn.appendChild(document.createTextNode(' ' + item.title))
      nav.appendChild(btn)
    })

    extras.forEach(e => nav.appendChild(e))
  } catch {
    // noop
  }
}

document.addEventListener('DOMContentLoaded', renderSiteMenu)
