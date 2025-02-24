// Get all "See More" buttons
const moreButtons = document.querySelectorAll('.more-btn');

// Function to toggle project details visibility
function toggleDetails(button) {
    const projectDetails = button.nextElementSibling;
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        projectDetails.classList.add('hidden');
        button.textContent = 'More';
        button.setAttribute('aria-expanded', 'false');
    } else {
        projectDetails.classList.remove('hidden');
        button.textContent = 'See Less';
        button.setAttribute('aria-expanded', 'true');
    }
}

// Add event listeners to all "See More" buttons
moreButtons.forEach((button) => {
    button.addEventListener('click', () => {
        toggleDetails(button);
    });
});
