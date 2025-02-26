document.addEventListener("DOMContentLoaded", function () {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offset = 80; // Adjust for fixed navbar height
                const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
