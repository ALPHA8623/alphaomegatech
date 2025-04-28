// --- MENÚ RESPONSIVO ---
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

// --- CHATBOT ORIONIS ---
// Elementos principales
const chatbot = document.getElementById('chatbot');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');

let typingIndicator;
let firstInteraction = true;

// Mostrar/Ocultar chatbot
function toggleChatbot() {
  chatbot.classList.toggle('active');
  if (chatbot.classList.contains('active') && firstInteraction) {
    setTimeout(() => {
      sendBotMessage("¡Hola humano! Soy ORIONIS 🤖, tu asistente de automatización. ¿En qué puedo ayudarte hoy?");
      firstInteraction = false;
    }, 500);
  }
}

// Función para agregar mensajes
function addMessage(message, isUser = false, isBot = false) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('chatbot-message');
  
  if (isUser) {
    messageDiv.classList.add('user-message');
    messageDiv.textContent = message;
  } else if (isBot) {
    messageDiv.innerHTML = `
      <div style="display: flex; align-items: center;">
        <img src="assets/img/orionis-avatar.png" alt="Orionis" style="width:30px;height:30px;border-radius:50%;margin-right:8px;">
        <span>${message}</span>
      </div>
    `;
  }
  
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Mostrar indicador de "escribiendo..."
function showTyping() {
  typingIndicator = document.createElement('div');
  typingIndicator.classList.add('chatbot-message');
  typingIndicator.textContent = "Orionis está escribiendo...";
  chatbotMessages.appendChild(typingIndicator);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Ocultar "escribiendo..."
function hideTyping() {
  if (typingIndicator) {
    chatbotMessages.removeChild(typingIndicator);
    typingIndicator = null;
  }
}

// Enviar mensaje del usuario
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

// Generar respuesta
function generateResponse(userInput) {
  const text = userInput.toLowerCase();
  let response = "";

  if (text.includes("hola") || text.includes("buenas")) {
    response = "¡Hola! ¿Buscas servicios de automatización, IA o marketing?";
  } else if (text.includes("automatización") || text.includes("optimizar")) {
    response = "Podemos automatizar tus procesos para ahorrar tiempo y maximizar eficiencia. 🚀";
  } else if (text.includes("marketing") || text.includes("clientes")) {
    response = "Ofrecemos marketing digital automatizado para captar y fidelizar clientes.";
  } else if (text.includes("ia") || text.includes("inteligencia
