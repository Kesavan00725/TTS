const speakBtn = document.getElementById('speak-btn');
const textInput = document.getElementById('text-input');

speakBtn.addEventListener('click', () => {
  const text = textInput.value.trim();
  if (!text) {
    alert('Please enter a message!');
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  speechSynthesis.speak(utterance);
});
