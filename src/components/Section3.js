import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Video from '../videos/Video.mp4';
import Video1 from '../videos/Video1.mp4';
import Video2 from '../videos/Video2.mp4';
import Video3 from '../videos/Video3.mp4';
import Video4 from '../videos/Video4.mp4';
import Video5 from '../videos/Video5.mp4';
import Video6 from '../videos/Video6.mp4';


const items = [
    <div className="item video" key="1">
      <video className="media">
        <source src={Video} />
        Your browser does not support the video tag.
      </video>
    </div>,
    <div className="item video" key="2">
      <video className="media">
        <source src={Video1} />
        Your browser does not support the video tag.
      </video>
    </div>,
    <div className="item video" key="3">
      <video className="media">
        <source src={Video2} />
        Your browser does not support the video tag.
      </video>
    </div>,
    <div className="item video" key="4">
    <video className="media">
      <source src={Video3} />
      Your browser does not support the video tag.
    </video>
    </div>,
    <div className="item video" key="5">
    <video className="media">
      <source src={Video4} />
      Your browser does not support the video tag.
    </video>
    </div>,
    <div className="item video" key="6">
    <video className="media">
      <source src={Video5} />
      Your browser does not support the video tag.
    </video>
    </div>,
    <div className="item video" key="7">
    <video className="media">
      <source src={Video6} />
      Your browser does not support the video tag.
    </video>
    </div>   
  
];

export default function Section3() {
    const [mainIndex, setMainIndex] = useState(0);

    // Video Playback: Pause/Play on Touch or Click
    useEffect(() => {
        const handleVideoPlayback = (event) => {
            const video = event.currentTarget; // Get the video that triggered the event
            video.paused ? video.play() : video.pause(); // Toggle play/pause
        };

        const videos = document.querySelectorAll(".media");
        videos.forEach((video) => {
            video.addEventListener("click", handleVideoPlayback);
            video.addEventListener("touchstart", handleVideoPlayback); // For touch devices
        });

        // Cleanup event listeners on component unmount
        return () => {
            videos.forEach((video) => {
                video.removeEventListener("click", handleVideoPlayback);
                video.removeEventListener("touchstart", handleVideoPlayback);
            });
        };
    }, []); // Empty dependency array ensures this runs once on mount

    const slideNext = () => {
        if (mainIndex < items.length - 1) {
            setMainIndex(mainIndex + 1);
        }
    };

    const slidePrev = () => {
        if (mainIndex > 0) {
            setMainIndex(mainIndex - 1);
        }
    };

    return (
        <div id="gallery" className="carousel section3">
          
            <AliceCarousel
                activeIndex={mainIndex}
                disableButtonsControls
                items={items}
            />
            <div className="btn-prev" onClick={slidePrev}>
                &lang;
            </div>
            <div className="btn-next" onClick={slideNext}>
                &rang;
            </div>
        </div>
    );
}
