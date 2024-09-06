document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            window.location.href = targetId;
        });
    });

    // Hamburger functionality
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('show');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('show');
        }
    });

    // Carousel functionality
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const carousel = carouselWrapper.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = carouselWrapper.querySelector('.prev');
    const nextBtn = carouselWrapper.querySelector('.next');
    let currentIndex = 0;
    const intervalTime = 10000; // Auto-slide interval time in milliseconds
    let autoSlideInterval;

    function cloneNodes() {
        items.forEach((item) => {
            const clone = item.cloneNode(true);
            carousel.appendChild(clone);
        });
        const firstClone = items[0].cloneNode(true);
        carousel.appendChild(firstClone);
        const lastClone = items[items.length - 1].cloneNode(true);
        carousel.insertBefore(lastClone, carousel.firstChild);
    }

    function setInitialPosition() {
        carousel.style.transform = `translateX(-${100 * (items.length + 1)}%)`;
    }

    function showSlide(direction) {
        currentIndex += direction;
        carousel.style.transition = 'transform 0.5s ease';
        carousel.style.transform = `translateX(-${(currentIndex + items.length + 1) * 100}%)`;

        if (direction === 1 && currentIndex === items.length) {
            setTimeout(() => {
                carousel.style.transition = 'none';
                currentIndex = 0;
                carousel.style.transform = `translateX(-${(items.length + 1) * 100}%)`;
            }, 500);
        } else if (direction === -1 && currentIndex === -1) {
            setTimeout(() => {
                carousel.style.transition = 'none';
                currentIndex = items.length - 1;
                carousel.style.transform = `translateX(-${(items.length * 2) * 100}%)`;
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
