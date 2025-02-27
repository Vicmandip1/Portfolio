// Ensure the document is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", function () {
    
    // ✅ Register GSAP ScrollTrigger Plugin
    gsap.registerPlugin(ScrollTrigger);

    // ✅ Hero Section Animations
    gsap.from(".hero-content h1", { opacity: 0, y: -50, duration: 1, ease: "power3.out" });
    gsap.from(".hero-content p", { opacity: 0, y: 50, duration: 1, delay: 0.5, ease: "power3.out" });
    gsap.from(".cta-button", { opacity: 0, scale: 0.8, duration: 1, delay: 1, ease: "elastic.out(1, 0.3)" });

    // ✅ Animate Sections on Scroll
    gsap.utils.toArray(".about, .skills, .projects, .contact").forEach(section => {
        gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                end: "top 50%",
                toggleActions: "play none none reverse",
                markers: false // Change to true for debugging
            }
        });
    });

    // ✅ Dark Mode Toggle with Local Storage
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const icon = darkModeToggle.querySelector("i");

    // Check saved mode in localStorage
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        icon.classList.replace("fa-moon", "fa-sun");
    }

    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            icon.classList.replace("fa-moon", "fa-sun");
        } else {
            localStorage.setItem("dark-mode", "disabled");
            icon.classList.replace("fa-sun", "fa-moon");
        }
    });

    // ✅ Typing Effect
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
    typeEffect();

    // ✅ Particle.js Fix (Correct ID)
    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            size: { value: 3, random: true },
        },
        retina_detect: true
    });

});
