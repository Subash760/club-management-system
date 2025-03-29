// JavaScript for the Club Management System
console.log("Club Management System Loaded");

// Add a simple click event
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        alert(`You clicked on ${link.textContent}`);
    });
});
