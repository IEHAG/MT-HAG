const schedule = {
  "11.2": [
    { day: "Lunes", time: "1:00 PM - 6:00 PM", subject: "Preprensa Digital para Medios Impresos — Instructor SENA" },
    { day: "Lunes", time: "1:00 PM - 6:00 PM", subject: "Trabajo Conjunto SENA — Docente IEHAG" },
    { day: "Jueves", time: "1:00 PM - 6:00 PM", subject: "Preprensa Digital para Medios Impresos — Docente IEHAG" },
    { day: "Descanso", time: "3:14 PM - 3:45 PM", subject: "Aplica dentro de la jornada" },
  ],
  "10.1": [
    { day: "Martes", time: "1:00 PM - 6:00 PM", subject: "Programación de Software — Docente IEHAG" },
    { day: "Miércoles", time: "1:00 PM - 6:00 PM", subject: "Programación de Software — Instructor SENA" },
    { day: "Descanso", time: "3:14 PM - 3:45 PM", subject: "Aplica dentro de la jornada" },
  ],
  "10.2": [
    { day: "Lunes", time: "1:00 PM - 6:00 PM", subject: "Preprensa Digital para Medios Impresos — Instructor SENA" },
    { day: "Lunes", time: "1:00 PM - 6:00 PM", subject: "Trabajo Conjunto SENA — Docente IEHAG" },
    { day: "Miércoles", time: "1:00 PM - 6:00 PM", subject: "Preprensa Digital para Medios Impresos — Docente IEHAG" },
    { day: "Descanso", time: "3:14 PM - 3:45 PM", subject: "Aplica dentro de la jornada" },
  ],
  "11.1": [
    { day: "Martes", time: "1:00 PM - 6:00 PM", subject: "Programación de Software — Instructor SENA" },
    { day: "Viernes", time: "1:00 PM - 6:00 PM", subject: "Programación de Software — Docente IEHAG" },
    { day: "Descanso", time: "3:14 PM - 3:45 PM", subject: "Aplica dentro de la jornada" },
  ],
}

const COLORS = {
  programación: { badge: 'linear-gradient(135deg,#003366,#004d99)', tag: '#003366', bg: 'rgba(0,51,102,0.06)' },
  preprensa: { badge: 'linear-gradient(135deg,#6a00f4,#b5179e)', tag: '#6a00f4', bg: 'rgba(106,0,244,0.06)' },
  descanso: { badge: 'linear-gradient(135deg,#2d6a4f,#52b788)', tag: '#2d6a4f', bg: 'rgba(45,106,79,0.06)' },
  conjunto: { badge: 'linear-gradient(135deg,#64748b,#94a3b8)', tag: '#64748b', bg: 'rgba(100,116,139,0.06)' },
}

function loadPublicSchedules() {
  try { return JSON.parse(localStorage.getItem('publicSchedules') || '[]') } catch { return [] }
}

function getMergedSchedule() {
  const merged = JSON.parse(JSON.stringify(schedule))
  loadPublicSchedules().forEach(item => {
    if (!merged[item.grade]) merged[item.grade] = []
    merged[item.grade].push({ day: item.day, time: item.time, subject: item.subject })
  })
  return merged
}

function getAllGrades() { return Object.keys(schedule) }

function getAllDays() {
  const set = new Set()
  Object.values(schedule).forEach(list => list.forEach(i => set.add(i.day)))
  return Array.from(set)
}

function getSubjectColor(subject) {
  const s = subject.toLowerCase()
  if (s.includes('programación')) return 'programación'
  if (s.includes('preprensa')) return 'preprensa'
  if (s.includes('descanso')) return 'descanso'
  return 'conjunto'
}

function displaySchedule(filters = {}) {
  const container = document.getElementById('schedule')
  if (!container) return

  const order = ["10.1", "11.1", "10.2", "11.2"]
  const { grade = '', day = '', search = '' } = filters
  const searchLower = search.trim().toLowerCase()
  const data = getMergedSchedule()

  container.innerHTML = order.map((gradeKey, idx) => {
    if (!data[gradeKey]) return ''
    if (grade && gradeKey !== grade) return ''

    const filtered = data[gradeKey].filter(item => {
      const matchesDay = !day || item.day === day
      const text = `${item.day} ${item.time} ${item.subject}`.toLowerCase()
      return matchesDay && (!searchLower || text.includes(searchLower))
    })

    if (!filtered.length) return ''

    const rows = filtered.map(c => {
      const type = getSubjectColor(c.subject)
      const colors = COLORS[type]
      return `
        <div class="schedule-row">
          <div class="day-name">${c.day}</div>
          <div class="time-range"><i class="far fa-clock" style="color:${colors.tag}"></i> ${c.time}</div>
          <div class="subject-name">${c.subject}</div>
          <div><span class="subject-tag" style="background:${colors.bg};color:${colors.tag}">${type.charAt(0).toUpperCase() + type.slice(1)}</span></div>
        </div>
      `
    }).join('')

    const initials = gradeKey.replace('.', '')
    return `
      <div class="schedule-card" style="animation:slideIn 0.4s ease ${idx * 0.12}s both;">
        <div class="schedule-card-header">
          <div class="grade-badge" style="background:linear-gradient(135deg,${idx < 2 ? '#003366' : '#6a00f4'},${idx < 2 ? '#004d99' : '#b5179e'})">${initials}</div>
          <h3>Grado ${gradeKey}</h3>
        </div>
        <div class="schedule-card-body">${rows}</div>
      </div>
    `
  }).join('')
}

function initFilters() {
  const gradeFilter = document.getElementById('gradeFilter')
  const dayFilter = document.getElementById('dayFilter')
  const searchFilter = document.getElementById('searchFilter')
  const resetBtn = document.getElementById('resetFilters')
  const printBtn = document.getElementById('printSchedule')

  if (gradeFilter) {
    getAllGrades().forEach(g => {
      const opt = document.createElement('option')
      opt.value = g; opt.textContent = g; gradeFilter.appendChild(opt)
    })
    gradeFilter.addEventListener('change', applyFilters)
  }

  if (dayFilter) {
    getAllDays().forEach(d => {
      const opt = document.createElement('option')
      opt.value = d; opt.textContent = d; dayFilter.appendChild(opt)
    })
    dayFilter.addEventListener('change', applyFilters)
  }

  if (searchFilter) searchFilter.addEventListener('input', applyFilters)

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (gradeFilter) gradeFilter.value = ''
      if (dayFilter) dayFilter.value = ''
      if (searchFilter) searchFilter.value = ''
      displaySchedule()
    })
  }

  if (printBtn) printBtn.addEventListener('click', () => window.print())
}

function applyFilters() {
  displaySchedule({
    grade: (document.getElementById('gradeFilter') || {}).value || '',
    day: (document.getElementById('dayFilter') || {}).value || '',
    search: (document.getElementById('searchFilter') || {}).value || '',
  })
}

document.addEventListener('DOMContentLoaded', () => {
  displaySchedule()
  initFilters()
})
