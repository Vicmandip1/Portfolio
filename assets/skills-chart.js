document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('skillsChart').getContext('2d');

    const skillsChart = new Chart(ctx, {
        type: 'doughnut', // ✅ Doughnut Chart
        data: {
            labels: ['SQL', 'Python', 'Power BI', 'Tableau', 'Azure', 'Cloud Computing'],
            datasets: [{
                data: [25, 20, 18, 15, 12, 10], // ✅ Adjust values based on expertise level
                backgroundColor: ['#ffcc00', '#ff9900', '#007bff', '#6610f2', '#17a2b8', '#28a745'],
                hoverOffset: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#333',
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                        }
                    }
                }
            }
        }
    });
});
