function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
 }
 // Chatbot Elements
 const chatbot = document.querySelector('.chatbot');
 const chatbotToggle = document.querySelector('.chatbot-toggle');
 const chatbotMessages = document.querySelector('.chatbot-messages');
 const chatbotInput = document.querySelector('.chatbot-input input');
 const chatbotSend = document.querySelector('.chatbot-input button');
 // Chatbot State
 let chatHistory = []; // To potentially store conversation history (for more advanced logic)
 // --- Chatbot Functions ---
 // Function to display/hide the chatbot
 function toggleChatbot() {
  chatbot.classList.toggle('active');
 }
 // Function to add a message to the chat display
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
  messageDiv.textContent = message;
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  chatHistory.push({ user: isUser, message: message }); // Store message
 }
 // *** SIMULATED AI API CALL ***
 async function getAIResponse(messageText) {
  // ***REPLACE THIS SIMULATION WITH A REAL API CALL LATER***
  // --- Simulated "AI" Logic ---
  const message = messageText.toLowerCase().trim();
  let response = null;
  let imageUrl = null; // Para la imagen, inicialmente null
  // --- Keyword Matching ---
  if (message.includes("hola") || message.includes("saludos") || message.includes("hey")) {
  response = ["¡Hola! ¿Cómo puedo ayudarte?", "¡Saludos! ¿Qué tal?", "¡Hola! ¿En qué te puedo asistir hoy?"][Math.floor(Math.random() * 3)];
  imageUrl = "bot_icon.png"; // Ruta a la imagen del bot
  } else if (message.includes("automatizacion") && message.includes("empresarial")) {
  response = "Ofrecemos automatización empresarial para optimizar procesos y aumentar la eficiencia.";
  imageUrl = "bot_icon.png";
  } else if (message.includes("marketing") && message.includes("digital")) {
  response = "Nuestro marketing digital automatizado te ayuda a llegar a más clientes y aumentar tus ventas.";
  imageUrl = "bot_icon.png";
  } else if (message.includes("ia") || message.includes("inteligencia artificial")) {
  response = "La inteligencia artificial es nuestra especialidad. ¿Qué te interesa saber: aplicaciones, beneficios, riesgos?";
  imageUrl = "bot_icon.png";
  } else if (message.includes("cita") || message.includes("agendar")) {
  response = "Puedes agendar una cita a través de WhatsApp al [número de teléfono] o en nuestro Instagram [@alphaomegatech.j1].";
  imageUrl = "bot_icon.png";
  } else if (message.includes("gracias")) {
  response = ["De nada.", "¡Un placer ayudarte!", "A tu servicio."][Math.floor(Math.random() * 3)];
  imageUrl = "bot_icon.png";
  } else if (message.includes("adios") || message.includes("chao") || message.includes("hasta luego")) {
  response = ["¡Hasta luego!", "¡Que tengas un excelente día!", "¡Nos vemos pronto!"][Math.floor(Math.random() * 3)];
  imageUrl = "bot_icon.png";
  } else if (message.includes("que es la ia")) {
  response = "¿Qué tipo de IA te interesa más? La IA Generativa, la IA Analítica o la IA Automatización";
  imageUrl = "bot_icon.png";
  } else if (message.includes("que es la ia generativa")) {
  response = "La IA Generativa es un tipo
