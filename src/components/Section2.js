import React from "react";
import { useNavigate } from "react-router-dom";
import PhotoAbout from '../images/PhotoAbout.jpg';

export default function Section2() {
  
    return (
        <div className="section2Out">
            <section id="aboutMe" className="section2">        
                <div className="section2Left">
                    <h1> It’s just Me, Myself and I </h1>
                    <h2>
                        I am a passionate UGC creator at the beginning of my journey, driven by the desire to connect brands with their audiences through authentic and engaging content. With a fresh perspective and a creative spark, I love capturing real moments that inspire and resonate with people. 
                        <br /><br />
                        My goal is to bring a unique voice and genuine storytelling to every project, helping brands build meaningful relationships with their communities. 
                        <br /><br />
                        I believe that every piece of content has the power to make a difference, and I am excited to be a part of that journey.
                    </h2>
                </div>
                <div className="section2Right">
                    <img className="photoAbout" src={PhotoAbout} alt="Portrait Kamienieva Tetiana at the sea"/>
                </div>
            </section>
        </div>
    );
  }