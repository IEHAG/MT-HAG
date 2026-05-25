import { showToast } from './utils/toast.js'

// Notificaciones toast para redes sociales en vez de alert()
document.querySelectorAll('.social-icons a').forEach(link => {
  link.addEventListener('click', () => {
    showToast(`Redirigiendo a ${link.textContent.trim()}...`, 'info', 2000)
  })
})

// Submenu de Plan de Estudio
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('planEstudioBtn')
  const submenu = document.getElementById('submenu')
  const nav = document.getElementById('mainNav')

  if (btn && submenu) {
    btn.addEventListener('click', (event) => {
      event.stopPropagation()

      if (submenu.classList.contains('hidden')) {
        const rect = btn.getBoundingClientRect()
        submenu.style.position = 'fixed'
        submenu.style.top = `${rect.bottom + 4}px`
        submenu.style.left = `${rect.left}px`
        submenu.style.minWidth = `${rect.width}px`
        submenu.classList.remove('hidden')
      } else {
        submenu.classList.add('hidden')
      }
    })

    document.addEventListener('click', (event) => {
      if (!submenu.contains(event.target) && event.target !== btn) {
        submenu.classList.add('hidden')
      }
    })
  }
})
