// Function to Toggle Project Details (Old Functionality)
function toggleDetails(detailId) {
    var details = document.getElementById(detailId);
    var button = event.target;

    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block"; // Show details
        button.textContent = "See Less"; // Change button text to "See Less"
    } else {
        details.style.display = "none"; // Hide details
        button.textContent = "View Details"; // Change button text back
    }
}

// Function to Hide Project Details
function hideDetails(id) {
    const details = document.getElementById(id);
    const button = details.previousElementSibling; // Get the button element

    details.style.display = "none"; // Hide the Details
    button.textContent = "View Details"; // Change the button text back
}

// Function for Mobile Menu Toggle
function myFunction(x) {
    x.classList.toggle("change");
}

// Navigation: Set Active Class on Click
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(item => item.classList.remove('active')); // Remove active from all
        this.classList.add('active'); // Add active class to clicked link
    });
});

// Navigation: Retain Active Class on Page Load
window.addEventListener('load', function() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    links.forEach(link => {
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('active');
        }
    });
});

// 🔥 Full-Screen Project Modal Functionality (New Feature)
const projects = {
    project1: {
        title: "Equitable Recruitment Analysis",
        image: "assets/Images/BOTG Project/Landing Page.png",
        description: "Leveraging SQL, Python, and Power BI for data-driven recruitment strategies.",
        details: `
            <p>Developed advanced data visualization for equitable hiring, focusing on veterans, spouses, and disabled applicants. Integrated SQL and Python with Power BI to create an interactive, real-time analytics dashboard.</p>
            <img src="assets/Images/BOTG Project/Experience Analysis.png" alt="Experience Analysis">
        `
    },
    project2: {
        title: "Auto Insurance Analysis",
        image: "assets/Images/AutoInsurance Analysis/Landing Page.png",
        description: "Power BI dashboard analyzing sales trends, claims processing, and revenue growth in auto insurance.",
        details: `
            <p>Built interactive dashboards in Power BI to visualize insurance claims, policy sales, and coverage effectiveness.</p>
            <img src="assets/Images/AutoInsurance Analysis/Insurance by Sales Channel.png" alt="Insurance by Sales Channel">
        `
    },
    project3: {
        title: "COVID-19 Mapping",
        image: "assets/Images/Covid-19-Global-Mapping/Mapping Covid-19.pdf",
        description: "ArcGIS-based pandemic impact visualization with real-time data tracking.",
        details: `
            <p>Designed an ArcGIS-powered dashboard to track COVID-19 case spikes, public health measures, and regional policy impacts.</p>
            <img src="assets/Images/Covid-19-Global-Mapping/Mapping Covid-19.pdf" alt="COVID-19 Data Mapping">
        `
    },
    project4: {
        title: "Healthy Lifestyle Dashboard",
        image: "assets/Images/Healthy living Figma'/Figma Healthy Lifestyle.jpg",
        description: "Figma-based health tracker for step counting, heart rate monitoring, and user-centered goal setting.",
        details: `
            <p>Developed a user-centered health dashboard with interactive tracking for physical activity, nutrition, and wellness goals.</p>
            <img src="assets/Images/Healthy living Figma'/WIRE FRAMEWORK.jpg" alt="Wireframe">
        `
    project5: {
        title: "Car Dealership Sales Analysis",
        image: "assets/Images/Car Dealership  Sales Analysis/Trend of Electric Vehicle Sales.jpg",
        description: "Analyzing Electric Vehicle (EV) sales trends and market performance.",
        details: `<img src="assets/Images/Car Dealership  Sales Analysis/Top 10 Vehicle Sold.jpg" alt="EV Sales Trends">`
    },
    project6: {
        title: "Paris 2024 Olympic Analysis",
        image: "assets/Images/Paris 2024/Screenshot 2025-02-21 185843.png",
        description: "Tableau dashboard analyzing athlete participation in the 2024 Olympics.",
        details: `<img src="assets/Images/Paris 2024/Screenshot 2025-02-21 185954.png" alt="Olympic Analysis">`
    }
};

// Function to Open Full-Screen Project Modal
function openProject(projectKey) {
    const modal = document.getElementById("project-modal");
    const projectDetails = document.getElementById("project-details");
    const project = projects[projectKey];

    if (project) {
        projectDetails.innerHTML = `
            <h2>${project.title}</h2>
            <img src="${project.image}" alt="${project.title}">
            <p>${project.description}</p>
            ${project.details}
        `;
        modal.classList.add("show");
    }
}

// Function to Close Full-Screen Project Modal
function closeProject() {
    document.getElementById("project-modal").classList.remove("show");
}
