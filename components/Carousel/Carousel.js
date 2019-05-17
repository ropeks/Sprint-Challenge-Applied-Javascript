class Carousel {
    constructor() {
        this.carousel = document.querySelector('.carousel');
        this.leftBtn = document.querySelector('.left-button');
        this.rightBtn = document.querySelector('.right-button');
        this.images = carousel.querySelectorAll('img');
        Array.from(this.images).forEach(img => {
            img.classList.add(``)
        })
    }
}

let carousel = new Carousel();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
