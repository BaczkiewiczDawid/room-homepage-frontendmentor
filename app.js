const windowWidth = window.innerWidth
const image1 = document.querySelector('.main__image');

if (windowWidth >= 1024) {
    image1.src = './images/desktop-image-hero-1.jpg';
}