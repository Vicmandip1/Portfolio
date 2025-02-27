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
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1.2,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "top 50%",
                toggleActions: "play none none reverse"
                markers: false // Set to true for debugging
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

    // ✅ Particle.js Configuration
    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 }
            },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: false, out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 1 } },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });
});
