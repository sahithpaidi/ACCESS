document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelector('.carousel-images');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const imageCount = document.querySelectorAll('.carousel-images img').length;
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= imageCount) currentIndex = 0;
        else if (index < 0) currentIndex = imageCount - 1;
        else currentIndex = index;
        images.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    // Optional: Auto-slide every 5 seconds
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);
});
