const hamMenu = document.getElementById("ham");
const navMenu = document.getElementById("nav-menu")
const logo = document.getElementById("logo")


// Hamburger menu event listener
hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("bi-x-lg")
    navMenu.classList.toggle("show-nav")
})

// Nav menu event listener
navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("show-nav")
    hamMenu.classList.remove("bi-x-lg")
})

logo.addEventListener("click", () => {
    navMenu.classList.remove("show-nav")
    hamMenu.classList.remove("bi-x-lg")
})


// Slideshow
const images = [
    "/imgs/andy-li-RndRFJ1v1kk-unsplash.jpg",
    "imgs/ceyda-ciftci--ylyzFOEBS0-unsplash.jpg",
    "imgs/toa-heftiba-S1Z_Cudra0k-unsplash.jpg"
]

function changeImage(index) {
    const slideshow = document.getElementById('slideshow');
    slideshow.style.backgroundImage = `url(${images[index]})`;
}

let currentIndex = 0

const interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(currentIndex);
  }, 3000); 



document.getElementById('prev').addEventListener('click', () => {
    clearInterval(interval);
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeImage(currentIndex);
});
  
document.getElementById('next').addEventListener('click', () => {
    clearInterval(interval);
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(currentIndex);
});