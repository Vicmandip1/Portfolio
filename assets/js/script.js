// Function to Toggle Project Details
function toggleDetails(id) {
  const details = document.getElementById(id);
  // Check if the details section is hidden or visible
  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block"; // Show details
  } else {
    details.style.display = "none"; // Hide details
  }
}
