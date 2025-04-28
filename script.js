// Modo Noche
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Esta función debería ser llamada al cargar la página para
// verificar la hora y aplicar el modo noche si es necesario.
function checkTimeForDarkMode() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 19 || hour < 7) { // 7 PM to 7 AM
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Chatbot
const chatbot = document.getElementById('chatbot');
const chatbotMessages = document.querySelector('.chatbot-messages');
const chatbotInput = document.querySelector('.chatbot-input input');
const chatbotButton = document.querySelector('.chatbot-input button');

function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chatbot-message');
    if (isUser) {
        messageDiv.classList.add('user-message');
    }
    messageDiv.textContent = message;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Auto-scroll to bottom
}

const chatbotResponses = {
    "hola": "¡Hola! ¿En qué puedo ayudarte hoy?",
    "automatizacion": "Ofrecemos servicios de Automatización Empresarial para optimizar tus procesos. [cite: 1, 2, 3, 4] ¿Te gustaría saber más?",
    "ia": "Nos especializamos en Inteligencia Artificial para diversas aplicaciones, incluyendo asistentes virtuales y creación de contenido. [cite: 8, 9, 10, 11, 12, 13] ¿Qué área te interesa más?",
    "marketing": "Nuestro Marketing Digital Automatizado te permite llegar a tu público de manera eficiente. [cite: 5, 6, 7] ¿Quieres conocer nuestras estrategias?",
    "contenido": "Creamos contenido atractivo y personalizado con IA para tu negocio. [cite: 11, 12, 13] ¿Qué tipo de contenido necesitas?",
    "cita": "Puedes agendar una cita directamente a través de WhatsApp [número de teléfono] o visitando nuestro perfil de Instagram [@alphaomegatech.j1].",
    "agendar cita": "Puedes agendar una cita directamente a través de WhatsApp [número de teléfono] o visitando nuestro perfil de Instagram [@alphaomegatech.j1].",
    "no entiendo": "Actualmente no puedo responder a su consulta en este espacio, pero estaré encantado de atenderle de manera más específica. Puede contactarme directamente en WhatsApp [número] o en Instagram [@alphaomegatech.j1] para resolver su duda."

    // ... (Añade más preguntas y respuestas aquí)
};

function getChatbotResponse(message) {
    message = message.toLowerCase();
    for (const key in chatbotResponses) {
        if (message.includes(key)) {
            return chatbotResponses[key];
        }
    }
    return chatbotResponses["no entiendo"];
}

let userInactiveTimer;

function resetUserInactiveTimer() {
    clearTimeout(userInactiveTimer);
    userInactiveTimer = setTimeout(() => {
        addMessage("¿Sigues ahí? Puedes volver a escribir aquí o contactarnos directamente vía WhatsApp o Instagram.", false);
    }, 120000); // 2 minutos (2 * 60 * 1000 milliseconds)
}

chatbotInput.addEventListener('input', resetUserInactiveTimer);

chatbotButton.addEventListener('click', () => {
    const message = chatbotInput.value;
    if (message) {
        addMessage(message, true);
        chatbotInput.value = '';
        resetUserInactiveTimer();

        // Simular "escribiendo..."
        const typingMessage = document.createElement('div');
        typingMessage.classList.add('chatbot-message');
        typingMessage.textContent = "ORIONIS está escribiendo...";
        chatbotMessages.appendChild(typingMessage);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

        setTimeout(() => {
            chatbotMessages.removeChild(typingMessage);
            const response = getChatbotResponse(message);
            addMessage(response, false);
            resetUserInactiveTimer();

        }, 1500); // Simula el tiempo de escritura del chatbot (1.5 segundos)
    }
});

chatbotInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        chatbotButton.click();
    }
});

// Menu Mobile
const menuMobile = document.querySelector('.menu-mobile');
const nav = document.querySelector('nav');

if ( menuMobile && nav) {

     menuMobile.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
}

// Inicializaciones
checkTimeForDarkMode();
resetUserInactiveTimer();
