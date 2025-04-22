function simplifyText() {
    const input = document.getElementById('userInput').value;
    const simplified = input
        .replace(/\bare\b/g, 'are (you)')
        .replace(/\bapproximately\b/g, 'about')
        .replace(/\butilize\b/g, 'use')
        .replace(/\bprior to\b/g, 'before')
        .replace(/\bsubsequent\b/g, 'after');

    document.getElementById('result').innerText = simplified || 'Nothing to simplify.';
}
function summarizeText() {
  const input = document.getElementById("userInput").value;
  const words = input.split(" ");
  const summary = words.slice(0, Math.ceil(words.length / 3)).join(" ");
  document.getElementById("summaryResult").innerText = summary + "...";
}
function chatbotReply() {
  const input = document.getElementById("chatInput").value;
  const response = "Hmm... that's interesting! Tell me more.";
  document.getElementById("chatResponse").innerText = response;
}
