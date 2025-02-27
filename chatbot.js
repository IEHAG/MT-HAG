document.getElementById("chatbot-toggle").addEventListener("click", function() {
    const chatbot = document.getElementById("chatbot-container");
    chatbot.style.display = chatbot.style.display === "none" ? "flex" : "none";
});

async function sendMessage() {
    const inputField = document.getElementById("chatbot-text");
    const message = inputField.value.trim();
    
    if (message === "") return;

    const chatbox = document.getElementById("chatbot-messages");

    // Agregar el mensaje del usuario
    const userMessage = document.createElement("div");
    userMessage.textContent = "Tú: " + message;
    chatbox.appendChild(userMessage);
    inputField.value = "";

    // Llamar a la API de OpenAI para obtener respuesta
    const botResponse = await fetchOpenAIResponse(message);

    // Agregar la respuesta del chatbot
    const botMessage = document.createElement("div");
    botMessage.textContent = "Chatbot: " + botResponse;
    chatbox.appendChild(botMessage);
    chatbox.scrollTop = chatbox.scrollHeight; // Desplazar hacia abajo
}

// Función para conectarse con OpenAI
async function fetchOpenAIResponse(userInput) {
    const apiKey = "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"; // Reemplázala con tu clave API

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userInput }]
        })
    });

    const data = await response.json();
    return data.choices[0].message.content;
}
