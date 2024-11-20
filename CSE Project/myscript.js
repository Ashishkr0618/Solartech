
// 1. Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Solar System Animation (Planets revolving around the sun)
document.addEventListener("DOMContentLoaded", function() {
    let planets = document.querySelectorAll('.mercury, .venus, .earth, .mars, .jupiter, .saturn, .uranus, .neptune, .pluto');
    
    // Set initial rotation values for each planet
    let rotationSpeeds = {
        mercury: 0.02,
        venus: 0.015,
        earth: 0.01,
        mars: 0.008,
        jupiter: 0.005,
        saturn: 0.003,
        uranus: 0.002,
        neptune: 0.001,
        pluto: 0.0005
    };

    function rotatePlanets() {
        planets.forEach(planet => {
            let planetClass = planet.classList[0];
            let speed = rotationSpeeds[planetClass];
            planet.style.transform = `rotate(${parseFloat(getComputedStyle(planet).transform.split(',')[4] || 0) + speed}deg)`;
        });

        requestAnimationFrame(rotatePlanets);
    }

    rotatePlanets();
});

// 3. Form Validation
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        event.preventDefault();
        alert("Please fill in all the fields.");
    }
});

// 4. Highlight sections on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 2) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

