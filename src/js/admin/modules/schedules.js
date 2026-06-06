import { getItem, setItem } from '@/js/utils/storage.js'
import { showToast } from '@/js/utils/toast.js'
import { html, val, setVal, $, escJs } from '@/js/utils/dom.js'

const PUBLIC_KEY = 'publicSchedules'

export class SchedulesModule {
  constructor() {
    this.editingId = null
    this.schedules = this.load()
  }

  load() {
    return getItem('adminSchedules', [
      { id: '1', title: 'Horario Programación', description: 'Horario de clases de programación' },
      { id: '2', title: 'Horario Preprensa', description: 'Horario de clases de preprensa' },
    ])
  }

  save() {
    setItem('adminSchedules', this.schedules)
  }

  loadPublic() {
    return getItem(PUBLIC_KEY, [])
  }

  savePublic(list) {
    setItem(PUBLIC_KEY, list)
  }

  renderCalendar() {
    const el = document.getElementById('scheduleCalendar')
    if (!el) return
    html(el, `
      <div class="config-card">
        <h3>Calendario de Horarios</h3>
        <p>Aquí se mostrará el calendario de horarios. Esta funcionalidad se puede expandir según las necesidades.</p>
        <div class="action-buttons">
          <button class="action-btn" onclick="createSchedule()">
            <i class="fas fa-plus"></i> Crear Nuevo Horario
          </button>
        </div>
        <div style="margin-top:12px;color:var(--dark-gray);font-size:0.9rem;">
          Total registros públicos: <strong id="publicSchedulesCount">${this.loadPublic().length}</strong>
        </div>
      </div>
    `)
    this.renderPublicList()
  }

  renderPublicList() {
    const el = document.getElementById('publicSchedulesList')
    if (!el) return
    const list = this.loadPublic()
    if (!list.length) {
      html(el, '<div class="content-item"><div class="content-info">No hay horarios públicos.</div></div>')
      return
    }
    html(el, list.map(item => `
      <div class="content-item">
        <div class="content-icon"><i class="fas fa-calendar"></i></div>
        <div class="content-info">
          <div class="content-title">${item.grade} — ${item.day}</div>
          <div class="content-description">${item.time} · ${item.subject}</div>
        </div>
        <div class="content-actions">
          <button class="btn-primary" onclick="window.dashboard.modules.schedules.editPublic('${escJs(item.id)}')"><i class="fas fa-edit"></i> Editar</button>
          <button class="btn-secondary" onclick="window.dashboard.modules.schedules.deletePublic('${escJs(item.id)}')"><i class="fas fa-trash"></i> Eliminar</button>
        </div>
      </div>
    `).join(''))
  }

  handleAddPublic(e) {
    e.preventDefault()
    const grade = val('#scheduleGrade')
    const day = val('#scheduleDay')
    const time = val('#scheduleTime')
    const subject = val('#scheduleSubject')

    if (!grade || !day || !time || !subject) {
      showToast('Completa todos los campos del horario', 'warning')
      return
    }

    const list = this.loadPublic()
    if (this.editingId) {
      const idx = list.findIndex(x => x.id === this.editingId)
      if (idx !== -1) list[idx] = { ...list[idx], grade, day, time, subject }
      this.editingId = null
    } else {
      list.push({ id: Date.now().toString(), grade, day, time, subject })
    }
    this.savePublic(list)
    this.renderCalendar()
    window.dashboard.closeModal('addScheduleModal')
    showToast('Horario guardado', 'success')
  }

  editPublic(id) {
    const list = this.loadPublic()
    const item = list.find(x => x.id === id)
    if (!item) return
    setVal('#scheduleGrade', item.grade)
    setVal('#scheduleDay', item.day)
    setVal('#scheduleTime', item.time)
    setVal('#scheduleSubject', item.subject)
    this.editingId = id
    window.dashboard.openModal('addScheduleModal')
  }

  deletePublic(id) {
    if (!confirm('¿Eliminar este horario?')) return
    const list = this.loadPublic().filter(x => x.id !== id)
    this.savePublic(list)
    this.renderCalendar()
    showToast('Horario eliminado', 'success')
  }

  get count() { return this.loadPublic().length }
}
