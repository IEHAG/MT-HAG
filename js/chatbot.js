document.getElementById("chatbot-toggle").addEventListener("click", function() {
    const chatbot = document.getElementById("chatbot-container");
    chatbot.style.display = chatbot.style.display === "none" ? "flex" : "none";
});

async function sendMessage() {
    const inputField = document.getElementById("chatbot-text");
    const message = inputField.value.trim();
    
    if (message === "") return;

    const chatbox = document.getElementById("chatbot-messages");

    const userMessage = document.createElement("div");
    userMessage.textContent = "Tú: " + message;
    chatbox.appendChild(userMessage);
    inputField.value = "";

    try {
        const botResponse = await fetchOpenAIResponse(message);
        const botMessage = document.createElement("div");
        botMessage.textContent = "Chatbot: " + (botResponse || "No hubo respuesta");
        chatbox.appendChild(botMessage);
    } catch {
        const errorMsg = document.createElement("div");
        errorMsg.textContent = "Chatbot: Lo siento, hubo un error. Intenta de nuevo.";
        chatbox.appendChild(errorMsg);
    }

    chatbox.scrollTop = chatbox.scrollHeight;
}

async function fetchOpenAIResponse(userInput) {
    // Para usar el chatbot, configura tu API Key en una variable de entorno
    // o reemplázala directamente aquí (no recomendado para producción)
    const apiKey = ""; // Coloca tu API Key aquí o usa VITE_OPENAI_API_KEY con Vite

    if (!apiKey) {
        return "El chatbot no está configurado. Contacta al administrador.";
    }

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

    if (!response.ok) throw new Error(`API error: ${response.status}`);

    const data = await response.json();
    return data.choices[0].message.content;
}
