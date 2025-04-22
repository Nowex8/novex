function simplifyText() {
  const input = document.getElementById("userInput").value;
  const simplified = input
    .replace(/difficult/gi, "hard")
    .replace(/utilize/gi, "use")
    .replace(/approximately/gi, "about")
    .replace(/terminate/gi, "end");
  document.getElementById("simplifiedResult").innerText = simplified;
}

function summarizeText() {
  const input = document.getElementById("userInput").value;
  const words = input.trim().split(" ");
  const summary = words.slice(0, Math.ceil(words.length / 3)).join(" ");
  document.getElementById("summaryResult").innerText = summary + "...";
}

function chatbotReply() {
  const input = document.getElementById("chatInput").value.toLowerCase();
  let response = "I'm still learning. Can you repeat?";
  
  if (input.includes("hello")) response = "Hi! How can I help you?";
  else if (input.includes("how are you")) response = "I'm good, thanks for asking!";
  else if (input.includes("bye")) response = "Goodbye! See you soon.";
  
  document.getElementById("chatResponse").innerText = response;
}
