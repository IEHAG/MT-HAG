import { AdminAuth } from './auth.js'
import { StudentsModule } from './modules/students.js'
import { MaterialsModule } from './modules/materials.js'
import { SchedulesModule } from './modules/schedules.js'
import { MenuModule } from './modules/menu.js'
import { SettingsModule } from './modules/settings.js'
import { NewsModule } from './modules/news.js'
import { GalleryModule } from './modules/gallery.js'
import { DataModule } from './modules/data.js'
import { showToast } from '@/js/utils/toast.js'
import { html, $, escJs } from '@/js/utils/dom.js'

class AdminDashboard {
  constructor() {
    this.auth = new AdminAuth()
    this.currentSection = 'dashboard'

    this.modules = {
      students: new StudentsModule(),
      materials: new MaterialsModule(),
      schedules: new SchedulesModule(),
      menu: new MenuModule(),
      settings: new SettingsModule(),
      news: new NewsModule(),
      gallery: new GalleryModule(),
      data: new DataModule(),
    }

    if (!this.auth.isAuthenticated()) {
      window.location.href = 'login.html'
      return
    }

    this.init()
  }

  init() {
    this.setupNavigation()
    this.setupForms()
    this.loadDashboard()
    this.updateUserInfo()
    this.modules.settings.init()
    this.modules.data.renderSection()

    const logoutBtn = document.getElementById('logoutBtn')
    if (logoutBtn) logoutBtn.addEventListener('click', () => this.auth.logout())

    window.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) e.target.style.display = 'none'
    })
  }

  setupNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', (e) => {
        this.showSection(e.currentTarget.dataset.section)
      })
    })
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => this.switchTab(e.currentTarget.dataset.tab))
    })
  }

  setupForms() {
    const form = document.getElementById('addStudentForm')
    if (form) form.addEventListener('submit', (e) => this.modules.students.handleAdd(e))

    const menuForm = document.getElementById('menuItemForm')
    if (menuForm) menuForm.addEventListener('submit', (e) => this.modules.menu.handleSave(e))

    const materialForm = document.getElementById('materialForm')
    if (materialForm) materialForm.addEventListener('submit', (e) => this.modules.materials.handleSave(e))

    const scheduleForm = document.getElementById('addScheduleForm')
    if (scheduleForm) scheduleForm.addEventListener('submit', (e) => this.modules.schedules.handleAddPublic(e))

    const pageForm = document.getElementById('pageForm')
    if (pageForm) pageForm.addEventListener('submit', (e) => this.handleSavePage(e))

    const newsForm = document.getElementById('newsForm')
    if (newsForm) newsForm.addEventListener('submit', (e) => this.modules.news.handleSave(e))

    const galleryForm = document.getElementById('galleryForm')
    if (galleryForm) galleryForm.addEventListener('submit', (e) => this.modules.gallery.handleSave(e))
  }

  showSection(name) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'))
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'))

    const target = document.getElementById(`${name}-section`)
    if (target) target.classList.add('active')

    const navItem = document.querySelector(`[data-section="${name}"]`)
    if (navItem) navItem.classList.add('active')

    const title = document.getElementById('pageTitle')
    if (title) title.textContent = this.getTitle(name)

    this.currentSection = name
    this.loadData(name)
  }

  getTitle(name) {
    const map = {
      dashboard: 'Dashboard', estudiantes: 'Gestión de Estudiantes', contenido: 'Gestión de Contenido',
      horarios: 'Gestión de Horarios', materiales: 'Gestión de Materiales', configuracion: 'Configuración',
      noticias: 'Noticias y Anuncios', galeria: 'Galería de Fotos', datos: 'Importar / Exportar',
    }
    return map[name] || 'Dashboard'
  }

  loadData(name) {
    switch (name) {
      case 'estudiantes': this.modules.students.renderGrid(); break
      case 'menu': this.modules.menu.renderList(); break
      case 'contenido': this.loadContentTabs(); break
      case 'horarios': this.modules.schedules.renderCalendar(); break
      case 'materiales': this.modules.materials.renderGrid(); break
      case 'noticias': this.modules.news.renderGrid(); break
      case 'galeria': this.modules.gallery.renderGrid(); break
    }
  }

  loadDashboard() {
    this.updateStats()
    this.renderActivity()
    this.updateVisits()
  }

  updateStats() {
    const studentsEl = document.getElementById('totalStudents')
    if (studentsEl) studentsEl.textContent = this.modules.students.count

    const materialsEl = document.getElementById('totalMaterials')
    if (materialsEl) materialsEl.textContent = this.modules.materials.count

    const schedulesEl = document.getElementById('totalSchedules')
    if (schedulesEl) schedulesEl.textContent = this.modules.schedules.count

    const newsEl = document.getElementById('totalNews')
    if (newsEl) newsEl.textContent = this.modules.news.count

    const galleryEl = document.getElementById('totalGallery')
    if (galleryEl) galleryEl.textContent = this.modules.gallery.count
  }

  updateVisits() {
    const el2024 = document.getElementById('visits2024Number')
    if (el2024) el2024.textContent = '590'

    const el2025 = document.getElementById('visits2025Number')
    if (el2025) {
      const raw = localStorage.getItem('siteVisitsCount')
      el2025.textContent = raw ? String(parseInt(raw, 10) || 355) : '355'
    }
  }

  renderActivity() {
    const el = document.getElementById('activityList')
    if (!el) return
    const items = [
      { icon: 'fas fa-user-plus', title: 'Nuevo estudiante agregado', time: 'Hace 2 horas', color: 'var(--success-color)' },
      { icon: 'fas fa-file-plus', title: 'Material actualizado', time: 'Hace 4 horas', color: 'var(--secondary-color)' },
      { icon: 'fas fa-calendar-plus', title: 'Horario modificado', time: 'Hace 1 día', color: 'var(--warning-color)' },
      { icon: 'fas fa-cog', title: 'Configuración actualizada', time: 'Hace 2 días', color: 'var(--dark-gray)' },
    ]
    html(el, items.map(a => `
      <div class="activity-item">
        <div class="activity-icon" style="background:${a.color}"><i class="${a.icon}"></i></div>
        <div class="activity-content">
          <div class="activity-title">${a.title}</div>
          <div class="activity-time">${a.time}</div>
        </div>
      </div>
    `).join(''))
  }

  loadContentTabs() {
    const el = document.getElementById('pagesList')
    if (el) {
      const pages = [
        { title: 'Programación de Software', description: 'Página principal de programación', status: 'Activa' },
        { title: 'Preprensa Digital', description: 'Página principal de preprensa', status: 'Activa' },
        { title: 'Material', description: 'Página de materiales', status: 'Activa' },
        { title: 'Horario', description: 'Página de horarios', status: 'Activa' },
      ]
      html(el, pages.map(p => `
        <div class="content-item">
          <div class="content-icon"><i class="fas fa-file-alt"></i></div>
          <div class="content-info">
            <div class="content-title">${p.title}</div>
            <div class="content-description">${p.description} - ${p.status}</div>
          </div>
          <div class="content-actions">
            <button class="btn-primary" onclick="window.dashboard.editPage('${escJs(p.title)}')"><i class="fas fa-edit"></i> Editar</button>
          </div>
        </div>
      `).join(''))
    }
    this.modules.materials.renderList()
  }

  switchTab(name) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'))
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'))

    const btn = document.querySelector(`[data-tab="${name}"]`)
    if (btn) btn.classList.add('active')

    const pane = document.getElementById(`${name}-tab`)
    if (pane) pane.classList.add('active')
  }

  handleSavePage(e) {
    e.preventDefault()
    const id = $('#pageId').value
    const title = $('#pageTitleInput').value || ''
    const description = $('#pageDescription').value || ''
    const status = $('#pageStatus').value || 'Activa'
    const saved = JSON.parse(localStorage.getItem('adminPages') || '[]')

    if (id) {
      const updated = saved.map(p => (p.id === id || p.title === id) ? { ...p, title, description, status } : p)
      localStorage.setItem('adminPages', JSON.stringify(updated))
    } else {
      saved.push({ id: Date.now().toString(), title, description, status })
      localStorage.setItem('adminPages', JSON.stringify(saved))
    }
    this.closeModal('pageModal')
    showToast('Página guardada', 'success')
    this.loadContentTabs()
  }

  prepareNewPage() {
    $('#pageId').value = ''
    $('#pageTitleInput').value = ''
    $('#pageDescription').value = ''
    $('#pageStatus').value = 'Activa'
    $('#pageModalTitle').textContent = 'Nueva Página'
    this.openModal('pageModal')
  }

  editPage(title) {
    $('#pageId').value = title
    $('#pageTitleInput').value = title
    $('#pageDescription').value = 'Descripción editable'
    $('#pageStatus').value = 'Activa'
    $('#pageModalTitle').textContent = 'Editar Página'
    this.openModal('pageModal')
  }

  updateUserInfo() {
    const user = this.auth.getCurrentUser()
    if (user) {
      const el = document.getElementById('adminName')
      if (el) el.textContent = user.username
    }
  }

  openModal(id) {
    const modal = document.getElementById(id)
    if (modal) modal.style.display = 'block'
  }

  closeModal(id) {
    const modal = document.getElementById(id)
    if (modal) modal.style.display = 'none'
  }
}

// Inicializar
let dashboard
document.addEventListener('DOMContentLoaded', () => {
  try {
    dashboard = new AdminDashboard()
    window.dashboard = dashboard
    window.showSection = (n) => dashboard.showSection(n)
    window.openModal = (id) => dashboard.openModal(id)
    window.closeModal = (id) => dashboard.closeModal(id)
    window.createSchedule = () => dashboard.openModal('addScheduleModal')
  } catch (err) {
    console.error('Error inicializando dashboard', err)
    const el = document.getElementById('appInitError')
    if (el) {
      el.textContent = 'Error inicializando el panel. Recarga la página o revisa la consola.'
      el.style.display = 'block'
    }
  }
})
