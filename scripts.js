function simplifyText() {
  const input = document.getElementById('inputText').value;
  const output = document.getElementById('output');

  if (!input.trim()) {
    output.textContent = 'Please enter some text.';
    return;
  }

  // Basit bir örnek sadeleştirme (gerçek AI yerine basitleştirilmiş demo)
  let simplified = input.replace(/\b(utilize|commence|terminate|endeavor|assist|purchase)\b/gi, function (match) {
    const map = {
      utilize: 'use',
      commence: 'start',
      terminate: 'end',
      endeavor: 'try',
      assist: 'help',
      purchase: 'buy'
    };
    return map[match.toLowerCase()] || match;
  });

  output.textContent = simplified;
}
