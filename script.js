const chatInput = document.getElementById("chatInput");
const chatbox = document.getElementById("chatbox");
const sendChat = document.getElementById("sendChat");
const leadForm = document.getElementById("leadForm");
const formMessage = document.getElementById("formMessage");
const chatToggle = document.getElementById("chatToggle");
const chatWidget = document.getElementById("chatWidget");
const chatClose = document.getElementById("chatClose");

leadForm.addEventListener("submit", function (event) {
  event.preventDefault();
  formMessage.textContent = "Demo lead captured. Live version can send this to email, text, CRM, or spreadsheet.";
  leadForm.reset();
});

function addMessage(sender, text) {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatbox.appendChild(p);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function getReply(message) {
  const msg = message.toLowerCase();

  if (msg.includes("roof") || msg.includes("leak") || msg.includes("shingle")) {
    return "Got it. Is this a roof repair, leak issue, storm damage, or full replacement?";
  }

  if (msg.includes("siding") || msg.includes("hardie") || msg.includes("exterior")) {
    return "We can help with siding and exterior upgrades. Is this repair, replacement, or a full curb-appeal refresh?";
  }

  if (msg.includes("fire") || msg.includes("smoke") || msg.includes("restoration") || msg.includes("damage")) {
    return "Sorry you’re dealing with that. Is the damage mostly siding, roofing, smoke staining, or exterior repair?";
  }

  if (msg.includes("price") || msg.includes("cost") || msg.includes("quote") || msg.includes("estimate")) {
    return "Free quotes are available. What’s the best phone number for a follow-up?";
  }

  if (msg.includes("edmonton") || msg.includes("alberta")) {
    return "Yes, this demo is built around Edmonton and surrounding Alberta service areas.";
  }

  return "I can help with roofing, siding, or restoration. What kind of project are you looking at?";
}

function sendMessage(customMessage) {
  const text = customMessage || chatInput.value.trim();
  if (!text) return;

  addMessage("You", text);

  setTimeout(() => {
    addMessage("Assistant", getReply(text));
  }, 300);

  chatInput.value = "";
}

chatToggle.addEventListener("click", function () {
  chatWidget.classList.add("open");
  chatInput.focus();
});

chatClose.addEventListener("click", function () {
  chatWidget.classList.remove("open");
});

sendChat.addEventListener("click", function () {
  sendMessage();
});

chatInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

document.querySelectorAll(".quick-replies button").forEach((button) => {
  button.addEventListener("click", function () {
    sendMessage(button.dataset.msg);
  });
});

addMessage("Assistant", "Hi — I can help with roofing, siding, or restoration. What do you need help with?");