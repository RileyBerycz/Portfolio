document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            window.location.href = targetId;
        });
    });

    // Mobile menu
    hamburger.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });

    // Close mobile menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navUl.classList.remove('show');
        });
    });

    // Project Carousel
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.carousel-arrow.prev');
    const nextButton = document.querySelector('.carousel-arrow.next');
    const timer = document.querySelector('.carousel-timer');
    
    const projects = [
        { title: 'Project 1', image: 'path/to/project1-image.jpg', description: 'Description for Project 1' },
        { title: 'Project 2', image: 'path/to/project2-image.jpg', description: 'Description for Project 2' },
        { title: 'Project 3', image: 'path/to/project3-image.jpg', description: 'Description for Project 3' },
        // Add more projects as needed
    ];

    let currentIndex = 0;
    const intervalTime = 5000; // 5 seconds
    let slideInterval;

    // Create carousel slides
    projects.forEach(project => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        carouselContainer.appendChild(slide);
    });

    function nextSlide() {
        currentIndex = (currentIndex + 1) % projects.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        updateCarousel();
    }

    function updateCarousel() {
        carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        resetTimer();
    }

    function resetTimer() {
        timer.style.width = '0%';
        clearInterval(slideInterval);
        timer.style.transition = 'none';
        setTimeout(() => {
            timer.style.transition = 'width 5s linear';
            timer.style.width = '100%';
        }, 10);
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    nextButton.addEventListener('click', () => {
        nextSlide();
        resetTimer();
    });

    prevButton.addEventListener('click', () => {
        prevSlide();
        resetTimer();
    });

    // Initialize carousel
    resetTimer();
});

