// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Typing Effect
const text = ["Data Analyst", "Business Analyst", "Research Analyst"];
let index = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");

function typeEffect() {
    if (charIndex < text[index].length) {
        typingText.innerHTML += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(() => {
            typingText.innerHTML = "";
            charIndex = 0;
            index = (index + 1) % text.length;
            typeEffect();
        }, 2000);
    }
}

typeEffect();
