const proyectosData = [
  {
    title: "Desarrollo de Software",
    description: "Proyecto enfocado en la creación de aplicaciones innovadoras utilizando tecnologías modernas y metodologías ágiles.",
    program: "dev",
    icon: "💻",
    requirements: [
      "Implementación de metodologías ágiles",
      "Uso de tecnologías modernas",
      "Documentación del proceso",
    ],
    link: "https://drive.google.com/file/d/1Guus5IjODrpaMNLim70Re7xtXH53QSZJ/view",
  },
  {
    title: "Diseño y Preprensa",
    description: "Proyecto de diseño y preparación de materiales impresos con estándares profesionales de calidad.",
    program: "design",
    icon: "🎨",
    requirements: [
      "Diseño creativo",
      "Optimización para impresión",
      "Control de calidad",
    ],
    link: "https://drive.google.com/file/d/1Guus5IjODrpaMNLim70Re7xtXH53QSZJ/view",
  },
]

function displayProyectos() {
  const grid = document.getElementById('proyectos')
  if (!grid) return

  grid.innerHTML = proyectosData.map((p, idx) => {
    const reqs = p.requirements
      .map(
        (r) => `
      <div class="req-item">
        <i class="fas fa-check-circle"></i>
        ${r}
      </div>`
      )
      .join('')

    return `
      <div class="proyecto-card" style="animation:fadeUp 0.45s ease ${idx * 0.12}s both;">
        <div class="proyecto-card-top"></div>
        <div class="proyecto-card-body">
          <div class="proyecto-icon ${p.program}">${p.icon}</div>
          <h3>${p.title}</h3>
          <p class="proyecto-desc">${p.description}</p>
          <div class="req-title"><i class="fas fa-clipboard-list" style="color:var(--secondary)"></i> Requisitos</div>
          ${reqs}
        </div>
        <div class="proyecto-card-footer">
          <button class="proyecto-btn" onclick="window.open('${p.link}','_blank')">
            <span>Conoce el Proyecto</span>
            <i class="fas fa-chevron-circle-right"></i>
          </button>
        </div>
      </div>`
  }).join('')
}

document.addEventListener('DOMContentLoaded', displayProyectos)
