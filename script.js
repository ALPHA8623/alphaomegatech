function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Chatbot
const chatbot = document.querySelector('.chatbot');
const chatbotToggle = document.querySelector('.chatbot-toggle');
const chatbotMessages = document.querySelector('.chatbot-messages');
const chatbotInput = document.querySelector('.chatbot-input input');
const chatbotSend = document.querySelector('.chatbot-input button');

// Función para mostrar/ocultar el chatbot
chatbotToggle.addEventListener('click', () => {
    chatbot.classList.toggle('active');
});

// Función para añadir un mensaje al chat
function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chatbot-message');
    if (isUser) {
        messageDiv.classList.add('user-message');
    }
    messageDiv.textContent = message;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Objeto con las respuestas del chatbot (¡Asegúrate de completarlo!)
const chatbotResponses = {
    "hola": "¡Hola! ¿En qué puedo ayudarte hoy?",
    "automatizacion": "Ofrecemos servicios de Automatización Empresarial para optimizar tus procesos. ¿Te gustaría saber más?",
    "ia": "Nos especializamos en Inteligencia Artificial para diversas aplicaciones, incluyendo asistentes virtuales y creación de contenido. ¿Qué área te interesa más?",
    "marketing": "Nuestro Marketing Digital Automatizado te permite llegar a tu público de manera eficiente. ¿Quieres conocer nuestras estrategias?",
    "contenido": "Creamos contenido atractivo y personalizado con IA para tu negocio. ¿Qué tipo de contenido necesitas?",
    "cita": "Puedes agendar una cita directamente a través de WhatsApp [número de teléfono] o visitando nuestro perfil de Instagram [@alphaomegatech.j1].",
    "agendar cita": "Puedes agendar una cita directamente a través de WhatsApp [número de teléfono] o visitando nuestro perfil de Instagram [@alphaomegatech.j1].",
    "gracias": "¡De nada! ¿Hay algo más en lo que pueda ayudarte?",
    "adios": "¡Hasta luego! Que tengas un buen día.",
    "ayuda": "Puedo responder preguntas sobre automatización empresarial, marketing digital automatizado, asistentes virtuales con IA y creación de contenido con IA.",
    "mas informacion": "Claro, ¿sobre qué tema te gustaría saber más?",
    "informacion adicional": "Claro, ¿sobre qué tema te gustaría saber más?",
    "no entiendo": "Actualmente no puedo responder a su consulta en este espacio, pero estaré encantado de atenderle de manera más específica. Puede contactarme directamente en WhatsApp [número] o en Instagram [@alphaomegatech.j1] para resolver su duda."

    // ... (Añade más preguntas y respuestas aquí)
};

// Función para procesar el mensaje del usuario y obtener la respuesta del chatbot
function getChatbotResponse(message) {
    message = message.toLowerCase();
    return chatbotResponses[message] || "Lo siento, no entiendo tu pregunta.  Puedes contactarme directamente en WhatsApp [número] o en Instagram [@alphaomegatech.j1] para resolver tu duda.";
}

// Evento para enviar un mensaje
chatbotSend.addEventListener('click', () => {
    const message = chatbotInput.value;
    if (message.trim() !== '') {
        addMessage(message, true);
        const response = getChatbotResponse(message);
        setTimeout(() => {
            addMessage(response);
        }, 500); // Simula un retraso en la respuesta del bot
        chatbotInput.value = '';
    }
});

chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        chatbotSend.click();
    }
});
