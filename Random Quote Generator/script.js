const btn = document.getElementById("generate-btn");
const quoteEl = document.getElementById("quote");
const copyBtn = document.getElementById("copy-btn");

async function getQuote() {
  try {
    console.log("Button clicked");
    const response = await fetch(
      "https://api.freeapi.app/api/v1/public/quotes/quote/random"
    );
    const data = await response.json();
    // Extract content and author
    const quote = data.data.content;
    const author = data.data.author;

    quoteEl.innerHTML = `"${quote}" <br> — ${author}`;
  } catch (error) {
    console.error("Error fetching quote:", error);
    quoteEl.innerHTML = "⚠️ Failed to fetch quote. Please try again.";
  }
}

btn.addEventListener("click", getQuote);

// Copy to clipboard
copyBtn.addEventListener("click", () => {
  const text = quoteEl.innerText; // only text (no HTML tags)
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("✅ Quote copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
    });
});
