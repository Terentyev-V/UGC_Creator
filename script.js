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
    simulateTouch: true,  // Ensure touch simulation is enabled for mobile
    breakpoints: {
        428: {
            allowTouchMove: true, // Enable touch move for smaller screens
        }
    }
});

swiper.sliderMove = function (s, e) {
    console.log(s);
};

function Navigate(indx) {
    document.querySelectorAll(".Links li").forEach((li) => li.classList.remove("activeLink"));
    document.querySelectorAll(".Links li")[indx].classList.add("activeLink");
    swiper.slideTo(indx, 1000, true);
}

// Video Playback: Pause/Play on Click
let videos = document.querySelectorAll("video");
videos.forEach((video) => {
  video.onclick = () => video.paused ? video.play() : video.pause();
});

// Function to detect scroll position and load more videos
function handleScroll() {
    const gallery = document.querySelector('.gallery'); // Target the gallery element
    if (gallery.scrollTop + gallery.clientHeight >= gallery.scrollHeight - 50) {
        loadVideos();  // Load more videos when the user scrolls near the bottom
    }
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    loadVideos(); // Load initial set of videos
    const gallery = document.querySelector('.gallery');
    gallery.addEventListener('scroll', handleScroll); // Attach scroll listener to gallery
});