// Function to Toggle Mobile Menu
function toggleMenu() {
    const menu = document.querySelector(".nav-menu");
    const hamburger = document.querySelector(".hamburger");

    if (menu && hamburger) {
        menu.classList.toggle("active");
        hamburger.classList.toggle("active");
    }
}

// Smooth Page Navigation (Allows Clicking "Projects" to Load `projects.html`)
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            const targetHref = this.getAttribute("href");

            // If the link points to a new page, allow navigation
            if (!targetHref.startsWith("#")) {
                window.location.href = targetHref; // Navigate normally
            } else {
                event.preventDefault(); // Prevent default for smooth scrolling
                const targetSection = document.querySelector(targetHref);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });
});

// Sticky Navbar Effect on Scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }
});

// Active Link Highlighting
window.addEventListener("load", function () {
    const links = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');

    links.forEach(link => {
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('active');
        }
    });
});
