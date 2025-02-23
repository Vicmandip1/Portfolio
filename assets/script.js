function toggleDetails(id) {
  console.log("Toggle button clicked for: " + id); // Debugging line
  const details = document.getElementById(id);
  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
