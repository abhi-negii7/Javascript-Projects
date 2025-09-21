const voice = new SpeechSynthesisUtterance();
const text = document.getElementById("text-input");
const btn = document.getElementById("speak-button");
const stopBtn = document.getElementById("stop-button");
btn.addEventListener("click", textToVoice);

function textToVoice() {
  // Stop any ongoing speech before starting new one
  speechSynthesis.cancel();
  // sets that cleaned-up string as the text to be spoken by the
  voice.text = text.value;
  // Trim whitespace from the text input
  voice.text = text.value.trim();
  // Check if the text is empty after trimming
  if (voice.text.length === 0) {
    alert("Please enter text to speak.");
    return;
  }
  speechSynthesis.speak(voice);
}

stopBtn.addEventListener("click", () => {
  // Stop any ongoing speech
  speechSynthesis.cancel();
});
