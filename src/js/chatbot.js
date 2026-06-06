import { showToast } from './utils/toast.js'

const SITE_INFO = {
  institution: 'I.E. Héctor Abad Gómez',
  teacher: 'Victor Cañola',
  programs: ['Programación de Software', 'Preprensa Digital'],
  sections: [
    { name: 'Programación de Software', url: 'pages/programacion.html', desc: 'Contenido y recursos de programación' },
    { name: 'Preprensa Digital', url: 'pages/preprensa.html', desc: 'Diseño y preprensa digital' },
    { name: 'Plan de Estudio', url: '#', desc: 'Mallas curriculares de ambos programas' },
    { name: 'Material', url: 'pages/material.html', desc: 'Materiales de estudio y descargas' },
    { name: 'Horario', url: 'pages/horario.html', desc: 'Horarios de clase' },
    { name: 'Planes de Mejoramiento', url: 'pages/planes.html', desc: 'Planes para recuperación académica' },
    { name: 'Proyecto Propio', url: 'pages/proyecto.html', desc: 'Proyectos personales de los estudiantes' },
    { name: 'Indicadores', url: 'https://www.iehectorabadgomez.edu.co/index2.php?id=93698&idmenutipo=7334', desc: 'Indicadores de gestión' },
    { name: 'Formatos', url: 'pages/formatos.html', desc: 'Formatos institucionales' },
    { name: 'Pruebas de Periodo', url: 'https://www.iehectorabadgomez.edu.co/index2.php?id=93701&idmenutipo=7334', desc: 'Evaluaciones de periodo' },
    { name: 'ClassHAG', url: 'https://classhag.infinityfree.me/?i=1', desc: 'Plataforma educativa ClassHAG' },
    { name: 'Revista Intectiva', url: 'pages/catalogo.html', desc: 'Revista institucional' },
    { name: 'Contacto', url: 'pages/contacto.html', desc: 'Información de contacto' },
    { name: 'Malla Programación', url: 'pages/mallapreprogramacion.html', desc: 'Malla curricular de Programación' },
    { name: 'Malla Preprensa', url: 'pages/mallapreprensa.html', desc: 'Malla curricular de Preprensa Digital' },
  ],
}

function buildSystemPrompt() {
  const sections = SITE_INFO.sections.map(s => `- ${s.name}: ${s.desc} (${s.url})`).join('\n')
  return `Eres el asistente virtual de la Media Técnica de la I.E. Héctor Abad Gómez. El docente a cargo es ${SITE_INFO.teacher}.
Los programas ofrecidos son: ${SITE_INFO.programs.join(' y ')}.

Estas son las secciones disponibles en el sitio web:
${sections}

Responde de forma amable, clara y en español. Si te preguntan por algo que está en el sitio, indica dónde encontrarlo (la sección y su enlace). Si no sabes la respuesta, indícalo honestamente.`
}

const systemPrompt = buildSystemPrompt()

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('chatbot-toggle')
  const input = document.getElementById('chatbot-text')

  toggle.addEventListener('click', function () {
    const chatbot = document.getElementById('chatbot-container')
    const isVisible = getComputedStyle(chatbot).display !== 'none'
    chatbot.style.display = isVisible ? 'none' : 'flex'
    if (!isVisible) input.focus()
  })

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage()
  })
})

async function sendMessage() {
  const inputField = document.getElementById('chatbot-text')
  const message = inputField.value.trim()
  if (!message) return

  const chatbox = document.getElementById('chatbot-messages')

  const userMsg = document.createElement('div')
  userMsg.textContent = 'Tú: ' + message
  chatbox.appendChild(userMsg)
  inputField.value = ''

  const loadingMsg = document.createElement('div')
  loadingMsg.textContent = 'Chatbot: Escribiendo...'
  loadingMsg.id = 'chatbot-loading'
  chatbox.appendChild(loadingMsg)
  chatbox.scrollTop = chatbox.scrollHeight

  try {
    const response = await fetchOpenAIResponse(message)
    const loading = document.getElementById('chatbot-loading')
    if (loading) loading.remove()

    const botMsg = document.createElement('div')
    botMsg.textContent = 'Chatbot: ' + (response || 'No hubo respuesta')
    chatbox.appendChild(botMsg)
  } catch {
    const loading = document.getElementById('chatbot-loading')
    if (loading) loading.remove()

    showToast('Error al conectar con el chatbot', 'error')
    const errorMsg = document.createElement('div')
    errorMsg.textContent = 'Chatbot: Lo siento, hubo un error. Intenta de nuevo.'
    chatbox.appendChild(errorMsg)
  }

  chatbox.scrollTop = chatbox.scrollHeight
}

async function fetchOpenAIResponse(userInput) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY

  if (!apiKey || apiKey.startsWith('sk-proj-tu-api')) {
    return resumeSinAPI(userInput)
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: `(Página actual: ${window.location.pathname}) ${userInput}` },
      ],
    }),
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }

  const data = await response.json()
  return data.choices[0].message.content
}

function resumeSinAPI(query) {
  const q = query.toLowerCase()
  if (q.includes('horario') || q.includes('clase')) {
    return 'Los horarios de clase los encuentras en la sección "Horario" (pages/horario.html).'
  }
  if (q.includes('material') || q.includes('descargar')) {
    return 'Los materiales de estudio están disponibles en la sección "Material" (pages/material.html).'
  }
  if (q.includes('programación') || q.includes('software')) {
    return 'El programa de Programación de Software tiene su contenido en pages/programacion.html y su malla curricular en pages/mallapreprogramacion.html.'
  }
  if (q.includes('preprensa') || q.includes('diseño')) {
    return 'El programa de Preprensa Digital tiene su contenido en pages/preprensa.html y su malla curricular en pages/mallapreprensa.html.'
  }
  if (q.includes('proyecto')) {
    return 'Los proyectos propios de los estudiantes están en la sección "Proyecto Propio" (pages/proyecto.html).'
  }
  if (q.includes('plan') && (q.includes('mejoramiento') || q.includes('recuperación'))) {
    return 'Los planes de mejoramiento están en pages/planes.html.'
  }
  if (q.includes('classhag') || q.includes('class hag')) {
    return 'ClassHAG es la plataforma educativa. Puedes acceder en https://classhag.infinityfree.me/?i=1'
  }
  if (q.includes('contacto') || q.includes('teléfono') || q.includes('email')) {
    return 'La información de contacto está en la sección "Contáctanos" (pages/contacto.html).'
  }
  if (q.includes('profesor') || q.includes('docente') || q.includes('cañola')) {
    return 'El docente a cargo de la Media Técnica es Victor Cañola.'
  }
  if (q.includes('hola') || q.includes('buenas') || q.includes('saludos')) {
    return '¡Hola! Soy el asistente virtual de la Media Técnica HAG. ¿En qué puedo ayudarte? Puedes preguntarme sobre horarios, materiales, programas, y más.'
  }
  return 'No tengo una respuesta exacta para eso. Puedes explorar las secciones del menú principal para encontrar lo que buscas. ¿Quieres preguntarme sobre horarios, materiales, programas o proyectos?'
}

window.sendMessage = sendMessage
