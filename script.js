// --- MENÚ RESPONSIVO ---
  function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
  }

  // --- CHATBOT ---
  const chatbot = document.getElementById('chatbot');
  const chatbotMessages = document.getElementById('chatbot-messages');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotSend = document.querySelector('.chatbot-input button');
  const chatbotToggle = document.querySelector('.chatbot-header .chatbot-toggle');

  let isChatbotOpen = false;

  function toggleChatbot() {
    isChatbotOpen = !isChatbotOpen;
    chatbot.classList.toggle('active');
  }

  function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chatbot-message');
    if (isUser) {
      messageDiv.classList.add('user-message');
      messageDiv.textContent = message;
    } else {
      messageDiv.classList.add('bot-message');
      messageDiv.textContent = message;
    }
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function showTyping() {
    const typingDiv = document.createElement('div');
    typingDiv.classList.add('chatbot-message', 'bot-message', 'typing-indicator');
    typingDiv.innerHTML = `
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
    `;
    chatbotMessages.appendChild(typingDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    return typingDiv;
  }

  function hideTyping(typingElement) {
    if (typingElement) {
      chatbotMessages.removeChild(typingElement);
    }
  }

  function sendMessage() {
    const userMessage = chatbotInput.value.trim();
    if (userMessage === '') return;

    addMessage(userMessage, true);
    chatbotInput.value = '';

    const typingIndicator = showTyping();
    setTimeout(() => {
      hideTyping(typingIndicator);
      generateResponse(userMessage);
    }, 1000); // Simular un breve tiempo de espera
  }

  function generateResponse(userInput) {
    const text = userInput.toLowerCase();
    let response = "";

    if (text.includes("hola") || text.includes("buenas") || text.includes("saludos")) {
      response = "¡Hola! ¿En qué puedo ayudarte hoy?";
    } else if (text.includes("servicio")) {
      response = "Ofrecemos servicios de automatización empresarial, marketing digital automatizado, asistentes virtuales con IA y creación de contenido con IA. ¿Cuál de estos te interesa más?";
    } else if (text.includes("automatización") || text.includes("procesos") || text.includes("optimizar")) {
      response = "La automatización empresarial te ayuda a optimizar tus flujos de trabajo y ahorrar tiempo. Podemos automatizar tareas repetitivas y mejorar la eficiencia de tu negocio.";
    } else if (text.includes("marketing digital") || text.includes("campañas") || text.includes("clientes") || text.includes("crecer")) {
      response = "Nuestro marketing digital automatizado te permite llegar a más clientes y hacer crecer tu negocio de manera eficiente con campañas que trabajan de forma autónoma.";
    } else if (text.includes("asistente virtual") || text.includes("chatbot") || text.includes("atender")) {
      response = "Con nuestros asistentes virtuales con IA (chatbots), puedes atender a tus clientes las 24 horas del día, los 7 días de la semana, respondiendo preguntas y brindando soporte inmediato.";
    } else if (text.includes("contenido") || text.includes("textos") || text.includes("imágenes") || text.includes("publicaciones") || text.includes("crear")) {
      response = "Utilizamos inteligencia artificial para crear contenido atractivo y de alta calidad, como textos, imágenes y publicaciones para tus redes sociales y sitio web.";
    } else if (text.includes("nosotros") || text.includes("quiénes sois") || text.includes("empresa")) {
      response = "Somos ALPHAOMEGATECH, un equipo dedicado a impulsar negocios a través de la tecnología, el diseño y la automatización de vanguardia.";
    } else if (text.includes("contacto") || text.includes("hablar") || text.includes("escribir")) {
      response = "Puedes contactarnos a través de WhatsApp haciendo clic en el botón que aparece en la página o a través de nuestras redes sociales. ¡Estamos listos para ayudarte!";
    } else if (text.includes("cita") || text.includes("reunión")) {
      response = "Para agendar una cita, por favor contáctanos por WhatsApp. Te ayudaremos a encontrar el mejor momento para hablar.";
    } else {
      response = "Lo siento, no entendí tu pregunta. ¿Podrías reformularla o preguntar sobre nuestros servicios de automatización, marketing digital, asistentes virtuales o creación de contenido?";
    }

    setTimeout(() => {
      addMessage(response, false);
    }, 1200); // Simular un breve tiempo de respuesta del bot
  }

  chatbotInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  chatbotToggle.addEventListener('click', toggleChatbot);

  chatbot.classList.remove('active');
