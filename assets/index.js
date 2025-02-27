// ✅ Ensure the document is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", function () {
    
    /** ============================
     * ✅ GSAP Animations
     * ============================ */
    gsap.registerPlugin(ScrollTrigger);

    // ✅ Smooth Hero Section Animations (Restored & Improved)
    gsap.from(".hero-content h1", { 
        opacity: 0, 
        y: -50, 
        duration: 1.5, 
        ease: "power3.out" 
    });

    gsap.from(".hero-content p", { 
        opacity: 0, 
        y: 50, 
        duration: 1.5, 
        delay: 0.5, 
        ease: "power3.out" 
    });

    gsap.from(".cta-button", { 
        opacity: 0, 
        scale: 0.8, 
        duration: 1.5, 
        delay: 1, 
        ease: "elastic.out(1, 0.3)" 
        y: 20 /* ✅ Moves button slightly down instead of fading out */
    });

    // ✅ Smooth Scroll Animations for All Sections
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

    /** ============================
     * ✅ Dark Mode Toggle with Local Storage (Fixed)
     * ============================ */
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const icon = darkModeToggle.querySelector("i");

    function updateDarkMode() {
        if (localStorage.getItem("dark-mode") === "enabled") {
            body.classList.add("dark-mode");
            icon.classList.replace("fa-moon", "fa-sun");
        } else {
            body.classList.remove("dark-mode");
            icon.classList.replace("fa-sun", "fa-moon");
        }
    }

    // ✅ Apply Dark Mode on Page Load
    updateDarkMode();

    // ✅ Toggle Dark Mode on Click
    darkModeToggle.addEventListener("click", () => {
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "disabled");
        } else {
            localStorage.setItem("dark-mode", "enabled");
        }
        updateDarkMode(); // Update Mode
    });

    /** ============================
     * ✅ Typing Effect (Fixed to Avoid Crashes)
     * ============================ */
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

    /** ============================
     * ✅ Fix Particles.js - Ensure Full Background Coverage
     * ============================ */
    if (typeof particlesJS !== "undefined") {
        setTimeout(() => {
            particlesJS("particles-js", {
                particles: {
                    number: { value: 100, density: { enable: true, value_area: 900 } }, 
                    color: { value: "#ffffff" },
                    shape: {
                        type: "circle",
                        stroke: { width: 0, color: "#000000" }
                    },
                    opacity: { value: 0.6 },
                    size: { value: 2.5, random: true },
                    line_linked: { 
                        enable: true, 
                        distance: 150, 
                        color: "#ffffff", 
                        opacity: 0.4, 
                        width: 1 
                    },
                    move: { 
                        enable: true, 
                        speed: 3, 
                        direction: "none", 
                        random: false, 
                        out_mode: "out" 
                    }
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
                        push: { particles_nb: 5 } 
                    }
                },
                retina_detect: true
            });
        }, 500);
    } else {
        console.error("❌ Particles.js library is not loaded.");
    }

    /** ============================
     * ✅ Mobile Menu Toggle (Ensures Navbar Works on Mobile)
     * ============================ */
    const menu = document.querySelector(".nav-menu");
    const toggleButton = document.createElement("button");
    
    toggleButton.classList.add("hamburger-menu");
    toggleButton.innerHTML = "☰"; // Hamburger Icon

    // ✅ Append Button to Navbar
    document.querySelector(".navbar").appendChild(toggleButton);

    // ✅ Toggle Menu on Click
    toggleButton.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
    }

    /** ============================
     * ✅ Smooth Scroll for "View Projects" Button
     * ============================ */
    const ctaButton = document.querySelector(".cta-button");
    if (ctaButton) {
        ctaButton.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
        });
    }
});
