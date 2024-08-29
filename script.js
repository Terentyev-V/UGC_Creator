var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove:false,
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel:false,
});
swiper.sliderMove = function (s, e) {
    console.log(s)
}
function Navigate(indx) {
    for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink")
    Array.from(document.querySelectorAll(".Links li"))[indx].classList.add("activeLink")
    swiper.slideTo(indx, 1000, true)
}
//----video playback
let videos = document.querySelectorAll("video");
videos.forEach((video) => {
  video.onclick = () => video.paused ? video.play() : video.pause();
});



document.addEventListener('DOMContentLoaded', () => {
    loadVideos(); // Initial videos
    window.addEventListener('scroll', handleScroll); // Set up scroll detection
});