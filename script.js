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
 function addMessage(message, isUser = false) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('chatbot-message');
  if (isUser) {
  messageDiv.classList.add('user-message');
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
  // --- Keyword Matching ---
  if (message.includes("hola") || message.includes("saludos") || message.includes("hey")) {
  response = ["¡Hola! ¿Cómo puedo ayudarte?", "¡Saludos! ¿Qué tal?", "¡Hola! ¿En qué te puedo asistir hoy?"][Math.floor(Math.random() * 3)];
  } else if (message.includes("automatizacion") && message.includes("empresarial")) {
  response = "Ofrecemos automatización empresarial para optimizar procesos y aumentar la eficiencia.";
  } else if (message.includes("marketing") && message.includes("digital")) {
  response = "Nuestro marketing digital automatizado te ayuda a llegar a más clientes y aumentar tus ventas.";
  } else if (message.includes("ia") || message.includes("inteligencia artificial")) {
  response = "La inteligencia artificial es nuestra especialidad. ¿Qué te interesa saber: aplicaciones, beneficios, riesgos?";
  } else if (message.includes("cita") || message.includes("agendar")) {
  response = "Puedes agendar una cita a través de WhatsApp al [número de teléfono] o en nuestro Instagram [@alphaomegatech.j1].";
  } else if (message.includes("gracias")) {
  response = ["De nada.", "¡Un placer ayudarte!", "A tu servicio."][Math.floor(Math.random() * 3)];
  } else if (message.includes("adios") || message.includes("chao") || message.includes("hasta luego")) {
  response = ["¡Hasta luego!", "¡Que tengas un excelente día!", "¡Nos vemos pronto!"][Math.floor(Math.random() * 3)];
  } else if (message.includes("que es la ia")) {
  response = "¿Qué tipo de IA te interesa más? La IA Generativa, la IA Analítica o la IA Automatización";
  } else if (message.includes("que es la ia generativa")) {
  response = "La IA Generativa es un tipo de inteligencia artificial que puede generar nuevo contenido, como texto, imágenes, música y otros tipos de datos. ¿Te gustaría saber más sobre sus aplicaciones?";
  } else if (message.includes("que es la ia analitica")) {
  response = "La IA Analítica se centra en el análisis de datos para obtener información valiosa y patrones. ¿Te gustaría saber cómo se aplica en la toma de decisiones empresariales?";
  } else if (message.includes("que es la ia automatizacion")) {
  response = "La IA de Automatización se utiliza para automatizar tareas y procesos, mejorando la eficiencia y reduciendo la necesidad de intervención humana. ¿Te interesa conocer ejemplos de automatización en diferentes industrias?";
  } else if (message.includes("cuales son los beneficios de la ia")) {
  response = "La IA ofrece beneficios como la automatización de tareas, análisis de grandes volúmenes de datos, mejora de la toma de decisiones y personalización de la experiencia del cliente. ¿Qué beneficio específico te gustaría explorar?";
  } else if (message.includes("cuales son los riesgos de la ia") || message.includes("riesgos de la ia") || message.includes("riesgos ia") || message.includes("riesgo de la ia") || message.includes("riesgo ia") || message.includes("riesgos")) {
  response = "Algunos riesgos de la IA incluyen la pérdida de empleos, sesgos en los algoritmos, preocupaciones sobre la privacidad y la seguridad, y la falta de transparencia en la toma de decisiones de la IA.";
  } else if (message.includes("como se implementa la ia en las empresas") || message.includes("como implementar la ia en las empresas") || message.includes("implementar la ia en las empresas") || message.includes("implementar ia en las empresas") || message.includes("implementacion de la ia en las empresas") || message.includes("implementacion ia en las empresas")) {
  response = "La implementación de la IA en las empresas puede realizarse a través de diversas estrategias, como el desarrollo de soluciones internas, la adquisición de software de IA o la colaboración con proveedores externos. ¿Te gustaría conocer ejemplos de casos de uso en tu industria?";
  } else if (message.includes("que sectores se benefician mas de la ia") || message.includes("que sectores se benefician de la ia") || message.includes("sectores beneficiados de la ia") || message.includes("sectores beneficiados ia") || message.includes("sectores de la ia") || message.includes("sector de la ia")) {
  response = "La IA tiene el potencial de beneficiar a una amplia gama de sectores, incluyendo la salud, las finanzas, la manufactura, el comercio minorista y la logística. ¿Qué sector específico te interesa más?";
  } else if (message.includes("como la ia puede mejorar la experiencia del cliente") || message.includes("como la ia mejora la experiencia del cliente") || message.includes("mejora de la experiencia del cliente con ia") || message.includes("experiencia del cliente con ia") || message.includes("experiencia del cliente ia")) {
  response = "La IA puede mejorar la experiencia del cliente a través de la personalización de la interacción, la automatización del servicio al cliente, la recomendación de productos y la anticipación de las necesidades del cliente. ¿Te gustaría saber más sobre alguna de estas aplicaciones?";
  } else if (message.includes("que tipo de datos se necesitan para entrenar un modelo de ia") || message.includes("que datos se necesitan para entrenar un modelo de ia") || message.includes("datos para entrenar un modelo de ia") || message.includes("entrenar un modelo de ia") || message.includes("modelo de ia")) {
  response = "El tipo de datos necesarios para entrenar un modelo de IA depende del problema que se esté abordando, pero generalmente se requieren datos relevantes, precisos y representativos del mundo real. ¿Qué tipo de modelo de IA te interesa entrenar?";
  } else if (message.includes("cuales son las mejores practicas para implementar la ia de forma etica") || message.includes("cuales son las mejores practicas para implementar la ia eticamente") || message.includes("mejores practicas para implementar la ia de forma etica") || message.includes("mejores practicas para implementar la ia eticamente") || message.includes("implementar la ia de forma etica") || message.includes("implementar la ia eticamente") || message.includes("implementar ia de forma etica") || message.includes("implementar ia eticamente")) {
  response = "Algunas de las mejores prácticas para implementar la IA de forma ética incluyen la transparencia en los algoritmos, la privacidad de los datos, la equidad en el tratamiento y la responsabilidad en la toma de decisiones. ¿Qué aspecto ético te preocupa más?";
  } else if (message.includes("como se asegura la calidad de los datos utilizados para entrenar modelos de ia") || message.includes("como se asegura la calidad de los datos para entrenar modelos de ia") || message.includes("calidad de los datos para entrenar modelos de ia") || message.includes("datos para entrenar modelos de ia") || message.includes("entrenar modelos de ia") || message.includes("modelos de ia")) {
  response = "La calidad de los datos se asegura mediante la limpieza, validación y verificación de los datos, así como la implementación de controles de calidad durante la recopilación y el procesamiento. ¿Qué tipo de control de calidad te interesa más?";
  } else if (message.includes("que estrategias se utilizan para mitigar los sesgos en los algoritmos de ia") || message.includes("que estrategias se utilizan para mitigar los sesgos en los algoritmos") || message.includes("estrategias para mitigar los sesgos en los algoritmos de ia") || message.includes("estrategias para mitigar los sesgos en los algoritmos") || message.includes("mitigar los sesgos en los algoritmos de ia") || message.includes("mitigar los sesgos en los algoritmos") || message.includes("sesgos en los algoritmos de ia") || message.includes("sesgos en los algoritmos")) {
  response = "Las estrategias para mitigar los sesgos en los algoritmos de IA incluyen la diversificación de los datos de entrenamiento, la evaluación de la equidad del modelo y la implementación de técnicas de corrección de sesgos. ¿Qué estrategia específica te interesa más?";
  }
  // --- Default Response ---
  if (!response) {
  response = "Soy un asistente virtual en desarrollo. Estoy aprendiendo a responder a tus preguntas sobre IA, automatización y marketing. Por ahora, puedo ofrecerte información básica. ¿Puedo ayudarte con algo más?";
  }
  // Simulate API delay (replace with actual API call's asynchronous handling)
  await new Promise(resolve => setTimeout(resolve, 500));
  return response;
 }
 // --- Event Listeners ---
 chatbotSend.addEventListener('click', async () => {
  const message = chatbotInput.value.trim();
  if (message) {
  addMessage(message, true);
  chatbotInput.value = '';
  const response = await getAIResponse(message);
  addMessage(response, false);
  }
 });
 chatbotInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
  chatbotSend.click();
  }
 });
 chatbotToggle.addEventListener('click', () => {
  toggleChatbot();
 });
