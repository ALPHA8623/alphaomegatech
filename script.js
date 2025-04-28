// Función para mostrar/ocultar el menú en pantallas pequeñas
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Opcional: Cerrar el menú si se hace clic en un enlace (en dispositivos móviles)
const menuLinks = document.querySelectorAll('#menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('menu');
        menu.classList.remove('active');
    });
});

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
    "agendar cita": "Puedes agendar una cita directamente a través de WhatsApp [número de teléfono] o visitando nuestro perfil de Instagram [@alphaomegatech.j
