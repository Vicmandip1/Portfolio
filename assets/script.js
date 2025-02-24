// Function to Toggle the Display of Project Details
function toggleDetails(id) {
    // Debugging Line to Confirm Button Click
    console.log("Toggle button clicked for: " + id);
    
    // Get the Details Section by ID
    const details = document.getElementById(id);

    // Check the Current Display Style and Toggle
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block"; // Show the Details
    } else {
        details.style.display = "none";  // Hide the Details
    }
}
