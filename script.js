// Initialize Swiper
var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove: false,
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel: false,
    simulateTouch: true, // Ensure touch simulation is enabled for mobile
    breakpoints: {
        428: {
            allowTouchMove: true, // Enable touch move for smaller screens
        }
    }
});

// Extend swiper with custom sliderMove function
swiper.sliderMove = function (s, e) {
    console.log(s);
};

// Navigation function to update active link and slide
function Navigate(indx) {
    document.querySelectorAll(".Links li").forEach((li) => li.classList.remove("activeLink"));
    document.querySelectorAll(".Links li")[indx].classList.add("activeLink");
    swiper.slideTo(indx, 1000, true);
}

// Video Playback: Pause/Play on Click or Touch
document.querySelectorAll("video").forEach((video) => {
    const handleVideoPlayback = () => video.paused ? video.play() : video.pause();

    if (window.matchMedia("(max-width: 834px)").matches) {
        video.ontouchstart = handleVideoPlayback; // Attach touch event on smaller screens
    } else {
        video.onclick = handleVideoPlayback; // Attach click event on larger screens
    }
});

// Load more videos function (placeholder for dynamic loading)
function loadVideos() {
    // Placeholder logic for loading more videos
    console.log('Loading more videos...');
    // You can add your logic here to fetch and append new videos to the gallery.
}

// Handle scroll event to trigger video loading
function handleScroll() {
    const gallery = document.querySelector('.gallery'); // Target the gallery element
    if (gallery.scrollTop + gallery.clientHeight >= gallery.scrollHeight - 50) {
        loadVideos(); // Load more videos when the user scrolls near the bottom
    }
}

// Initial Setup: Load videos and attach scroll listener
document.addEventListener('DOMContentLoaded', () => {
    loadVideos(); // Load initial set of videos
    const gallery = document.querySelector('.gallery');
    gallery.addEventListener('scroll', handleScroll); // Attach scroll listener to gallery

    // Dynamically attach event listeners for "Contact Me" section based on screen size
    const contactElements = document.querySelectorAll("#contact-me *"); // Replace with correct selector for "Contact Me" section
    contactElements.forEach((element) => {
        if (window.matchMedia("(max-width: 834px)").matches) {
            element.ontouchstart = () => {
                // Handle touch event logic for smaller screens
                console.log('Touched on element:', element);
            };
        } else {
            element.onclick = () => {
                // Handle click event logic for larger screens
                console.log('Clicked on element:', element);
            };
        }
    });
});