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
function myFunction(x) {
  x.classList.toggle("change");
}

