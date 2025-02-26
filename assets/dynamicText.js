document.addEventListener("DOMContentLoaded", function () {
    const words = ["Data Analyst", "Problem Solver", "Tech Enthusiast"];
    let wordIndex = 0;
    let charIndex = 0;
    let typingElement = document.getElementById("dynamic-text");

    function type() {
        if (charIndex < words[wordIndex].length) {
            typingElement.innerHTML += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingElement.innerHTML = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        }
    }

    type();
});
