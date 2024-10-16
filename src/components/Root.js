import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';

export default function Root() {
    return (
        <>
            
            <Header/>
            <main>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Outlet/>
            </main>
            <Footer/>
            
        </>
    )
}

