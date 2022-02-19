const windowWidth = window.innerWidth
const image = document.querySelector('.main__image');
const arrowLeft = document.querySelector('.container .main__image-container .main__nav .main__nav-arrow-left');
const arrowRight = document.querySelector('.container .main__image-container .main__nav .main__nav-arrow-right');
const articleTitle = document.querySelector('.container .main .article h1');
const articleParagraph = document.querySelector('.container .main .article p');

const desktopContent = [
    {
        title: 'Discover innovative ways to decorate',
        src: './images/desktop-image-hero-1.jpg',
        paragraph: `We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.`
    },
    {
        title: 'We are available all across the globe',
        src: './images/desktop-image-hero-2.jpg',
        paragraph: ` With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we are in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`
    },
    {
        title: 'Manufactured with the best materials',
        src: './images/desktop-image-hero-3.jpg',
        paragraph: ` Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`
    }
]

const mobileContent = [
    {
        src: './images/mobile-image-hero-1.jpg',
    },
    {
        src: './images/mobile-image-hero-2.jpg',
    },
    {
        src: './images/mobile-image-hero-3.jpg',
    }
]

let currentContent = 0;

function changeContent() {
    articleTitle.textContent = `${desktopContent[currentContent].title}`;
        articleParagraph.textContent = `${desktopContent[currentContent].paragraph}`;
        
    if (window.innerWidth >= 1024) {
        image.src = `${desktopContent[currentContent].src}`;
    } else {
        image.src = `${mobileContent[currentContent].src}`;
    }
}

arrowLeft.addEventListener('click', () => {
    currentContent = currentContent - 1;

    if (currentContent < 0) {
        currentContent = 2
    }

    changeContent()
})

arrowRight.addEventListener('click', () => {
    currentContent = currentContent + 1;

    if (currentContent > 2) {
        currentContent = 0
    }

    changeContent();
})

if (windowWidth >= 1024) {
    image.src = './images/desktop-image-hero-1.jpg';
}