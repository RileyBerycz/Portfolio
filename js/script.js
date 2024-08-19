document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            window.location.href = targetId;
        });
    });

    // New mobile menu toggle functionality
    hamburger.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });

    // Close mobile menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navUl.classList.remove('show');
        });
    });
});
