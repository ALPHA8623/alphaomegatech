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
    console.log("Función sendMessage()");
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
    let understood = false;

    if (text.includes("hola") || text.includes("buenas") || text.includes("saludos") || text.includes("hey")) {
      response = "¡Hola! ¿En qué puedo ayudarte hoy? Pregunta sobre nuestros servicios de automatización, marketing digital, asistentes virtuales o creación de contenido.";
      understood = true;
    } else if (text.includes("servicio") || text.includes("ofrecen") || text.includes("hacen")) {
      response = "Ofrecemos una gama de servicios que incluyen automatización empresarial para optimizar procesos, marketing digital automatizado para el crecimiento, asistentes virtuales con IA para atención 24/7 y creación de contenido con inteligencia artificial.";
      understood = true;
    } else if (text.includes("automatización") || text.includes("procesos") || text.includes("optimizar") || text.includes("flujos de trabajo")) {
      response = "La automatización empresarial implica la implementación de flujos de trabajo inteligentes para tareas repetitivas, lo que ahorra tiempo, reduce errores y mejora la eficiencia general de tu negocio.";
      understood = true;
    } else if (text.includes("marketing digital") || text.includes("campañas") || text.includes("clientes") || text.includes("crecer") || text.includes("leads")) {
      response = "Nuestro marketing digital automatizado se enfoca en crear campañas eficientes que atraigan y conviertan clientes potenciales, permitiéndote enfocarte en el crecimiento de tu empresa.";
      understood = true;
    } else if (text.includes("asistente virtual") || text.includes("chatbot") || text.includes("atender") || text.includes("soporte") || text.includes("24/7")) {
      response = "Los asistentes virtuales con IA (chatbots) pueden interactuar con tus clientes en cualquier momento, respondiendo preguntas frecuentes, brindando información y mejorando la experiencia del usuario.";
      understood = true;
    } else if (text.includes("contenido") || text.includes("textos") || text.includes("imágenes") || text.includes("publicaciones") || text.includes("crear") || text.includes("redes sociales")) {
      response = "Utilizamos IA para generar contenido de calidad para diversas plataformas, incluyendo textos para tu sitio web, imágenes atractivas y publicaciones optimizadas para redes sociales.";
      understood = true;
    } else if (text.includes("nosotros") || text.includes("quiénes sois") || text.includes("empresa") || text.includes("equipo")) {
      response = "En ALPHAOMEGATECH, somos un equipo de profesionales apasionados por la tecnología, el diseño y la automatización, dedicados a ayudar a negocios como el tuyo a alcanzar su máximo potencial.";
      understood = true;
    } else if (text.includes("contacto") || text.includes("hablar") || text.includes("escribir") || text.includes("llamar")) {
      response = "Puedes ponerte en contacto con nosotros a través del botón de WhatsApp que ves en la página. ¡Estamos ansiosos por saber de ti!";
      understood = true;
    } else if (text.includes("cita") || text.includes("reunión") || text.includes("agendar")) {
      response = "Para agendar una cita, la mejor manera es contactarnos a través de WhatsApp. Así podremos coordinar un horario que funcione para ambos.";
      understood = true;
    }

    if (!understood) {
      response = "Lo siento, no comprendo completamente tu pregunta. Por favor, intenta reformularla o pregunta sobre nuestros servicios principales: automatización, marketing digital, asistentes virtuales o creación de contenido.";
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
