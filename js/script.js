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

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// Optional: prevent the page from scrolling back to top
document.addEventListener('click', (event) => {
    if (event.target.closest('.carousel-button')) {
        event.preventDefault();
    }
});
});
