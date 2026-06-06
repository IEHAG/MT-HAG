import { getItem, setItem } from '@/js/utils/storage.js'
import { showToast } from '@/js/utils/toast.js'
import { html, escJs } from '@/js/utils/dom.js'

const STORAGE_KEY = 'adminStudents'

export class StudentsModule {
  constructor() {
    this.students = this.load()
  }

  load() {
    return getItem(STORAGE_KEY, [
      { id: '1', name: 'Juan Pérez', photo: 'assets/images/default-student.png', program: 'Programación de Software' },
      { id: '2', name: 'María García', photo: 'assets/images/default-student.png', program: 'Preprensa Digital' },
    ])
  }

  save() {
    setItem(STORAGE_KEY, this.students)
  }

  renderGrid() {
    const grid = document.getElementById('studentsGrid')
    if (!grid) return
    html(grid, this.students.map(s => `
      <div class="student-card">
        <img src="${s.photo}" alt="${s.name}" class="student-photo" onerror="this.src='data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72"><rect width="72" height="72" fill="#e2e8f0" rx="36"/><text x="36" y="42" text-anchor="middle" font-size="28" fill="#94a3b8" font-family="sans-serif">👤</text></svg>')}'">
        <div class="student-name">${s.name}</div>
        <div class="student-program">${s.program}</div>
        <div class="student-actions">
          <button class="edit-btn" onclick="window.dashboard.modules.students.edit('${escJs(s.id)}')">
            <i class="fas fa-edit"></i> Editar
          </button>
          <button class="delete-btn" onclick="window.dashboard.modules.students.delete('${escJs(s.id)}')">
            <i class="fas fa-trash"></i> Eliminar
          </button>
        </div>
      </div>
    `).join(''))
  }

  handleAdd(e) {
    e.preventDefault()
    const student = {
      id: Date.now().toString(),
      name: document.getElementById('studentName').value,
      photo: 'assets/images/default-student.png',
      program: document.getElementById('studentProgram').value,
    }
    this.students.push(student)
    this.save()
    this.renderGrid()
    window.dashboard.closeModal('addStudentModal')
    window.dashboard.updateStats()
    showToast('Estudiante agregado exitosamente', 'success')
  }

  edit(id) {
    const s = this.students.find(x => x.id === id)
    if (!s) return
    document.getElementById('studentName').value = s.name
    document.getElementById('studentProgram').value = s.program

    document.querySelector('#addStudentModal .modal-header h3').textContent = 'Editar Estudiante'
    const form = document.getElementById('addStudentForm')
    form.onsubmit = (e) => {
      e.preventDefault()
      s.name = document.getElementById('studentName').value
      s.program = document.getElementById('studentProgram').value
      this.save()
      this.renderGrid()
      window.dashboard.closeModal('addStudentModal')
      window.dashboard.updateStats()
      showToast('Estudiante actualizado', 'success')
      form.onsubmit = (ev) => this.handleAdd(ev)
      document.querySelector('#addStudentModal .modal-header h3').textContent = 'Agregar Estudiante'
    }
    window.dashboard.openModal('addStudentModal')
  }

  delete(id) {
    if (!confirm('¿Estás seguro de eliminar este estudiante?')) return
    this.students = this.students.filter(s => s.id !== id)
    this.save()
    this.renderGrid()
    window.dashboard.updateStats()
    showToast('Estudiante eliminado', 'success')
  }

  get count() { return this.students.length }
}
