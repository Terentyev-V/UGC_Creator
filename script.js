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

// Video Playback: Pause/Play on Touch or Click
document.querySelectorAll("video").forEach((video) => {
    const handleVideoPlayback = () => video.paused ? video.play() : video.pause();

    
});




// Initial Setup: Load videos and attach scroll listener
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    gallery.addEventListener('scroll', handleScroll); // Attach scroll listener to gallery

});