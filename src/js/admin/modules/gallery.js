import { getItem, setItem } from '@/js/utils/storage.js'
import { showToast } from '@/js/utils/toast.js'
import { html, escJs } from '@/js/utils/dom.js'

const STORAGE_KEY = 'hag_galeria'

export class GalleryModule {
  constructor() {
    this.photos = this.load()
  }

  load() {
    return getItem(STORAGE_KEY, [])
  }

  save() {
    setItem(STORAGE_KEY, this.photos)
  }

  renderGrid() {
    const grid = document.getElementById('galleryGrid')
    if (!grid) return

    if (this.photos.length === 0) {
      html(grid, '<p style="color:var(--dark-gray);padding:20px;">No hay fotos aún. Sube la primera.</p>')
      return
    }

    html(grid, [...this.photos].reverse().map(p => `
      <div class="content-item">
        <div class="content-icon" style="background:transparent; width:80px; height:60px;">
          <img src="${escJs(p.image)}" alt="${escJs(p.title)}" style="width:80px;height:60px;border-radius:8px;object-fit:cover;">
        </div>
        <div class="content-info">
          <div class="content-title">${escJs(p.title)}</div>
          <div class="content-description">${escJs(p.description || '')}</div>
        </div>
        <div class="content-actions">
          <button class="edit-btn" onclick="window.dashboard.modules.gallery.edit('${escJs(p.id)}')"><i class="fas fa-edit"></i></button>
          <button class="delete-btn" onclick="window.dashboard.modules.gallery.delete('${escJs(p.id)}')"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    `).join(''))
  }

  prepareNew() {
    document.getElementById('galleryId').value = ''
    document.getElementById('galleryTitle').value = ''
    document.getElementById('galleryDescription').value = ''
    document.getElementById('galleryImageFile').value = ''
    document.getElementById('galleryPreview').style.display = 'none'
    document.getElementById('galleryModalTitle').textContent = 'Nueva Foto'
    window.dashboard.openModal('galleryModal')
  }

  handleSave(e) {
    e.preventDefault()
    const id = document.getElementById('galleryId').value
    const title = document.getElementById('galleryTitle').value.trim()
    const description = document.getElementById('galleryDescription').value.trim()
    const fileInput = document.getElementById('galleryImageFile')
    const existingImage = id ? (this.photos.find(p => p.id === id)?.image || '') : ''

    if (!title) {
      showToast('El título es obligatorio', 'error')
      return
    }

    const processSave = (image) => {
      if (id) {
        const idx = this.photos.findIndex(p => p.id === id)
        if (idx !== -1) {
          this.photos[idx] = { ...this.photos[idx], title, description, image }
        }
      } else {
        this.photos.push({
          id: Date.now().toString(),
          title,
          description,
          image,
        })
      }
      this.save()
      this.renderGrid()
      window.dashboard.closeModal('galleryModal')
      showToast(`Foto ${id ? 'actualizada' : 'agregada'}`, 'success')
    }

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader()
      reader.onload = (ev) => {
        const preview = document.getElementById('galleryPreview')
        if (preview) { preview.src = ev.target.result; preview.style.display = 'block' }
        processSave(ev.target.result)
      }
      reader.readAsDataURL(fileInput.files[0])
    } else {
      processSave(existingImage)
    }
  }

  edit(id) {
    const p = this.photos.find(x => x.id === id)
    if (!p) return
    document.getElementById('galleryId').value = p.id
    document.getElementById('galleryTitle').value = p.title
    document.getElementById('galleryDescription').value = p.description || ''
    document.getElementById('galleryImageFile').value = ''
    const preview = document.getElementById('galleryPreview')
    if (preview) { preview.src = p.image; preview.style.display = 'block' }
    document.getElementById('galleryModalTitle').textContent = 'Editar Foto'
    window.dashboard.openModal('galleryModal')
  }

  delete(id) {
    if (!confirm('¿Eliminar esta foto?')) return
    this.photos = this.photos.filter(p => p.id !== id)
    this.save()
    this.renderGrid()
    showToast('Foto eliminada', 'success')
  }

  get count() { return this.photos.length }
}
