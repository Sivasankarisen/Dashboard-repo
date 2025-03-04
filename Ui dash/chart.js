document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("gaugeChart").getContext("2d");
    
    const gaugeChart = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Usage", "Remaining"],
            datasets: [{
                data: [70, 30], // Example: 70% CPU usage
                backgroundColor: ["#ff3d00", "#44475a"],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: "80%",
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            }
        }
    });
    
    // Function to update the chart dynamically
    function updateGauge(value) {
        gaugeChart.data.datasets[0].data = [value, 100 - value];
        gaugeChart.update();
    }
    
    // Simulating CPU usage updates
    setInterval(() => {
        const newValue = Math.floor(Math.random() * 100);
        updateGauge(newValue);
    }, 3000);
});
