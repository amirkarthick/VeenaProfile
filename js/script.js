// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            if (window.innerWidth <= 768) {
                navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
                hamburger.classList.toggle('active');
            }
        });
    }

    // Close menu when a link is clicked (mobile only)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768 && navMenu) {
                navMenu.style.display = 'none';
                if (hamburger) hamburger.classList.remove('active');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Store reference to form for clearing after redirect
            const form = this;
            
            // Set a timeout to clear the form after a short delay
            // This gives Formspree time to process before we clear
            setTimeout(function() {
                form.reset();
                // Also clear any cached values
                const inputs = form.querySelectorAll('input, textarea');
                inputs.forEach(input => {
                    input.value = '';
                });
            }, 500);
            
            console.log('Form submitted to Formspree');
        });
        
        // Also clear form on page load (in case user comes back)
        window.addEventListener('pageshow', function(event) {
            if (event.persisted) {
                contactForm.reset();
                const inputs = contactForm.querySelectorAll('input, textarea');
                inputs.forEach(input => {
                    input.value = '';
                });
            }
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe skill cards and project cards
    document.querySelectorAll('.skill-card, .project-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease';
        observer.observe(el);
    });

    // Add scroll animations to nav
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        lastScroll = window.scrollY;
        
        if (navbar) {
            if (lastScroll > 50) {
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            } else {
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        }
    });
});

// Optional: Function to send form data to backend
/*
function sendFormToBackend(name, email, message) {
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
*/

// Responsive menu styling
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            position: absolute;
            top: 60px;
            left: 0;
            right: 0;
            background-color: white;
            flex-direction: column;
            gap: 0;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            display: none !important;
        }

        .nav-menu li {
            padding: 15px 20px;
            border-bottom: 1px solid #e0e0e0;
        }

        .nav-menu li:last-child {
            border-bottom: none;
        }

        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(8px, 8px);
        }

        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
        }
    }
`;
document.head.appendChild(style);
