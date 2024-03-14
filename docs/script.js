document.addEventListener('DOMContentLoaded', function() {
    // Call to Action Button Click Event
    var ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.location.href = 'contact.html'; // Redirect to contact page
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', function() {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');

        // Burger Animation
        burger.classList.toggle('toggle');
    });
});