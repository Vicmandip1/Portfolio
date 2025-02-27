/** ============================
 * ✅ Full Particles.js Configuration
 * ============================ */
document.addEventListener("DOMContentLoaded", function () {
    if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            particles: {
                number: {
                    value: 120, // Adjust the number of particles
                    density: {
                        enable: true,
                        value_area: 1000 // Adjust particle spread
                    }
                },
                color: { value: ["#ffffff", "#ffcc00", "#ff5733"] }, // Multi-color effect
                shape: {
                    type: ["circle", "triangle", "edge"], // Various shapes
                    stroke: { width: 0, color: "#000000" },
                    polygon: { nb_sides: 6 } // Hexagon effect
                },
                opacity: {
                    value: 0.6, // Transparency level
                    random: true, // Random opacity for a dynamic effect
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3.5, // Default size of particles
                    random: true,
                    anim: {
                        enable: true,
                        speed: 4, // Speed of particle size animation
                        size_min: 0.3,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true, // Enable connecting lines
                    distance: 150,
                    color: "#ffffff", // Line color
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true, // Enable movement
                    speed: 2.5, // Adjust speed
                    direction: "none", // Move freely in all directions
                    random: false,
                    straight: false,
                    out_mode: "out", // Particles move outside the screen
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: ["grab", "bubble"] // Interactive hover effect
                    },
                    onclick: {
                        enable: true,
                        mode: ["push", "repulse"] // Interactive click effect
                    },
                    resize: true // Auto-adjust for different screen sizes
                },
                modes: {
                    grab: {
                        distance: 200, // Distance for grabbing effect
                        line_linked: { opacity: 1 }
                    },
                    bubble: {
                        distance: 250, // Distance for bubble effect
                        size: 6, // Size of bubbles
                        duration: 2,
                        opacity: 0.8,
                        speed: 3
                    },
                    repulse: {
                        distance: 180, // Distance for repulse effect
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4 // Number of particles created on click
                    },
                    remove: {
                        particles_nb: 2 // Number of particles removed on click
                    }
                }
            },
            retina_detect: true // Optimize for high-resolution displays
        });

        console.log("✅ Particles.js loaded successfully!");
    } else {
        console.error("❌ Particles.js library is not loaded.");
    }
});
