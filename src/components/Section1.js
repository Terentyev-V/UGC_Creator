import React from "react";
import { useNavigate } from "react-router-dom";
import PhotoMain from '../images/PhotoMain.jpg'
import aboutMe from "./Section2";


export default function Section1() {

    // get the navigate function
    const navigate = useNavigate()

    const aboutMe = () => {
      // imperatively redirect forward
      navigate(aboutMe)
    }
  
    return (
      <section className="section1">
        <div className="section1Left">
          <h1> Hi, I am Tetiana,</h1>
              <h2>making ugc content for your brand</h2>
          <button className="section1Button" onClick={aboutMe}><a href="#aboutMe">Learn more about me</a></button>
        </div>
        <div className="section1Right">
          <img className="photoMain" src={PhotoMain} alt="UGC Creator Kamienieva Tetiana"/>
        </div>
        
        
      </section>
    );
  }