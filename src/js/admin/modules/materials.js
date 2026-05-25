import { getItem, setItem } from '@/js/utils/storage.js'
import { showToast } from '@/js/utils/toast.js'
import { html, val, setVal, $ } from '@/js/utils/dom.js'

const STORAGE_KEY = 'adminMaterials'

export class MaterialsModule {
  constructor() {
    this.materials = this.load()
  }

  load() {
    return getItem(STORAGE_KEY, [
      { id: '1', title: 'Introducción a la Programación', description: 'Material básico de programación', type: 'Documento' },
      { id: '2', title: 'Diseño Gráfico', description: 'Fundamentos del diseño', type: 'Presentación' },
    ])
  }

  save() {
    setItem(STORAGE_KEY, this.materials)
  }

  renderList() {
    const el = document.getElementById('materialsList')
    if (!el) return
    html(el, this.materials.map(m => `
      <div class="content-item">
        <div class="content-icon"><i class="fas fa-book"></i></div>
        <div class="content-info">
          <div class="content-title">${m.title}</div>
          <div class="content-description">${m.description}</div>
        </div>
        <div class="content-actions">
          <button class="btn-primary" onclick="window.dashboard.modules.materials.edit('${m.id}')"><i class="fas fa-edit"></i> Editar</button>
          <button class="btn-secondary" onclick="window.dashboard.modules.materials.delete('${m.id}')"><i class="fas fa-trash"></i> Eliminar</button>
        </div>
      </div>
    `).join(''))
  }

  renderGrid() {
    const el = document.getElementById('materialsGrid')
    if (!el) return
    html(el, this.materials.map(m => `
      <div class="student-card">
        <div class="content-icon" style="width:60px;height:60px;margin:0 auto 15px;">
          <i class="fas fa-book"></i>
        </div>
        <div class="student-name">${m.title}</div>
        <div class="student-program">${m.type}</div>
        <div class="student-actions">
          <button class="edit-btn" onclick="window.dashboard.modules.materials.edit('${m.id}')"><i class="fas fa-edit"></i> Editar</button>
          <button class="delete-btn" onclick="window.dashboard.modules.materials.delete('${m.id}')"><i class="fas fa-trash"></i> Eliminar</button>
        </div>
      </div>
    `).join(''))
  }

  prepareNew() {
    $('#materialId').value = ''
    setVal('#materialTitle', '')
    setVal('#materialDescription', '')
    setVal('#materialType', 'Documento')
    $('#materialModalTitle').textContent = 'Nuevo Material'
    window.dashboard.openModal('materialModal')
  }

  edit(id) {
    const m = this.materials.find(x => x.id === id)
    if (!m) return
    $('#materialId').value = m.id
    setVal('#materialTitle', m.title)
    setVal('#materialDescription', m.description || '')
    setVal('#materialType', m.type || 'Documento')
    $('#materialModalTitle').textContent = 'Editar Material'
    window.dashboard.openModal('materialModal')
  }

  handleSave(e) {
    e.preventDefault()
    const id = $('#materialId').value
    const title = val('#materialTitle')
    const description = val('#materialDescription')
    const type = val('#materialType') || 'Documento'
    if (!title) {
      showToast('El título es obligatorio', 'warning')
      return
    }
    if (id) {
      this.materials = this.materials.map(m => m.id === id ? { ...m, title, description, type } : m)
    } else {
      this.materials.push({ id: Date.now().toString(), title, description, type })
    }
    this.save()
    this.renderList()
    this.renderGrid()
    window.dashboard.closeModal('materialModal')
    window.dashboard.updateStats()
    showToast('Material guardado', 'success')
  }

  delete(id) {
    if (!confirm('¿Eliminar este material?')) return
    this.materials = this.materials.filter(m => m.id !== id)
    this.save()
    this.renderList()
    this.renderGrid()
    window.dashboard.updateStats()
    showToast('Material eliminado', 'success')
  }

  get count() { return this.materials.length }
}
