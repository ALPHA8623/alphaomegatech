function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
 }
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
  "hola": ["¡Hola! ¿En qué puedo ayudarte hoy?", "¡Saludos! ¿Qué necesitas saber?", "¡Hola! ¿Cómo estás? ¿Qué puedo hacer por ti?"],
  "como estas": ["Estoy aquí para ayudarte con tus preguntas sobre automatización e IA.", "Soy un chatbot, ¡así que siempre estoy listo para ayudarte!"],
  "gracias": ["De nada.", "Un placer.", "¡A tu servicio!"],
  "gracias chatbot": ["De nada.", "Un placer.", "¡A tu servicio!"],
  "gracais": ["De nada.", "Un placer.", "¡A tu servicio!"],
  "gracais chatbot": ["De nada.", "Un placer.", "¡A tu servicio!"],
  "adios": ["¡Hasta luego!", "¡Que tengas un buen día!", "¡Nos vemos!"],
  "adios chatbot": ["¡Hasta luego!", "¡Que tengas un buen día!", "¡Nos vemos!"],
  "automatizacion": "Ofrecemos servicios de Automatización Empresarial para optimizar tus procesos. ¿Te gustaría saber más?",
  "ia": "Nos especializamos en Inteligencia Artificial para diversas aplicaciones, incluyendo asistentes virtuales y creación de contenido. ¿Qué área te interesa más?",
  "marketing": "Nuestro Marketing Digital Automatizado te permite llegar a tu público de manera eficiente. ¿Quieres conocer nuestras estrategias?",
  "contenido": "Creamos contenido atractivo y personalizado con IA para tu negocio. ¿Qué tipo de contenido necesitas?",
  "cita": "Puedes agendar una cita directamente a través de WhatsApp [número de teléfono] o visitando nuestro perfil de Instagram [@alphaomegatech.j1].",
  "agendar cita": "Puedes agendar una cita directamente a través de WhatsApp [número de teléfono] o visitando nuestro perfil de Instagram [@alphaomegatech.j1].",
  "que procesos en mi empresa son mas susceptibles de ser automatizados": "Los procesos susceptibles de automatización suelen ser repetitivos, basados en reglas y de alto volumen. ¿Quieres ejemplos específicos?",
  "como puedo identificar las tareas repetitivas que consumen mas tiempo": "Puedes identificar estas tareas analizando los flujos de trabajo de tu equipo y observando dónde se invierte más tiempo. ¿Te gustaría saber más sobre herramientas para este análisis?",
  "cual es el retorno de inversion roi esperado al implementar la automatizacion": "El ROI varía según el proceso y la empresa, pero se puede calcular considerando el ahorro de tiempo, la reducción de errores y el aumento de la productividad. ¿Te gustaría un ejemplo de cálculo?",
  "como puedo definir objetivos claros para mis campañas automatizadas": "Definir objetivos claros es crucial. ¿Qué quieres lograr con tus campañas: aumentar las ventas, generar leads, mejorar el reconocimiento de marca? Podemos ayudarte a establecer KPIs.",
  "que es ia": "¿Qué tipo de IA te interesa más? La IA Generativa, la IA Analítica o la IA Automatización",
  "que es la ia generativa": "La IA Generativa es un tipo de inteligencia artificial que puede generar nuevo contenido, como texto, imágenes, música y otros tipos de datos.  ¿Te gustaría saber más sobre sus aplicaciones?",
  "que es la ia analitica": "La IA Analítica se centra en el análisis de datos para obtener información valiosa y patrones. ¿Te gustaría saber cómo se aplica en la toma de decisiones empresariales?",
  "que es la ia automatizacion": "La IA de Automatización se utiliza para automatizar tareas y procesos, mejorando la eficiencia y reduciendo la necesidad de intervención humana. ¿Te interesa conocer ejemplos de automatización en diferentes industrias?",
  "cuales son los beneficios de la ia": "La IA ofrece beneficios como la automatización de tareas, análisis de grandes volúmenes de datos, mejora de la toma de decisiones y personalización de la experiencia del cliente. ¿Qué beneficio específico te gustaría explorar?",
  "cuales son los riesgos de la ia": "Algunos riesgos de la IA incluyen
