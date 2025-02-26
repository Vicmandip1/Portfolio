// Function to Toggle Mobile Menu
function toggleMenu() {
    const menu = document.querySelector(".nav-menu");
    const hamburger = document.querySelector(".hamburger");

    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
}

// Smooth Scrolling for Links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent instant jump

            const targetId = this.getAttribute("href").substring(1); // Get target section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust to align properly
                    behavior: "smooth"
                });
            }
        });
    });
});

// Sticky Navbar Effect on Scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});






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


document.addEventListener("DOMContentLoaded", function () {
    const scrollLink = document.querySelector(".hero-btn"); // Select the "View Projects" button

    scrollLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default jump

        const targetSection = document.querySelector("#project1"); // Target Project 1 section
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth", // Enables smooth scrolling
                block: "start" // Scrolls to the top of Project 1
            });
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
            <p>The Veteran Resume Analysis Page serves as the landing page of the Decision Support Dashboard, summarizing all the information related to the data available in the database.</p>
            <img src="assets/Images/BOTG Project/Experience Analysis.png" alt="Experience Analysis">
            <p>The Experience Analysis Page provides visuals of top applicants across different sectors, analyzing experience by state and the skills applicants possess. This helps answer business questions about the best applicants with specific experience levels by sector, state, and the skills they bring to the job.</p>
            <img src="assets/Images/BOTG Project/Applicant Profile.png" alt="Applicant Profile">
            <p>The Applicant Profile Dashboard simplifies the search for applicants, allowing employers to closely review selected applicant information. Searches can be conducted using the applicant's name or job title. This dashboard also provides the option for employers to initiate contact via email or phone with the selected applicants.</p>
            <img src="assets/Images/BOTG Project/Location Analysis.png" alt="Location Analysis">
            <p>The Location Analysis Dashboard utilizes ArcGIS to conduct a deeper analysis of applicant locations, identifying the cities and states where veterans, their families, and disabled applicants reside. Additionally, this dashboard helps visualize which cities or states have the most qualified applicants in specific sectors. This analysis enables employment-focused decision-making based on geographic insights and sector-specific applicant data.</p>
            <img src="assets/Images/BOTG Project/Resume Database.png" alt="Resume Database">
            <p>Resume Database Dashboard visualizes all the data in the database in a tabular format, allowing users to easily track applicants and their resume information. This page serves as a centralized view of the raw data, eliminating the need to return to the ATS to access the dataset.</p>
            <img src="assets/Images/BOTG Project/Backend view using dax function to segment data.jpg" alt="Experience Analysis">
            <p>This view showcases the DAX functions used for segmentation purposes.</p>
            /* <img src="%%" alt="TITTLE">
          //  <p>###</p>
           // <img src="%%" alt="TITTLE">
           // <p>###</p> */




        `
    },
    project2: {
        title: "Auto Insurance Analysis",
        image: "assets/Images/AutoInsurance Analysis/Landing Page.png",
        description: "Power BI dashboard analyzing sales trends, claims processing, and revenue growth in auto insurance.",
        details: `
            <p>Auto Insurance Analysis, this is an in-depth examination of various insurance metrics, including Insurance by Customer Type, Policy Type, Sales Channel, Vehicle Type, and Coverage. Using Excel and Power BI, the data was cleansed, transformed, and visualized to identify key patterns and trends. Advanced DAX functions were utilized for dynamic calculations, and KPIs were created to measure performance and provide actionable insights. Interactive dashboards were designed to enable stakeholders to make data-driven decisions, enhancing strategic planning and operational efficiency in the insurance sector.</p>
            <img src="assets/Images/AutoInsurance Analysis/Insurance by Sales Channel.png" alt="Insurance by Sales Channel">
            <p><b>Insurance by Sales Channel</b>: This dashboard provides a detailed analysis of the various sales channels, including Agents, Branches, Call Centers, and Web platforms. It showcases the total number of customers within each channel, revenue generated, policies sold by channel across each quarter, and the volume of claims processed through each channel. By delivering a clear comparison of performance metrics, this dashboard enables stakeholders to identify high-performing channels and determine which channels may require enhanced marketing strategies or operational improvements for increased profitability.</p>
            <img src="assets/Images/AutoInsurance Analysis/Insurance by Customer type.png" alt="Insurance by Customer type">
            <p><b>Insurance by Customer Type</b>: This section explores the distribution of customers across different locations, including Suburban, Rural, and Urban areas. It provides insights into the total income generated by each customer type and the sum of policies sold by coverage each year. This analysis empowers stakeholders to identify where the highest policy revenues are coming from, enabling more strategic decision-making.</p>
            <img src="assets/Images/AutoInsurance Analysis/Insurance by coverage.png" alt="Insurance by coverage">
            <p><b>Insurance by Coverage</b>: This dashboard provides a comprehensive overview of the three coverage types: Extended, Basic, and Premium. It visualizes the number of customers per coverage type, income generated by each, policies sold by coverage type each month, and average claims by coverage across both year and month. By presenting these insights, it helps stakeholders understand customer preferences, identify high-revenue coverage types, and assess claim patterns. This enables data-driven decisions on pricing strategies, targeted marketing, and resource allocation, ultimately optimizing profitability and customer satisfaction.</p>
            <img src="assets/Images/AutoInsurance Analysis/Insurance by Policy Type.png" alt="Insurance by Policy Type">
            <p><b>Insurance by Policy Type</b>: This dashboard provides an in-depth analysis of the three policy types: Corporate, Personal, and Special Auto Policy. It displays the total number of customers for each policy type, revenue generated, total policies sold quarterly, and average claims across both year and month. By showcasing these key metrics, the dashboard enables stakeholders to understand customer distribution and revenue contributions by policy type. It also highlights seasonal trends in policy sales and claims, helping to optimize marketing strategies, manage risk, and improve product offerings tailored to customer needs.</p>
            <img src="assets/Images/AutoInsurance Analysis/Insurance by Vehicle Type.png" alt="Insurance by Vehicle Type">
            <p><b>Insurance by Vehicle Type</b>: This dashboard categorizes vehicles into Mid-Size, Small, and Large types, analyzing total policies, revenue by date, and the geographical distribution of these vehicle categories. By organizing the data in this manner, stakeholders can easily identify which vehicle types generate the most revenue and understand regional demand patterns. This insight allows for more targeted marketing strategies, better inventory management, and optimized policy pricing tailored to customer preferences and regional trends, ultimately enhancing profitability and customer satisfaction.</p>
            <img src="assets/Images/AutoInsurance Analysis/Auto Insurance Raw Data.jpg" alt="Auto Insurance Raw Data">
            <p>Above is a snapshot of the dataset used for this analysis. The data was sourced from 
            <a href="https://www.kaggle.com/code/madhushreesannigrahi/jenks-natural-breaks-and-k-means-clustering/data" target="_blank" style="color: #ffcc00; font-weight: bold;">Kaggle.</a></p>
            
        `
    },
    project3: {
        title: "COVID-19 Mapping",
        image: "assets/Images/Covid-19-Global-Mapping/Screenshot 2025-02-17 204537.jpg",
        description: "ArcGIS-based pandemic impact visualization with real-time data tracking.",
        details: `
        <p>This project uses ArcGIS to visually analyze and map the global impact of the COVID-19 pandemic, highlighting key statistics like confirmed cases and deaths across various countries, with a focus on the United States, India, Brazil, Mexico, Russia, the United Kingdom, and Canada. By integrating real-time data, the project showcases how different public health measures, including mask mandates, social distancing, and vaccination campaigns, influenced the spread and severity of the virus. The interactive maps provide a clear representation of infection trends over time, offering insights into how geography and healthcare strategies shaped the pandemic’s outcomes worldwide.</p>
        <embed src="assets/Images/Covid-19-Global-Mapping/Mapping Covid-19.pdf" type="application/pdf" width="100%" height="500px">
             
        `
    },
    project4: {
        title: "Healthy Lifestyle Dashboard",
        image: "assets/Images/Healthy living Figma'/Figma Healthy Lifestyle.jpg",
        description: "Figma-based health tracker for step counting, heart rate monitoring, and user-centered goal setting.",
        details: `
            <p>This project used a User-Centered Design approach to create a personalized health dashboard. Through user research and feedback, a dashboard was developed to help the user track daily steps, set walking goals, monitor sleep, and heart rate. The design prioritizes usability and personalization to promote healthier habits and well-being.</p>
            <embed src="assets/Images/Healthy living Figma'/UCD Participant Workbook.pdf" type="application/pdf" width="100%" height="500px">
            <p>The Participant Workbook documents the research process, including user interview questions and responses, wireframe sketches, and usability test details. It highlights the user's goals and challenges, providing insights into the design decisions made for the health dashboard. The workbook serves as a foundation for the iterative design process, ensuring the final product aligns with the user's needs and preferences.</p>
            <img src="assets/Images/Healthy living Figma'/WIRE FRAMEWORK.jpg" alt="WIRE FRAMEWORK">
            <p>The Sketch above represents the wireframe design of the dashboard, illustrating the layout and structure of key features based on user feedback. It serves as a visual blueprint that guided the development of the final product, showcasing elements such as step tracking, health reminders, and user settings. The sketch allows for a clear understanding of how the dashboard would function before moving into the prototyping phase, ensuring the design meets the user's needs.</p>
            <img src="assets/Images/Healthy living Figma'/Figma Healthy Lifestyle.jpg" alt="Healthy Lifestyle">
            <p>The Health and Wellness Dashboard is an interactive tool designed to help individuals track and manage their health by providing real-time insights into key metrics such as steps, heart rate, sleep condition, blood pressure, weight, and height. It features an event tracker and calendar to keep users organized with reminders for health-related events, workouts, and appointments. The dashboard allows users to monitor their progress with personalized goals and offers data-driven insights that help identify trends and inform lifestyle decisions. It also includes a heart rate monitor, step tracker, blood pressure tracker, and sleep condition tracker, all presented in an easy-to-use, visually engaging interface. The dashboard promotes motivation through reminders, daily health quotes, and progress tracking, offering a comprehensive view of one's health journey. It helps users stay accountable, improve their fitness levels, and maintain a balanced lifestyle by consolidating various health parameters in one place, ensuring they stay on top of their wellness goals.</p>
        `
    },
    project5: {
        title: "Car Dealership Sales Analysis",
        description: "Analyzing Electric Vehicle (EV) sales trends and market performance.",
        image: "assets/Images/Car Dealership  Sales Analysis/Trend of Electric Vehicle Sales.jpg",
        details: `
        <p>The Trend of Electric Vehicle Sales visualization highlights the sales performance of two main types of electric vehicles Battery Electric Vehicles (BEVs) and Plug-in Hybrid Electric Vehicles (PHEVs) from 2018 to 2022. This visualization shows a clear upward trend in sales, with a significant spike in BEV sales in 2022. The data illustrates the growing preference for fully electric vehicles, showcasing how the market is shifting towards BEVs as a more sustainable and popular option. The spike in 2022 reflects both the increasing adoption of electric vehicles and the impact of global efforts to transition to cleaner transportation options.</p>
        <img src="assets/Images/Car Dealership  Sales Analysis/Top 10 Vehicle Sold.jpg" alt="EV Sales Trends">
        <p>In the deeper analysis of Electric Vehicle Sales in 2022, a closer look at the top 10 electric vehicles reveals that the BMW X5 emerged as the top-selling electric vehicle, with a total of 71 units sold. This insight highlights the popularity of the X5 among consumers, showcasing its strong market demand. By focusing on the top sellers, we can understand consumer preferences, identify the best-performing models, and potentially predict future sales trends. The X5's dominance in 2022 sales suggests it’s a key player in the electric vehicle market, setting a benchmark for other models to follow.</p>
        `
    },
    project6: {
        title: "Paris 2024 Olympic Analysis",
        image: "assets/Images/Paris 2024/front Page  image.png",
        description: "Tableau dashboard analyzing athlete participation in the 2024 Olympics.",
        details: `
        <p>For this project, I used Tableau to analyze the 2024 Olympic Games data, focusing on athlete participation, gender distribution, and country contributions. The analysis revealed 11,110 athletes from 206 countries, with a near-equal gender split of 5,655 male and 5,455 female athletes. The United States led with 619 athletes, contributing 5.572% of the total. Sports like Equestrian, 3x3 Basketball, and Triathlon showcased gender balance, while Athletics had a slight male skew. The project highlighted the progress toward gender parity in sports and showcased the diversity and inclusivity of the Games through insightful Tableau visualizations.</p>
        <img src="assets/Images/Paris 2024/Screenshot 2025-02-21 185843.png" alt="Olympic Analysis">
        <p>The visualization below displays the age distribution and gender balance of athletes across different sports in the 2024 Olympic Games. It highlights sports with strong gender equality, such as Equestrian, 3x3 Basketball, and Triathlon, while also showing a slight gender imbalance in sports like Athletics. This analysis offers insights into the trends of athlete participation by age and gender and underscores the progress toward achieving gender parity in the Olympics.</p>
        <img src="assets/Images/Paris 2024/Screenshot 2025-02-21 185954.png" alt="Experience Analysis">
        `
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
