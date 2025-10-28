// Quiz answer checking
function checkAnswer(status) {
  const result = document.getElementById("quiz-result");
  if (status === "correct") {
    result.textContent = "✅ Correct! CSS stands for Cascading Style Sheets.";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Wrong answer. Try again!";
    result.style.color = "red";
  }
}

// Random Joke Generator using public API
async function getJoke() {
  const jokeEl = document.getElementById("joke");
  jokeEl.textContent = "Loading...";
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    jokeEl.textContent = `${data.setup} 😂 ${data.punchline}`;
  } catch (error) {
    jokeEl.textContent = "Failed to fetch a joke. Please try again.";
  }
}
