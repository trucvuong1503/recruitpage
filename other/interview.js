document.addEventListener('DOMContentLoaded', (event) => {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
  
    // Counter
    let counter = 1;
    const size = carouselImages[0].clientWidth;
  
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  
    let slideInterval;  // global variable to hold the interval ID

    function startSlide() {
        slideInterval = setInterval(() => {
            if (counter >= carouselImages.length - 1) counter = 0;
            carouselSlide.style.transition = "transform 1s ease-in-out";
            counter++;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }, 1300);  // Change image every 1.4 seconds
    }
    
    function stopSlide() {
        clearInterval(slideInterval);
    }

    // Start the carousel sliding when the page loads
    startSlide();
  
    carouselSlide.addEventListener('transitionend', () => {
        if (carouselImages[counter].id === 'lastClone') {
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - 2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    })

    carouselImages.forEach(img => {
        img.addEventListener('mouseover', stopSlide);
        img.addEventListener('mouseout', startSlide);
    });
});
