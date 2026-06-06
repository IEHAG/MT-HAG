import { getItem, setItem } from '@/js/utils/storage.js'
import { showToast } from '@/js/utils/toast.js'
import { html, escJs } from '@/js/utils/dom.js'

export class DataModule {
  init() {
    document.getElementById('exportCsvBtn')?.addEventListener('click', () => this.exportCSV())
    document.getElementById('importCsvBtn')?.addEventListener('click', () => {
      document.getElementById('importCsvFile').click()
    })
    document.getElementById('importCsvFile')?.addEventListener('change', (e) => this.importCSV(e))
    document.getElementById('exportBackupBtn')?.addEventListener('click', () => this.exportBackup())
    document.getElementById('importBackupBtn')?.addEventListener('click', () => {
      document.getElementById('importBackupFile').click()
    })
    document.getElementById('importBackupFile')?.addEventListener('change', (e) => this.importBackup(e))
  }

  getExportType() {
    return document.getElementById('exportDataType')?.value || 'students'
  }

  exportCSV() {
    const type = this.getExportType()
    let data = []
    let headers = []
    let rows = []

    switch (type) {
      case 'students':
        data = getItem('adminStudents', [])
        headers = ['ID', 'Nombre', 'Programa']
        rows = data.map(s => [s.id, s.name, s.program])
        break
      case 'materials':
        data = getItem('adminMaterials', [])
        headers = ['ID', 'Título', 'Descripción', 'Tipo']
        rows = data.map(m => [m.id, m.title, m.description || '', m.type || ''])
        break
      case 'schedules':
        data = getItem('adminSchedules', [])
        headers = ['ID', 'Grado', 'Día', 'Hora', 'Materia']
        rows = data.map(s => [s.id, s.grade, s.day, s.time, s.subject])
        break
      case 'menu':
        data = getItem('adminMenuItems', [])
        headers = ['ID', 'Título', 'Icono', 'Enlace', 'Destino']
        rows = data.map(m => [m.id, m.title, m.icon, m.href || '', m.target || '_self'])
        break
      default:
        showToast('Tipo de datos no válido', 'error')
        return
    }

    const csvContent = [
      headers.join(','),
      ...rows.map(r => r.map(c => `"${String(c || '').replace(/"/g, '""')}"`).join(',')),
    ].join('\n')

    this.downloadFile(csvContent, `${type}-${Date.now()}.csv`, 'text/csv')
    showToast(`Exportados ${data.length} registros`, 'success')
  }

  importCSV(e) {
    const file = e.target.files?.[0]
    if (!file) return

    const type = this.getExportType()
    const storageKeys = {
      students: 'adminStudents',
      materials: 'adminMaterials',
      schedules: 'adminSchedules',
      menu: 'adminMenuItems',
    }
    const key = storageKeys[type]
    if (!key) { showToast('Tipo no válido', 'error'); return }

    const reader = new FileReader()
    reader.onload = (ev) => {
      try {
        const text = ev.target.result
        const lines = text.split('\n').filter(l => l.trim())
        if (lines.length < 2) { showToast('CSV vacío o inválido', 'error'); return }

        const parseLine = (line) => {
          const result = []
          let current = ''
          let inQuotes = false
          for (const ch of line) {
            if (ch === '"') { inQuotes = !inQuotes; continue }
            if (ch === ',' && !inQuotes) { result.push(current.trim()); current = ''; continue }
            current += ch
          }
          result.push(current.trim())
          return result
        }

        const existing = getItem(key, [])
        const headers = parseLine(lines[0])
        const fieldMap = { ID: 'id', Nombre: 'name', Programa: 'program', Título: 'title', Descripción: 'description', Tipo: 'type', Grado: 'grade', Día: 'day', Hora: 'time', Materia: 'subject', Icono: 'icon', Enlace: 'href', Destino: 'target' }

        for (let i = 1; i < lines.length; i++) {
          const vals = parseLine(lines[i])
          const item = { id: Date.now().toString() + '_' + i }
          headers.forEach((h, idx) => {
            const field = fieldMap[h.trim()] || h.trim().toLowerCase()
            if (vals[idx] !== undefined && vals[idx] !== '') {
              item[field] = vals[idx]
            }
          })
          existing.push(item)
        }

        setItem(key, existing)
        showToast(`Importados ${lines.length - 1} registros`, 'success')
        window.dashboard.loadDashboard()
        if (window.dashboard.modules[type]) {
          const m = window.dashboard.modules[type]
          if (m.renderGrid) m.renderGrid()
          else if (m.renderCalendar) m.renderCalendar()
          else if (m.renderList) m.renderList()
        }
      } catch (err) {
        showToast('Error al importar CSV: ' + err.message, 'error')
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  exportBackup() {
    const keys = ['adminStudents', 'adminMaterials', 'adminSchedules', 'adminMenuItems', 'hag_noticias', 'hag_galeria']
    const backup = {}
    keys.forEach(key => { backup[key] = getItem(key) })
    const json = JSON.stringify(backup, null, 2)
    this.downloadFile(json, `backup-hag-${Date.now()}.json`, 'application/json')
    showToast('Backup exportado', 'success')
  }

  importBackup(e) {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (ev) => {
      try {
        const backup = JSON.parse(ev.target.result)
        let count = 0
        Object.entries(backup).forEach(([key, val]) => {
          if (Array.isArray(val)) {
            setItem(key, val)
            count += val.length
          }
        })
        showToast(`Backup restaurado: ${count} registros`, 'success')
        window.dashboard.loadDashboard()
      } catch (err) {
        showToast('Error al restaurar backup: ' + err.message, 'error')
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  renderSection() {
    const el = document.getElementById('dataSection')
    if (!el) return

    const types = [
      { value: 'students', label: 'Estudiantes' },
      { value: 'materials', label: 'Materiales' },
      { value: 'schedules', label: 'Horarios' },
      { value: 'menu', label: 'Menú principal' },
    ]

    html(el, `
      <div class="config-card">
        <h3>Exportar / Importar datos</h3>
        <div class="form-group">
          <label for="exportDataType">Tipo de datos</label>
          <select id="exportDataType">
            ${types.map(t => `<option value="${t.value}">${t.label}</option>`).join('')}
          </select>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <button id="exportCsvBtn" class="btn-primary"><i class="fas fa-download"></i> Exportar CSV</button>
          <button id="importCsvBtn" class="btn-secondary"><i class="fas fa-upload"></i> Importar CSV</button>
          <input type="file" id="importCsvFile" accept=".csv" style="display:none">
        </div>
      </div>
      <div class="config-card">
        <h3>Backup completo</h3>
        <p style="color:var(--dark-gray);margin-bottom:16px;font-size:0.85rem;">
          Exporta o restaura todos los datos del sistema (estudiantes, materiales, horarios, menú, noticias, galería).
        </p>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <button id="exportBackupBtn" class="btn-primary"><i class="fas fa-download"></i> Exportar Backup</button>
          <button id="importBackupBtn" class="btn-secondary"><i class="fas fa-upload"></i> Restaurar Backup</button>
          <input type="file" id="importBackupFile" accept=".json" style="display:none">
        </div>
      </div>
    `)
    this.init()
  }
}
