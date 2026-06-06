const STAR_COUNT = 220
const PLANET_COUNT = 4

let canvas, ctx, stars, planets, mouseX, mouseY, scrollY, w, h

function rand(a, b) { return a + Math.random() * (b - a) }

function createStars() {
  stars = []
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: rand(0, w), y: rand(0, h), r: rand(0.4, 2.2),
      baseOpacity: rand(0.3, 1), speed: rand(0.002, 0.015),
      phase: rand(0, Math.PI * 2),
      parallax: rand(0.005, 0.025),
    })
  }
}

function createPlanets() {
  const colors = ['#ff6b6b', '#48dbfb', '#ff9ff3', '#54a0ff', '#5f27cd', '#01a3a4', '#f368e0']
  planets = []
  for (let i = 0; i < PLANET_COUNT; i++) {
    const color = colors[i % colors.length]
    planets.push({
      x: rand(0.1, 0.9), y: rand(0.1, 0.9),
      r: rand(15, 45), color,
      glow: `radial-gradient(circle at 35% 35%, ${color}88, ${color}22 60%, transparent 80%)`,
      speedX: rand(-0.0003, 0.0003), speedY: rand(-0.0002, 0.0002),
      phase: rand(0, Math.PI * 2),
      pulseSpeed: rand(0.002, 0.005),
    })
  }
}

function drawBackground() {
  const grad = ctx.createRadialGradient(w * 0.5, h * 0.3, 0, w * 0.5, h * 0.3, w * 0.7)
  grad.addColorStop(0, '#1a0a2e')
  grad.addColorStop(0.4, '#0f0a2e')
  grad.addColorStop(0.7, '#050510')
  grad.addColorStop(1, '#020208')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, w, h)

  for (let i = 0; i < 3; i++) {
    const cx = rand(0, w), cy = rand(0, h), r = rand(100, 300)
    const nebula = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
    const c = [`#4a00e033`, `#8e2de233`, `#00d2ff22`][i]
    nebula.addColorStop(0, c)
    nebula.addColorStop(1, 'transparent')
    ctx.fillStyle = nebula
    ctx.fillRect(0, 0, w, h)
  }
}

function drawStars(mx, my) {
  const px = (mx - w / 2) / w
  const py = (my - h / 2) / h

  for (const s of stars) {
    const ox = px * s.parallax * h
    const oy = py * s.parallax * h + scrollY * s.speed * 80
    const opacity = s.baseOpacity * (0.6 + 0.4 * Math.sin(Date.now() * s.speed + s.phase))
    ctx.beginPath()
    ctx.arc(
      (s.x + ox + w) % w,
      (s.y + oy + h * 2) % (h * 2) - h * 0.2,
      s.r, 0, Math.PI * 2
    )
    ctx.fillStyle = `rgba(255,255,255,${opacity * 0.8})`
    ctx.fill()

    if (s.r > 1.4) {
      ctx.beginPath()
      ctx.arc(
        (s.x + ox + w) % w,
        (s.y + oy + h * 2) % (h * 2) - h * 0.2,
        s.r * 2.5, 0, Math.PI * 2
      )
      ctx.fillStyle = `rgba(200,220,255,${opacity * 0.08})`
      ctx.fill()
    }
  }
}

function drawPlanets(mx, my) {
  const px = (mx - w / 2) / w * 0.03
  const py = (my - h / 2) / h * 0.03

  for (const p of planets) {
    const t = Date.now()
    const ox = Math.sin(t * p.speedX + p.phase) * w * 0.08
    const oy = Math.cos(t * p.speedY + p.phase) * h * 0.06
    const cx = p.x * w + ox + px * w
    const cy = p.y * h + oy + py * h + scrollY * 0.03
    const pulse = 1 + 0.06 * Math.sin(t * p.pulseSpeed)
    const r = p.r * pulse

    const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 4)
    const baseColor = p.color
    glow.addColorStop(0, baseColor + '66')
    glow.addColorStop(0.3, baseColor + '22')
    glow.addColorStop(1, 'transparent')
    ctx.fillStyle = glow
    ctx.beginPath()
    ctx.arc(cx, cy, r * 4, 0, Math.PI * 2)
    ctx.fill()

    const grad = ctx.createRadialGradient(cx - r * 0.25, cy - r * 0.25, 0, cx, cy, r)
    grad.addColorStop(0, '#ffffff66')
    grad.addColorStop(0.3, baseColor + 'cc')
    grad.addColorStop(0.7, baseColor)
    grad.addColorStop(1, baseColor + '88')
    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.arc(cx, cy, r, 0, Math.PI * 2)
    ctx.fill()

    ctx.beginPath()
    ctx.arc(cx - r * 0.2, cy - r * 0.25, r * 0.2, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(255,255,255,0.35)'
    ctx.fill()
  }
}

function animate() {
  if (!canvas) return
  ctx.clearRect(0, 0, w, h)
  drawBackground()
  drawPlanets(mouseX, mouseY)
  drawStars(mouseX, mouseY)
  requestAnimationFrame(animate)
}

function resize() {
  w = window.innerWidth
  h = window.innerHeight
  canvas.width = w
  canvas.height = h
  createStars()
  createPlanets()
}

function initGalaxy() {
  canvas = document.getElementById('galaxy-canvas')
  if (!canvas) return
  ctx = canvas.getContext('2d')
  scrollY = 0

  resize()
  mouseX = w / 2
  mouseY = h / 2

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  })

  window.addEventListener('scroll', () => {
    scrollY = window.scrollY
  })

  window.addEventListener('resize', resize)
  animate()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGalaxy)
} else {
  initGalaxy()
}
