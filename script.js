function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
 }
 // Chatbot Elements
 const chatbot = document.querySelector('.chatbot');
 const chatbotToggle = document.querySelector('.chatbot-toggle');
 // Chatbot State
 // --- Chatbot Functions ---
 // Function to display/hide the chatbot
 function toggleChatbot() {
  chatbot.classList.toggle('active');
 }
 // --- Event Listeners ---
 chatbotToggle.addEventListener('click', () => {
  toggleChatbot();
 });
