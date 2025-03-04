document.addEventListener("DOMContentLoaded", () => {
    // Initialize Charts with Animation
    const createChart = (ctx, label, data, color) => {
        return new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: label,
                    data: data,
                    borderColor: color,
                    backgroundColor: color.replace('1)', '0.2)'),
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 2000,
                    easing: 'easeInOutQuart'
                },
                scales: {
                    x: { grid: { color: '#44475a' } },
                    y: { grid: { color: '#44475a' } }
                },
                plugins: {
                    legend: { labels: { color: '#fff' } }
                }
            }
        });
    };

    createChart(document.getElementById("cpuUsage"), "CPU Usage", [20, 35, 50, 30, 60, 75], 'rgba(80, 250, 123, 1)');
    createChart(document.getElementById("memoryUsage"), "Memory Usage", [15, 25, 45, 40, 55, 70], 'rgba(255, 99, 132, 1)');
    createChart(document.getElementById("diskUsage"), "Disk Usage", [30, 50, 65, 55, 75, 85], 'rgba(54, 162, 235, 1)');
    createChart(document.getElementById("networkTraffic"), "Network Traffic", [10, 20, 30, 25, 40, 55], 'rgba(255, 206, 86, 1)');
    createChart(document.getElementById("uptimeChart"), "Uptime", [99, 98, 97, 96, 95, 94], 'rgba(153, 102, 255, 1)');

    // Chat Functionality with Fade-in Animation
    const chatBox = document.getElementById("chat-box");
    const chatInput = document.getElementById("chat-input");
    const sendBtn = document.getElementById("send-btn");

    const appendMessage = (message, sender) => {
        const newMessage = document.createElement("p");
        newMessage.textContent = `${sender}: ${message}`;
        newMessage.classList.add(sender === 'You' ? 'user-message' : 'bot-message', 'fade-in');
        chatBox.appendChild(newMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    };

    sendBtn.addEventListener("click", () => {
        const message = chatInput.value.trim();
        if (message) {
            appendMessage(message, 'You');
            chatInput.value = "";
            setTimeout(() => appendMessage("This is an automated response.", "Bot"), 1000);
        }
    });

    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendBtn.click();
        }
    });

    // Tab Switching with Smooth Transition
    document.querySelectorAll(".tab").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
            button.classList.add("active");
            button.classList.add("tab-animation");
            setTimeout(() => button.classList.remove("tab-animation"), 500);
            alert(`Switched to ${button.textContent}`);
        });
    });
});
