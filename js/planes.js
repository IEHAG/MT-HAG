const planesData = [
  {
    grade: "10-1",
    subject: "Programación de Software",
    program: "prog",
    icon: "💻",
    activities: [
      "Desarrollo de algoritmos básicos",
      "Implementación de estructuras de datos",
      "Ejercicios de lógica de programación",
    ],
  },
  {
    grade: "11-1",
    subject: "Desarrollo Web",
    program: "prog",
    icon: "🌐",
    activities: [
      "Creación de páginas web responsive",
      "Implementación de JavaScript",
      "Desarrollo de aplicaciones web",
    ],
  },
  {
    grade: "10-2",
    subject: "Preprensa Digital",
    program: "prep",
    icon: "🎨",
    activities: [
      "Diseño de materiales impresos",
      "Manejo de software de diseño",
      "Preparación de archivos para impresión",
    ],
  },
  {
    grade: "11-2",
    subject: "Medios Impresos",
    program: "prep",
    icon: "📖",
    activities: [
      "Control de calidad en impresión",
      "Gestión de color",
      "Acabados de impresión",
    ],
  },
]

const checkColors = {
  prog: { bg: 'rgba(0,51,102,0.1)', color: '#003366' },
  prep: { bg: 'rgba(106,0,244,0.1)', color: '#6a00f4' },
}

function displayPlanes() {
  const grid = document.getElementById('planes')
  if (!grid) return

  grid.innerHTML = planesData.map((plan, idx) => {
    const cc = checkColors[plan.program] || checkColors.prog

    const activitiesHtml = plan.activities.map(a => `
      <div class="plan-activity">
        <div class="check" style="background:${cc.bg};color:${cc.color}"><i class="fas fa-check"></i></div>
        ${a}
      </div>
    `).join('')

    return `
      <div class="plan-card" style="animation:fadeUp 0.4s ease ${idx * 0.1}s both;">
        <div class="plan-card-header">
          <div class="plan-badge ${plan.program}">${plan.icon}</div>
          <div>
            <h3>Grado ${plan.grade}</h3>
            <div class="plan-subject">${plan.subject}</div>
          </div>
        </div>
        <div class="plan-card-body">
          <div class="plan-activities-title"><i class="fas fa-list-check" style="color:${cc.color}"></i> Actividades</div>
          ${activitiesHtml}
        </div>
        <div class="plan-card-footer">
          <a href="https://www.iehectorabadgomez.edu.co/index2.php?id=93702&idmenutipo=7334" target="_blank">
            <i class="fas fa-external-link-alt"></i> Ver Planes de Mejoramiento
          </a>
        </div>
      </div>
    `
  }).join('')
}

document.addEventListener('DOMContentLoaded', displayPlanes)
