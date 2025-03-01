function openModal(imageSrc) {
    document.getElementById("cert-preview").src = imageSrc;
    document.getElementById("cert-modal").classList.add("show");
}

function closeModal() {
    document.getElementById("cert-modal").classList.remove("show");
}
