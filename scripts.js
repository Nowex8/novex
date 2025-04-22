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
