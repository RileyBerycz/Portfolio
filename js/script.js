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
     const hamburger = document.querySelector('.hamburger');
     const nav = document.querySelector('nav ul');
     document.querySelector('.hamburger').addEventListener('click', () => {
        const menu = document.querySelector('nav ul');
        menu.classList.toggle('show');
    });

// Carousel functionality
const carousel = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;
const intervalTime = 3000; // Change slide every 3 seconds
let autoSlideInterval;

function showSlide(index) {
    if (index < 0) {
        currentIndex = items.length - 1;
    } else if (index >= items.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
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
