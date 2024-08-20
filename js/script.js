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
    const progressBar = document.querySelector('.progress-bar');
    let currentIndex = 0;
    const intervalTime = 10000; // Auto-slide interval time in milliseconds
    let autoSlideInterval;

    function cloneNodes() {
        items.forEach((item) => {
            const clone = item.cloneNode(true);
            carousel.appendChild(clone);
        });
    }

    function setInitialPosition() {
        carousel.style.transform = `translateX(-${100 * items.length}%)`;
    }

    function showSlide(direction) {
        currentIndex += direction;
        carousel.style.transition = 'transform 0.5s ease';
        carousel.style.transform = `translateX(-${(currentIndex + items.length) * 100}%)`;

        if (direction === 1 && currentIndex === items.length) {
            setTimeout(() => {
                carousel.style.transition = 'none';
                currentIndex = 0;
                carousel.style.transform = `translateX(-${items.length * 100}%)`;
            }, 500);
        } else if (direction === -1 && currentIndex === -items.length) {
            setTimeout(() => {
                carousel.style.transition = 'none';
                currentIndex = 0;
                carousel.style.transform = `translateX(-${items.length * 100}%)`;
            }, 500);
        }
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            showSlide(1);
        }, intervalTime);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function handleSlideChange(direction) {
        stopAutoSlide();
        showSlide(direction);
        startAutoSlide();
    }

    prevBtn.addEventListener('click', () => handleSlideChange(-1));
    nextBtn.addEventListener('click', () => handleSlideChange(1));

    cloneNodes();
    setInitialPosition();
    startAutoSlide();


});
