document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio Loaded!");
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

AOS.init();
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Message sent! (This is a placeholder, integrate a backend later.)");
});
