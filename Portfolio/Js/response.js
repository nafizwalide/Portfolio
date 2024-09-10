// <!-- JavaScript for Mobile Menu -->
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
  document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// My Skill animation using Js
    // Get the canvas element
    const ctx = document.getElementById('skillsChart').getContext('2d');

    // Create the chart
    const skillsChart = new Chart(ctx, {
        type: 'radar', // Radar chart for unique visual representation
        data: {
            labels: ['JavaScript', 'Python', 'React.js', 'Node.js', 'CSS/HTML', 'Django', 'SQL', 'Git'],
            datasets: [{
                label: 'Skill Level',
                data: [90, 85, 80, 75, 95, 70, 65, 80], // Percentage values for skill levels
                backgroundColor: 'rgba(37, 99, 235, 0.2)', // Tailwind blue with transparency
                borderColor: 'rgba(37, 99, 235, 1)', // Tailwind blue
                borderWidth: 2,
                pointBackgroundColor: 'rgba(37, 99, 235, 1)',
                pointBorderColor: '#fff',
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(37, 99, 235, 1)',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                legend: {
                    display: true // Hide legend for a cleaner look
                }
            },
            animation: {
                duration: 2000, // Animation duration in milliseconds
                easing: 'easeInOutQuad' // Smooth easing effect
            }
        }
    });

