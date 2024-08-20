document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            window.location.href = targetId;
        });
    });

    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('show');
        });
    }

    // Carousel functionality
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const totalItems = items.length;
    let currentIndex = 0;
    const intervalTime = 5000; // Auto-slide interval time in milliseconds
    let autoSlideInterval;

    function showSlide(index) {
        // Calculate normalized index
        const normalizedIndex = (index + totalItems) % totalItems;
        carousel.style.transform = `translateX(-${normalizedIndex * 100}%)`;
        currentIndex = normalizedIndex;
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            showSlide(currentIndex + 1);
        }, intervalTime);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        showSlide(currentIndex - 1);
        startAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        showSlide(currentIndex + 1);
        startAutoSlide();
    });

    // Start the automatic sliding when the page loads
    startAutoSlide();
});
