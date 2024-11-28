// Hero Section Slider
const heroSlider = document.querySelector('.hero-slider');
const heroSlides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;
setInterval(() => {
    heroSlides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % heroSlides.length;
    heroSlides[currentSlide].classList.add('active');
}, 5000);

// Article Read More Toggle
const readMoreToggles = document.querySelectorAll('.read-more-toggle');
readMoreToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        const article = toggle.parentNode;
        article.classList.toggle('expanded');
    });
});

// Featured Articles Slider
const featuredSlider = document.querySelector('.featured-slider');
const featuredSlides = document.querySelectorAll('.featured-slide');
let currentFeaturedSlide = 0;
setInterval(() => {
    featuredSlides[currentFeaturedSlide].classList.remove('active');
    currentFeaturedSlide = (currentFeaturedSlide + 1) % featuredSlides.length;
    featuredSlides[currentFeaturedSlide].classList.add('active');
}, 5000);

// Scroll to Top  Button
const scrollToTopButton = document.querySelector('scroll-to-top');
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behaviour: 'smooth' });
});

// Animate on Scroll
const aosElements = document.querySelectorAll('[data-aos]');
window.addEventListener('scroll', () => {
    aosElements.forEach((element) => {
        const aosOffset = element.getAttribute('data-aos-offset');
        const elementTop = element.offsetTop;
        const windowTop = window.scrollY;
        if (windowTop > elementTop - aosOffset) {
            element.classList.add('aos-animate');
        }
    });
});
// Get the nav toggle element
const navToggle = document.getElementById('nav-toggle');

// Get the nav menu element
const navMenu = document.getElementById('nav-menu');



// Add an event listener to the nav menu
navMenu.addEventListener('click', (e) => {
// Get the target element
const target = e.target;

// Check if the target element is a link
if (target.tagName === 'A') {
// Close the nav menu
navMenu.classList.remove('show');
}
});