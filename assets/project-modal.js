document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("project-modal");
    const modalContent = document.getElementById("project-details");
    const closeModalBtns = document.querySelectorAll(".close-btn, .close-btn-bottom");

    // ✅ Function to Open Modal
    function openProject(projectId) {
        const projectDetails = {
            "project1": {
                title: "Equitable Recruitment Analysis",
                description: "Leveraging SQL, Python, and Power BI for data-driven recruitment strategies.",
                image: "assets/Images/BOTG Project/Landing Page.png"
            },
            "project2": {
                title: "Auto Insurance Analysis",
                description: "Interactive dashboards in Power BI for sales and claims insights.",
                image: "assets/Images/AutoInsurance Analysis/Landing Page.png"
            },
            "project3": {
                title: "COVID-19 Mapping",
                description: "ArcGIS-based storytelling for pandemic impact visualization.",
                image: "assets/Images/Covid-19-Global-Mapping/Screenshot 2025-02-17 204537.jpg"
            },
            "project4": {
                title: "Healthy Lifestyle Dashboard",
                description: "Figma-designed health tracker based on user-centered research.",
                image: "assets/Images/Healthy living Figma'/Figma Healthy Lifestyle.jpg"
            },
            "project5": {
                title: "Car Dealership Sales Analysis",
                description: "Analyzing Electric Vehicle sales trends and market performance.",
                image: "assets/Images/Car Dealership Sales Analysis/Trend of Electric Vehicle Sales.jpg"
            },
            "project6": {
                title: "Paris 2024 Olympic Analysis",
                description: "Tableau dashboard showcasing athlete participation and gender insights.",
                image: "assets/Images/Paris 2024/front Page image.png"
            }
        };

        if (projectDetails[projectId]) {
            const project = projectDetails[projectId];
            modalContent.innerHTML = `
                <h2>${project.title}</h2>
                <img src="${project.image}" alt="${project.title}">
                <p>${project.description}</p>
            `;
            modal.classList.add("show");
        }
    }

    // ✅ Function to Close Modal
    function closeProject() {
        modal.classList.remove("show");
    }

    // ✅ Attach event listeners to close buttons
    closeModalBtns.forEach(btn => btn.addEventListener("click", closeProject));

    // ✅ Attach function to window object for inline `onclick` calls
    window.openProject = openProject;
    window.closeProject = closeProject;
});
