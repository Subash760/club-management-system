// JavaScript for the Club Management System
console.log("Club Management System Loaded");

// Add a simple click event
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        alert(`You clicked on ${link.textContent}`);
    });
});
// JavaScript animations and interactions
console.log("Club Management System Loaded 🚀");

// Smooth scrolling for nav links
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Section hover animation
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    section.addEventListener('mouseover', () => {
        section.style.transform = 'scale(1.05)';
        section.style.transition = 'transform 0.3s';
    });

    section.addEventListener('mouseout', () => {
        section.style.transform = 'scale(1)';
    });
});
