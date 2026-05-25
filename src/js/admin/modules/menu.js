import { getItem, setItem } from '@/js/utils/storage.js'
import { showToast } from '@/js/utils/toast.js'
import { html, val, setVal, $ } from '@/js/utils/dom.js'

const STORAGE_KEY = 'siteMenuItems'

export class MenuModule {
  constructor() {
    this.items = this.load()
  }

  load() {
    return getItem(STORAGE_KEY, [])
  }

  save() {
    setItem(STORAGE_KEY, this.items)
  }

  renderList() {
    const el = document.getElementById('menuItemsList')
    if (!el) return
    if (!this.items.length) {
      html(el, '<div class="content-item"><div class="content-info">No hay botones aún. Usa "Agregar botón".</div></div>')
      return
    }
    html(el, this.items.map(item => `
      <div class="content-item">
        <div class="content-icon"><i class="fas fa-link"></i></div>
        <div class="content-info">
          <div class="content-title">${item.title}</div>
          <div class="content-description">${item.href} (${item.target || '_self'})</div>
        </div>
        <div class="content-actions">
          <button class="btn-primary" onclick="window.dashboard.modules.menu.edit('${item.id}')"><i class="fas fa-edit"></i> Editar</button>
          <button class="btn-secondary" onclick="window.dashboard.modules.menu.delete('${item.id}')"><i class="fas fa-trash"></i> Eliminar</button>
        </div>
      </div>
    `).join(''))
  }

  handleSave(e) {
    e.preventDefault()
    const id = $('#menuItemId').value
    const title = val('#menuTitle')
    const icon = val('#menuIcon')
    const href = val('#menuHref')
    const target = val('#menuTarget') || '_self'

    if (!title || !href) {
      showToast('Título y enlace son obligatorios', 'warning')
      return
    }

    if (id) {
      this.items = this.items.map(x => x.id === id ? { ...x, title, icon, href, target } : x)
    } else {
      this.items.push({ id: Date.now().toString(), title, icon, href, target })
    }
    this.save()
    window.dashboard.closeModal('menuItemModal')
    this.renderList()
    showToast('Botón guardado', 'success')
  }

  edit(id) {
    const item = this.items.find(x => x.id === id)
    if (!item) return
    $('#menuModalTitle').textContent = 'Editar botón'
    $('#menuItemId').value = item.id
    setVal('#menuTitle', item.title)
    setVal('#menuIcon', item.icon || '')
    setVal('#menuHref', item.href)
    setVal('#menuTarget', item.target || '_self')
    window.dashboard.openModal('menuItemModal')
  }

  delete(id) {
    if (!confirm('¿Eliminar este botón?')) return
    this.items = this.items.filter(x => x.id !== id)
    this.save()
    this.renderList()
    showToast('Botón eliminado', 'success')
  }

  prepareNew() {
    $('#menuModalTitle').textContent = 'Nuevo botón'
    $('#menuItemId').value = ''
    setVal('#menuTitle', '')
    setVal('#menuIcon', '')
    setVal('#menuHref', '')
    setVal('#menuTarget', '_self')
    window.dashboard.openModal('menuItemModal')
  }
}
