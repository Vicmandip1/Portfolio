// Get the buttons and details container
const moreButtons = document.querySelectorAll('.more-btn');
const seeLessButtons = document.querySelectorAll('.see-less-btn');
const projectDetails = document.querySelectorAll('.project-details');

// Add event listeners to "See More" buttons
moreButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Show the project details
        projectDetails[index].style.display = 'block';
        projectDetails[index].style.opacity = 1;  // Ensure it's visible immediately
        button.style.display = 'none';  // Hide the "See More" button
    });
});

// Add event listeners to "See Less" buttons
seeLessButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Hide the project details
        projectDetails[index].style.display = 'none';
        projectDetails[index].style.opacity = 0;  // Fade out the details
        moreButtons[index].style.display = 'inline-block';  // Show the "See More" button
    });
});
