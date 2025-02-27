/** ============================
 * ✅ Typing Effect
 * ============================ */
document.addEventListener("DOMContentLoaded", function () {
    const textArray = ["Data Analyst", "Business Analyst", "Research Analyst"];
    let index = 0;
    let charIndex = 0;
    const typingText = document.getElementById("typing-text");

    function typeEffect() {
        if (charIndex < textArray[index].length) {
            typingText.innerHTML += textArray[index].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(() => {
                typingText.innerHTML = textArray[index]; // ✅ Keeps last word visible
                setTimeout(() => {
                    typingText.innerHTML = ""; // ✅ Clears before switching words
                    charIndex = 0;
                    index = (index + 1) % textArray.length;
                    typeEffect();
                }, 2000);
            }, 1000);
        }
    }

    if (typingText) {
        typingText.style.minHeight = "40px"; // ✅ Ensures a fixed space
        setTimeout(typeEffect, 1000);
    } else {
        console.error("❌ Typing effect target (#typing-text) not found.");
    }
});
