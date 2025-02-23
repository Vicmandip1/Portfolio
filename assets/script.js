// Function to toggle the project details and buttons
function toggleDetails(button) {
    // Select the closest project container
    var project = button.closest('.project');
    // Find the project-details section within the container
    var projectDetails = project.querySelector('.project-details');
    // Find the more button within the container
    var moreBtn = project.querySelector('.more-btn');

    if (projectDetails.style.display === 'block') {
        projectDetails.style.display = 'none';
        moreBtn.style.display = 'inline-block';
        moreBtn.setAttribute('aria-expanded', 'false');
    } else {
        projectDetails.style.display = 'block';
        moreBtn.style.display = 'none';
        moreBtn.setAttribute('aria-expanded', 'true');
    }
}
