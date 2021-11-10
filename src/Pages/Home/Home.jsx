import React from 'react'
import BrandSlider from '../../Components/BrandSlider/BrandSlider'
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero/Hero'
import Intro from '../../Components/Intro/Intro'
import Portfolio from '../../Components/Portfolio/Portfolio'
import Services from '../../Components/Services/Services'
import Testimonial from '../../Components/Testimonial/Testimonial'
import './Home.scss'

export default function Home() {
    return (
        <>
            <Hero />
            <Intro />
            <Services />
            <Testimonial />
            <Portfolio/>
            <BrandSlider/>   
            <Footer/>
        </>
    )
}
