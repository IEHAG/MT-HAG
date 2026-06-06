import { getItem, setItem } from '@/js/utils/storage.js'
import { showToast } from '@/js/utils/toast.js'
import { html, escJs } from '@/js/utils/dom.js'

const STORAGE_KEY = 'hag_noticias'

export class NewsModule {
  constructor() {
    this.news = this.load()
  }

  load() {
    return getItem(STORAGE_KEY, [])
  }

  save() {
    setItem(STORAGE_KEY, this.news)
  }

  renderGrid() {
    const grid = document.getElementById('newsGrid')
    if (!grid) return

    if (this.news.length === 0) {
      html(grid, '<p style="color:var(--dark-gray);padding:20px;">No hay noticias aún. Crea la primera.</p>')
      return
    }

    html(grid, [...this.news].reverse().map(n => `
      <div class="content-item">
        <div class="content-icon" style="background:${n.image ? 'transparent' : 'var(--light-gray)'}">
          ${n.image ? `<img src="${escJs(n.image)}" alt="" style="width:44px;height:44px;border-radius:12px;object-fit:cover;">` : '<i class="fas fa-newspaper"></i>'}
        </div>
        <div class="content-info">
          <div class="content-title">${escJs(n.title)}</div>
          <div class="content-description">${escJs(n.date)} — ${escJs(n.content.substring(0, 80))}${n.content.length > 80 ? '...' : ''}</div>
        </div>
        <div class="content-actions">
          <button class="edit-btn" onclick="window.dashboard.modules.news.edit('${escJs(n.id)}')"><i class="fas fa-edit"></i></button>
          <button class="delete-btn" onclick="window.dashboard.modules.news.delete('${escJs(n.id)}')"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    `).join(''))
  }

  prepareNew() {
    document.getElementById('newsId').value = ''
    document.getElementById('newsTitle').value = ''
    document.getElementById('newsContent').value = ''
    document.getElementById('newsImage').value = ''
    document.getElementById('newsModalTitle').textContent = 'Nueva Noticia'
    window.dashboard.openModal('newsModal')
  }

  handleSave(e) {
    e.preventDefault()
    const id = document.getElementById('newsId').value
    const title = document.getElementById('newsTitle').value.trim()
    const content = document.getElementById('newsContent').value.trim()
    const fileInput = document.getElementById('newsImage')
    const existingImage = id ? (this.news.find(n => n.id === id)?.image || '') : ''

    if (!title || !content) {
      showToast('Completa todos los campos requeridos', 'error')
      return
    }

    const processSave = (image) => {
      if (id) {
        const idx = this.news.findIndex(n => n.id === id)
        if (idx !== -1) {
          this.news[idx] = { ...this.news[idx], title, content, image }
        }
      } else {
        this.news.push({
          id: Date.now().toString(),
          title,
          content,
          image,
          date: new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' }),
        })
      }
      this.save()
      this.renderGrid()
      window.dashboard.closeModal('newsModal')
      showToast(`Noticia ${id ? 'actualizada' : 'creada'}`, 'success')
    }

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader()
      reader.onload = (ev) => processSave(ev.target.result)
      reader.readAsDataURL(fileInput.files[0])
    } else {
      processSave(existingImage)
    }
  }

  edit(id) {
    const n = this.news.find(x => x.id === id)
    if (!n) return
    document.getElementById('newsId').value = n.id
    document.getElementById('newsTitle').value = n.title
    document.getElementById('newsContent').value = n.content
    document.getElementById('newsImage').value = ''
    document.getElementById('newsModalTitle').textContent = 'Editar Noticia'
    window.dashboard.openModal('newsModal')
  }

  delete(id) {
    if (!confirm('¿Eliminar esta noticia?')) return
    this.news = this.news.filter(n => n.id !== id)
    this.save()
    this.renderGrid()
    showToast('Noticia eliminada', 'success')
  }

  get count() { return this.news.length }
}
