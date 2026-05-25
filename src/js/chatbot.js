import { showToast } from './utils/toast.js'

document.getElementById('chatbot-toggle').addEventListener('click', function () {
  const chatbot = document.getElementById('chatbot-container')
  chatbot.style.display = chatbot.style.display === 'none' ? 'flex' : 'none'
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

  try {
    const response = await fetchOpenAIResponse(message)
    const botMsg = document.createElement('div')
    botMsg.textContent = 'Chatbot: ' + (response || 'No hubo respuesta')
    chatbox.appendChild(botMsg)
  } catch {
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
    return 'El chatbot no está configurado. Contacta al administrador para configurar la API Key.'
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: userInput }],
    }),
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }

  const data = await response.json()
  return data.choices[0].message.content
}
