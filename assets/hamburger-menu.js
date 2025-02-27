document.addEventListener("DOMContentLoaded", function () {
    // ✅ Select Elements
    const menu = document.querySelector(".nav-menu");
    const toggleButton = document.querySelector(".hamburger-menu");

    if (toggleButton) {
        // ✅ Toggle Menu on Click
        toggleButton.addEventListener("click", () => {
            menu.classList.toggle("active"); // Show/Hide menu
            toggleButton.classList.toggle("active"); // Rotate Icon
        });

        // ✅ Close Menu When Clicking Outside
        document.addEventListener("click", (event) => {
            if (!toggleButton.contains(event.target) && !menu.contains(event.target)) {
                menu.classList.remove("active");
                toggleButton.classList.remove("active");
            }
        });
    } else {
        console.error("❌ Hamburger menu button not found.");
    }
});
