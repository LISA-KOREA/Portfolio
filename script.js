const text = "Bot Developer • Web Creator • Automation Enthusiast";
const typingText = document.getElementById("typing-text");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 40); // speed of typing
  } else {
    typingText.style.borderRight = "none"; // remove cursor after done
  }
}

window.onload = typeEffect;
