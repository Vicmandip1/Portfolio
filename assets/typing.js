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
                typingText.innerHTML = ""; // Clear text before restarting
                charIndex = 0;
                index = (index + 1) % textArray.length;
                typeEffect();
            }, 2000);
        }
    }

    if (typingText) {
        setTimeout(typeEffect, 1000); // ✅ Added delay before starting
    } else {
        console.error("❌ Typing effect target (#typing-text) not found.");
    }
});
