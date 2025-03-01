let currentIndex = 0;
let imagesArray = [];

// ✅ Open Modal for Single Image Certificates
function openModal(imageSrc) {
    imagesArray = [imageSrc]; // Store only one image
    currentIndex = 0;

    document.getElementById("cert-title").innerText = "";
    document.getElementById("cert-preview").src = imagesArray[currentIndex];
    document.getElementById("cert-modal").classList.add("show");

    // Hide navigation buttons for single image
    document.getElementById("prev-btn").style.display = "none";
    document.getElementById("next-btn").style.display = "none";
}

// ✅ Open Modal with Multiple Images
function openMultiModal(images, certTitle) {
    imagesArray = images;
    currentIndex = 0;

    document.getElementById("cert-title").innerText = certTitle;
    document.getElementById("cert-preview").src = imagesArray[currentIndex];
    document.getElementById("cert-modal").classList.add("show");

    // Show navigation buttons if more than one image exists
    document.getElementById("prev-btn").style.display = imagesArray.length > 1 ? "block" : "none";
    document.getElementById("next-btn").style.display = imagesArray.length > 1 ? "block" : "none";
}

// ✅ Navigate Between Multiple Images
function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = imagesArray.length - 1;
    } else if (currentIndex >= imagesArray.length) {
        currentIndex = 0;
    }

    document.getElementById("cert-preview").src = imagesArray[currentIndex];
}

// ✅ Close Modal
function closeModal() {
    document.getElementById("cert-modal").classList.remove("show");
}

// ✅ Close Modal When Clicking Outside
window.onclick = function(event) {
    let modal = document.getElementById("cert-modal");
    if (event.target === modal) {
        closeModal();
    }
};
