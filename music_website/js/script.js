/* filepath: /Users/mac/Documents/ycy/mylove/YCY-Gui/music_website/js/script.js */
document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slides img');
    const totalSlides = slides.length;

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = (index === slideIndex) ? 'block' : 'none';
        });
        slideIndex = (slideIndex + 1) % totalSlides;
    }

    setInterval(showSlides, 3000);
});