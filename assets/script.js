// Function to Toggle Details and Change Button Text
function toggleDetails(id) {
    console.log("Toggle button clicked for: " + id); // Debugging line
    const details = document.getElementById(id);
    const button = details.previousElementSibling;

    // Check current display state of the details section
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        button.innerText = "See Less";
    } else {
        details.style.display = "none";
        button.innerText = "More";
    }
}
