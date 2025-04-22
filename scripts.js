async function simplifyText() {
  const input = document.getElementById("inputText").value.trim();
  const output = document.getElementById("outputText");

  if (!input) {
    output.innerText = "Please enter some text.";
    return;
  }

  output.innerText = "Simplifying...";

  try {
    const response = await fetch("https://api-inference.huggingface.co/models/facebook/bart-large-cnn", {
      method: "POST",
      headers: {
        "Authorization": "Bearer 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",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: input }),
    });

    const data = await response.json();

    if (data.error) {
      output.innerText = "Error: " + data.error;
    } else {
      output.innerText = data[0].summary_text || "Simplification failed.";
    }
  } catch (err) {
    output.innerText = "There was an error connecting to the API.";
  }
}
