document.addEventListener('DOMContentLoaded', function() {
    // Hide loader after animation
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
    }, 2500);

    // Navigation scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Dropdown functionality - hover based
    const navDropdown = document.querySelector('.nav-dropdown');
    const productsBtn = document.getElementById('productsBtn');
    const productsMenu = document.getElementById('productsMenu');
    
    if (navDropdown && productsMenu) {
        navDropdown.addEventListener('mouseenter', function() {
            productsMenu.style.display = 'block';
            if (productsBtn) {
                productsBtn.setAttribute('aria-expanded', 'true');
            }
        });
        
        navDropdown.addEventListener('mouseleave', function() {
            productsMenu.style.display = 'none';
            if (productsBtn) {
                productsBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Search bar functionality
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            searchInput.classList.toggle('active');
            if (searchInput.classList.contains('active')) {
                searchInput.focus();
            }
        });
        
        // Close search when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.nav-search')) {
                searchInput.classList.remove('active');
            }
        });
    }

    // Active link management
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!this.classList.contains('dropdown-trigger')) {
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});