// Function to Show the Details
function showDetails(id) {
    const details = document.getElementById(id);
    const button = details.previousElementSibling; // Get the button element

    details.style.display = "block"; // Show the Details
    button.textContent = "See Less"; // Change the button text to "See Less"
}

// Function to Hide the Details
function hideDetails(id) {
    const details = document.getElementById(id);
    const button = details.previousElementSibling; // Get the button element

    details.style.display = "none";  // Hide the Details
    button.textContent = "See More"; // Change the button text to "See More"
}
// Optional JS to toggle sidenav (if needed in the future)
const sidenav = document.getElementById("mySidenav");

// Toggle Sidenav on Click (Optional)
sidenav.addEventListener("click", function() {
    if (sidenav.style.width === "250px") {
        sidenav.style.width = "0";
    } else {
        sidenav.style.width = "250px";
    }
});

