import React from "react";
import { useNavigate } from "react-router-dom";
import PhotoAbout from '../images/PhotoAbout.jpg';

export default function Section4() {
  
    return (
            <section id="contacts" className="section4">  
                <h2>Follow Me</h2> 
                <div className="section4GroupButtons">   
                <button className="section1Button" onClick={() => window.open('https://t.me/yourTelegramUsername', '_blank')}>Telegram</button>
                <button className="section1Button" onClick={() => window.open('https://www.instagram.com/tetiana.kamienieva?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D', '_blank')}>Instagram</button>
                <button className="section1Button" onClick={() => window.open('https://www.fiverr.com/kamienieva_t/make-ugc-content-for-your-brand?utm_campaign=gigs_show&utm_medium=shared&utm_source=copy_link&utm_term=8zg89k4', '_blank')}>Fiver</button>
                </div>
           </section>
    
    );
  }