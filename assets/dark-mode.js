/** ============================
 * ✅ Dark Mode Toggle
 * ============================ */
document.addEventListener("DOMContentLoaded", function () {
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
        updateDarkMode();
    });
});
