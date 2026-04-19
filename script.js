// Custom Cursor Implementation
const cursorDot = document.querySelector('.cursor-dot');
const cursorGlow = document.querySelector('.cursor-glow');

// Update cursor position on mouse move
window.addEventListener('mousemove', (e) => {
    // We don't want custom cursor on mobile touch devices
    if(window.innerWidth > 768) {
        const posX = e.clientX;
        const posY = e.clientY;

        // Instant follow for dot
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Smooth follow for glow
        // Using requestAnimationFrame for better performance
        requestAnimationFrame(() => {
            cursorGlow.style.left = `${posX}px`;
            cursorGlow.style.top = `${posY}px`;
        });
    }
});

// Interactive hover effects for clickable elements
const interactables = document.querySelectorAll('a, button, .project-card, .skill-tags span');

interactables.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorGlow.style.width = '60px';
        cursorGlow.style.height = '60px';
        cursorGlow.style.backgroundColor = 'rgba(14, 165, 233, 0.2)'; // Neon blue hint
        cursorGlow.style.borderColor = 'rgba(14, 165, 233, 0.8)';
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursorGlow.style.width = '40px';
        cursorGlow.style.height = '40px';
        cursorGlow.style.backgroundColor = 'rgba(109, 40, 217, 0.1)';
        cursorGlow.style.borderColor = 'rgba(109, 40, 217, 0.5)';
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// Scroll Reveal Animations using Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Trigger when 15% of element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Stop observing once animated in
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Select all sections with the fade-in-section class
document.querySelectorAll('.fade-in-section').forEach((section) => {
    observer.observe(section);
});

// Navbar background blur on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 5, 5, 0.95)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(5, 5, 5, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});
