// Open the certificate modal and display the selected certificate
function openCertificate(imageSrc) {
    document.getElementById("certificateImage").src = imageSrc;
    document.getElementById("certificateModal").style.display = "flex";
}

// Close the certificate modal
function closeCertificate() {
    document.getElementById("certificateModal").style.display = "none";
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    let modal = document.getElementById("certificateModal");
    if (event.target === modal) {
        closeCertificate();
    }
};
