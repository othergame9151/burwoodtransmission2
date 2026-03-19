// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const isClickInsideNav = navToggle.contains(event.target) || navMenu.contains(event.target);
    if (!isClickInsideNav && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Header Sticky Shadow on Scroll
const header = document.getElementById('header');
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        header.style.boxShadow = '0 2px 16px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
    }
});

// Contact Form Handling with Web3Forms
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    // Form validation
    contactForm.addEventListener('submit', function(e) {
        // Client-side validation
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate required fields
        if (!name || !phone || !email || !message) {
            e.preventDefault();
            alert('Please fill in all required fields.');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            e.preventDefault();
            alert('Please enter a valid email address.');
            return;
        }

        // Validate phone format (basic Australian format)
        const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
        if (!phoneRegex.test(phone)) {
            e.preventDefault();
            alert('Please enter a valid phone number.');
            return;
        }

        // Validate hCaptcha
        const hcaptchaResponse = document.querySelector('[name="h-captcha-response"]').value;
        if (!hcaptchaResponse) {
            e.preventDefault();
            alert('Please complete the CAPTCHA.');
            return;
        }
    });
}

// hCaptcha Callback
function onLoadCallback() {
    console.log('hCaptcha script loaded');
}

// Handle hCaptcha Response
function handleCaptchaResponse(token) {
    document.getElementById('h-captcha-response').value = token;
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Lazy Load Images Intersection Observer
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.transition = 'opacity 0.3s ease';
            img.style.opacity = '1';
            observer.unobserve(img);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    img.style.opacity = '0.8';
    imageObserver.observe(img);
});

// Analytics and Tracking
function trackPhoneClick() {
    if (window.gtag) {
        gtag('event', 'phone_call', {
            'phone_number': '0405399973'
        });
    }
}

function trackFormSubmit() {
    if (window.gtag) {
        gtag('event', 'form_submit', {
            'event_category': 'engagement',
            'event_label': 'contact_form'
        });
    }
}

// Add tracking to phone links
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', trackPhoneClick);
});

// Add tracking to form submit
if (contactForm) {
    contactForm.addEventListener('submit', trackFormSubmit);
}

// Check if JavaScript is enabled and add class to body
document.documentElement.classList.add('js-enabled');

// Keyboard navigation for services
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            this.classList.add('focused');
        }
    });
});

// Performance: Defer non-critical images
if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver2.unobserve(img);
            }
        });
    });
    lazyImages.forEach(img => imageObserver2.observe(img));
}

console.log('Burwood Mechanics & Transmission - Website initialized');
