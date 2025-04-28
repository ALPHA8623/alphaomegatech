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
 const chatbotSend = document.querySelector('.chatbot-input button');
 const chatbotToggle = document.querySelector('.chatbot-header .chatbot-toggle');

 // Estado del Chatbot
 let isChatbotOpen = false;

 // Mostrar/Ocultar Chatbot
 function toggleChatbot() {
  isChatbotOpen = !isChatbotOpen;
  chatbot.classList.toggle('active');
 }

 // Agregar mensaje al chat
 function addMessage(message, isUser = false) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('chatbot-message');
  if (isUser) {
   messageDiv.classList.add('user-message');
   messageDiv.textContent = message;
  } else {
   messageDiv.classList.add('bot-message');
   messageDiv.innerHTML = `
    <img src="assets/img/orionis-avatar.png" alt="Orionis Avatar" class="bot-avatar">
    <div class="message-content">${message}</div>
   `;
  }
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
 }

 // Mostrar "escribiendo..."
 function showTyping() {
  const typingDiv = document.createElement('div');
  typingDiv.classList.add('chatbot-message', 'bot-message', 'typing-indicator');
  typingDiv.innerHTML = `
   <img src="assets/img/orionis-avatar.png" alt="Orionis Avatar" class="bot-avatar">
   <div class="message-content">
    <span class="typing-dot"></span>
    <span class="typing-dot"></span>
    <span class="typing-dot"></span>
   </div>
  `;
  chatbotMessages.appendChild(typingDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  return typingDiv;
 }

 // Quitar "escribiendo..."
 function hideTyping(typingElement) {
  if (typingElement) {
   chatbotMessages.removeChild(typingElement);
  }
 }

 // Enviar mensaje
 function sendMessage() {
  const userMessage = chatbotInput.value.trim();
  if (userMessage === '') return;

  addMessage(userMessage, true);
  chatbotInput.value = '';

  const typingIndicator = showTyping();
  setTimeout(() => {
   hideTyping(typingIndicator);
   generateResponse(userMessage);
  }, 1500);
 }

 // Generar respuesta (SIMULATED AI)
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

  setTimeout(() => {
   addMessage(response, false);
  }, 800); // Simulate response delay
 }

 // Capturar Enter keypress
 chatbotInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
   sendMessage();
  }
 });

 // --- EVENT LISTENERS ---
 chatbotToggle.addEventListener('click', toggleChatbot);

 // Inicialmente, el chatbot está cerrado
 chatbot.classList.remove('active');
