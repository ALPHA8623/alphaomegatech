// --- MENÚ RESPONSIVO ---
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

// --- CHATBOT ORIONIS ---
// Elementos
const chatbot = document.querySelector('.chatbot');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
let typingIndicator;

// Mostrar/Ocultar Chatbot
function toggleChatbot() {
  chatbot.classList.toggle('active');
}

// Agregar mensaje al chat
function addMessage(message, isUser = false, imageUrl = null) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('chatbot-message');
  if (isUser) {
    messageDiv.classList.add('user-message');
  }
  if (imageUrl) {
    messageDiv.classList.add('with-image');
    const img = document.createElement('img');
    img.src = imageUrl;
    messageDiv.appendChild(img);
  }
  messageDiv.appendChild(document.createTextNode(message));
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Mostrar animación de escribiendo...
function showTyping() {
  typingIndicator = document.createElement('div');
  typingIndicator.classList.add('chatbot-message');
  typingIndicator.textContent = "Orionis está escribiendo...";
  chatbotMessages.appendChild(typingIndicator);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Eliminar animación de escribiendo...
function hideTyping() {
  if (typingIndicator) {
    chatbotMessages.removeChild(typingIndicator);
    typingIndicator = null;
  }
}

// Procesar mensaje enviado
function sendMessage() {
  const userMessage = chatbotInput.value.trim();
  if (userMessage === '') return;
  addMessage(userMessage, true);
  chatbotInput.value = '';

  setTimeout(() => {
    showTyping();
    setTimeout(() => {
      hideTyping();
      generateResponse(userMessage);
    }, 1500);
  }, 500);
}

// Generar respuesta automática
function generateResponse(userInput) {
  const text = userInput.toLowerCase();
  let response = "";
  let randomIndex = 0;

  // --- Respuestas Personalizadas ---
  if (text.includes("hola") || text.includes("buenas") || text.includes("saludos")) {
    const greetings = [
      "¡Hola! ¿En qué podemos ayudarte hoy?",
      "¡Saludos! ¿Buscas automatizar o impulsar tu negocio?",
      "¡Bienvenido a ALPHAOMEGATECH! ¿Cómo podemos asistirte?"
    ];
    randomIndex = Math.floor(Math.random() * greetings.length);
    response = greetings[randomIndex];

  } else if (text.includes("automatización") || text.includes("optimizar procesos")) {
    response = "La automatización empresarial permite optimizar procesos, ahorrar tiempo y reducir errores. ¿Te interesa saber más detalles o agendar una asesoría gratuita?";

  } else if (text.includes("marketing") || text.includes("clientes") || text.includes("publicidad")) {
    response = "Nuestro marketing digital automatizado te ayuda a captar más clientes, mejorar tu imagen y aumentar ventas de manera inteligente. ¿Te gustaría recibir una propuesta personalizada?";

  } else if (text.includes("ia") || text.includes("inteligencia artificial")) {
    response = "La IA es el futuro. Aplicamos inteligencia artificial en procesos, marketing y asistentes virtuales para transformar negocios. ¿Te interesa saber qué áreas podríamos mejorar en tu empresa?";

  } else if (text.includes("asistente") || text.includes("chatbot")) {
    response = "Nuestros asistentes virtuales con IA trabajan 24/7 atendiendo consultas, automatizando ventas y mejorando la experiencia de tus clientes. ¿Quieres que Orionis te muestre un ejemplo?";

  } else if (text.includes("contenido") || text.includes("creación")) {
    response = "La creación de contenido con IA permite generar textos, imágenes y publicaciones adaptadas a tu audiencia, ahorrándote tiempo y recursos. ¿Te gustaría ver ejemplos reales?";

  } else if (text.includes("cita") || text.includes("agendar") || text.includes("whatsapp")) {
    response = "Puedes agendar una cita con nuestro equipo experto vía WhatsApp: [👉 Click aquí](https://wa.me/1234567890) o visitar nuestro Instagram [@alphaomegatech.j1]. ¡Estaremos encantados de asesorarte!";

  } else {
    response = "Actualmente no puedo responder a tu consulta en este espacio, pero estaré encantado de atenderte directamente en WhatsApp [👉 aquí](https://wa.me/1234567890) o en Instagram [@alphaomegatech.j1].";
  }

  addMessage(response);
}

// Capturar enter en el input
chatbotInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Inactividad
let inactivityTimer;
function resetInactivityTimer() {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(() => {
    addMessage("¿Sigues ahí? Puedes seguir escribiendo aquí o contactarnos directamente vía WhatsApp o Instagram.");
  }, 120000); // 2 minutos
}
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);

// Activar modo noche automático
function activateNightMode() {
  const hour = new Date().getHours();
  if (hour >= 19 || hour < 7) {
    document.body.style.backgroundColor = "#0a0a0a";
    document.body.style.color = "#bfa84c"; // dorado más suave
  }
}
activateNightMode();
