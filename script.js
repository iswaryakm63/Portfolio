// Select all sections and cards for animation
const elements = document.querySelectorAll(
    ".section, .card, .skill-card, .project-card"
);

// Add the reveal class
elements.forEach(function(element) {
    element.classList.add("reveal");
});

// Observe elements when they enter the screen
const observer = new IntersectionObserver(
    function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

// Start observing each element
elements.forEach(function(element) {
    observer.observe(element);
});

// Display a welcome message in the browser console
console.log("Welcome to My Personal Portfolio!");
