const container = document.querySelector(".js-container");
const input = document.querySelector(".js-input");
const askBtn = document.querySelector(".js-ask-button");
const replyP = document.querySelector(".js-chat-reply");

const apiKey = "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";

askBtn.addEventListener("click", () => {
  chatbot();
});

input.addEventListener("keydown", (event) => {
  if(event.key === "Enter") {
    chatbot();
  }
});

async function chatbot() {
  const userMessage = input.value;

  container.classList.add("container");

  replyP.innerHTML = "Loading...";

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "HTTP-Referer": "https://yourdomain.com",
      "X-Title": "My Chat UI",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "deepseek/deepseek-r1:free",
      messages: [
        {
          role: "user",
          content: userMessage
        }
      ]
    })
  });

  const data = await response.json();
  console.log(data);

  const botReply = data.choices?.[0]?.message?.content || "No response";
  replyP.textContent = "🤖 " + botReply;

  input.value = "";
}
