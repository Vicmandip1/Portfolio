// GSAP Scroll Animations
gsap.from(".hero-content h1", { opacity: 0, y: -50, duration: 1, ease: "power3.out" });
gsap.from(".hero-content p", { opacity: 0, y: 50, duration: 1, delay: 0.5, ease: "power3.out" });
gsap.from(".cta-button", { opacity: 0, scale: 0.8, duration: 1, delay: 1, ease: "elastic.out(1, 0.3)" });

gsap.registerPlugin(ScrollTrigger);


// Animate sections on scroll
gsap.utils.toArray(".about, .skills, .projects, .contact").forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse"
        }
    });
});



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
