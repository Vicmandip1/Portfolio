// Function to toggle the project details and buttons
function toggleDetails(button) {
    var projectDetails = button.parentElement;
    var moreBtn = projectDetails.previousElementSibling;
    var seeLessBtn = projectDetails.querySelector('.see-less-btn');

    if (projectDetails.style.display === 'block') {
        projectDetails.style.display = 'none';
        moreBtn.style.display = 'inline-block';
    } else {
        projectDetails.style.display = 'block';
        moreBtn.style.display = 'none';
    }
}
