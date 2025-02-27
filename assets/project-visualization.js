// ✅ Ensure the script runs only after DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // ✅ Get the canvas element for the chart
    const ctx = document.getElementById('projectChart').getContext('2d');

    // ✅ Sample Data: Number of hours spent on each project category
    const projectData = {
        labels: [
            "Business Intelligence",
            "Geospatial Analysis",
            "Data Engineering",
            "Predictive Analytics",
            "Cloud Computing"
        ],
        datasets: [{
            label: "Hours Invested",
            data: [180, 220, 160, 140, 120], // Replace with actual data
            backgroundColor: [
                "#FFCC00",
                "#FF9900",
                "#36A2EB",
                "#66BB6A",
                "#8A48F4"
            ],
            borderColor: "#ffffff",
            borderWidth: 2,
            hoverOffset: 8
        }]
    };

    // ✅ Create the Pie Chart
    new Chart(ctx, {
        type: 'pie', // You can also try 'doughnut'
        data: projectData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#333', // Adjust text color for visibility
                        font: {
                            size: 14
                        }
                    }
                }
            }
        }
    });

});
