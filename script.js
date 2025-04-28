// --- MENÚ RESPONSIVO ---
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

// --- CHATBOT ORIONIS ---
// Elementos
const chatbot = document.getElementById('chatbot');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');

// Mostrar/Ocultar chatbot
function toggleChatbot() {
  chatbot.classList.toggle('active');
}

// Agregar mensaje al chat
function addMessage(message, isUser = false) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('chatbot-message');
  if (isUser) messageDiv.classList.add('user-message');
  messageDiv.textContent = message;
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Simular "Orionis está escribiendo..."
function showTyping() {
  typingIndicator = document.createElement('div');
  typingIndicator.classList.add('chatbot-message');
  typingIndicator.textContent = "Orionis está escribiendo...";
  chatbotMessages.appendChild(typingIndicator);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Quitar "Orionis está escribiendo..."
function hideTyping() {
  if (typingIndicator) {
    chatbotMessages.removeChild(typingIndicator);
    typingIndicator = null;
  }
}

// Enviar mensaje
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

// Generar respuesta del chatbot
function generateResponse(userInput) {
  const text = userInput.toLowerCase();
  let response = "";

  if (text.includes("hola") || text.includes("buenas")) {
    response = "¡Hola! ¿Cómo podemos asistirte hoy?";
  } else if (text.includes("automatización") || text.includes("optimizar")) {
    response = "Podemos automatizar tus procesos para ahorrar tiempo y reducir errores.";
  } else if (text.includes("marketing") || text.includes("clientes")) {
    response = "Ofrecemos marketing digital automatizado para captar más clientes.";
  } else if (text.includes("ia") || text.includes("inteligencia artificial")) {
    response = "La IA es nuestra especialidad. ¿Sobre qué tema específico te gustaría saber más?";
  } else if (text.includes("cita") || text.includes("whatsapp")) {
    response = "Agenda tu cita aquí 👉 [WhatsApp](https://wa.me/1234567890) o síguenos en Instagram [@alphaomegatech.j1].";
  } else {
    response = "Actualmente no puedo responder esa consulta aquí. Escríbenos 👉 [WhatsApp](https://wa.me/1234567890).";
  }

  addMessage(response);
}

// Capturar Enter para enviar mensaje
chatbotInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Botón enviar
chatbotSend.addEventListener('click', sendMessage);

// Inactividad (2 minutos)
let inactivityTimer;
function resetInactivityTimer() {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(() => {
    addMessage("¿Sigues ahí? Puedes seguir escribiendo o contactarnos en WhatsApp.");
  }, 120000); // 2 minutos
}
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('keydown', resetInactivityTimer);

// Activar modo noche automático
function activateNightMode() {
  const hour = new Date().getHours();
  if (hour >= 19 || hour < 7) {
    document.body.style.backgroundColor = "#0a0a0a";
    document.body.style.color = "#bfa84c";
  }
}
activateNightMode();
