// ✅ Ensure the document is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", function () {
    
    /** ============================
     * ✅ GSAP Animations
     * ============================ */
    gsap.registerPlugin(ScrollTrigger);

    // ✅ Smooth Hero Section Animations
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
        ease: "elastic.out(1, 0.3)", 
        y: 20
    });

    // ✅ Scroll Animations for Sections
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
                markers: false
            }
        });
    });

    /** ============================
     * ✅ Mobile Menu Toggle
     * ============================ */
    const menu = document.querySelector(".nav-menu");
    const toggleButton = document.createElement("button");

    toggleButton.classList.add("hamburger-menu");
    toggleButton.innerHTML = "☰"; // Hamburger Icon
    document.querySelector(".navbar").appendChild(toggleButton);

    toggleButton.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

});
