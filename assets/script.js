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

// Function to Set Active Class Based on Clicked Link
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        links.forEach(item => item.classList.remove('active'));
        // Add active class to clicked link
        this.classList.add('active');
    });
});

// Function to Retain Active Class on Page Load
window.addEventListener('load', function() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    links.forEach(link => {
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('active');
        }
    });
});
