/* ============================================
   THRIVE ISLAND COUNTY - MAIN SCRIPT
   ============================================ */

// ============================================
// NAVIGATION FUNCTIONALITY
// ============================================

const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileNav = document.getElementById('mobileNav');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

// Close mobile menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        updateActiveNav(link.getAttribute('href'));
    });
});

// Update active navigation
function updateActiveNav(href) {
    navLinks.forEach(link => {
        if (link.getAttribute('href') === href) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================

const searchInput = document.getElementById('searchInput');
const locationSelect = document.getElementById('locationSelect');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const query = searchInput.value.trim();
    const location = locationSelect.value;

    if (query === '') {
        alert('Please enter a search query');
        return;
    }

    console.log('Searching for:', query, 'in', location);
    // In a real application, this would navigate to a search results page
    // or filter results dynamically
    alert(`Searching for "${query}" in ${location}...`);
}

// ============================================
// CATEGORY CARDS INTERACTION
// ============================================

const categoryCards = document.querySelectorAll('.category-card');

categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        console.log('Category clicked:', category);
        // In a real application, this would navigate to category page
        alert(`Viewing ${card.querySelector('h3').textContent} resources...`);
    });
});

// ============================================
// POPULAR SEARCH TAGS
// ============================================

const popularTags = document.querySelectorAll('.popular-tag');

popularTags.forEach(tag => {
    tag.addEventListener('click', () => {
        searchInput.value = tag.textContent;
        performSearch();
    });
});

// ============================================
// RESOURCE CARD INTERACTIONS
// ============================================

const resourceCards = document.querySelectorAll('.resource-card');

resourceCards.forEach(card => {
    const moreInfoBtn = card.querySelector('.btn-primary');
    const websiteBtn = card.querySelector('.btn-outline');

    if (moreInfoBtn) {
        moreInfoBtn.addEventListener('click', () => {
            const resourceName = card.querySelector('h3').textContent;
            alert(`More information about ${resourceName}`);
        });
    }

    if (websiteBtn) {
        websiteBtn.addEventListener('click', () => {
            alert('Visiting website...');
        });
    }
});

// ============================================
// BUTTONS INTERACTION
// ============================================

const ctaButton = document.querySelector('.cta-text .btn-secondary');
const viewAllBtn = document.querySelector('.section-cta .btn-outline');

if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        alert('Getting started with Thrive Island County...');
    });
}

if (viewAllBtn) {
    viewAllBtn.addEventListener('click', () => {
        alert('Viewing all categories...');
    });
}

// ============================================
// MOBILE BOTTOM NAVIGATION
// ============================================

const bottomNavItems = document.querySelectorAll('.bottom-nav-item');

bottomNavItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        bottomNavItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});

// ============================================
// LANGUAGE SELECTOR
// ============================================

const langBtn = document.getElementById('langBtn');

langBtn.addEventListener('click', () => {
    alert('Language selection: Currently English. Spanish translation coming soon!');
});

// ============================================
// SMOOTH SCROLL BEHAVIOR
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Thrive Island County Platform Loaded');
    
    // Set initial active nav based on current section
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Log page analytics (placeholder)
function logPageView(page) {
    console.log('Page view:', page);
}

// Format phone numbers
function formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
}

// Validate email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ============================================
// ERROR HANDLING
// ============================================

window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

// ============================================
// PERFORMANCE MONITORING
// ============================================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time:', pageLoadTime, 'ms');
    });
}
