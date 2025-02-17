document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio Loaded!");
});

//smooth animation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

AOS.init();

//contact submit operation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Message sent! (This is a placeholder, integrate a backend later.)");
});


// Toggle dark/light mode
const themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        themeToggleButton.textContent = "🌙";  // Moon for dark mode
    } else {
        themeToggleButton.textContent = "🌞";  // Sun for light mode
    }
});
    