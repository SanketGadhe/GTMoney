import React from 'react'
import Navbar from '../container/NavBar.container'
import Carousel from '../container/mainCarousel'
import ServicesGrid from '../container/services.container'
import HeroStats from '../container/heroStats.container'
import LeadingPatners from '../container/LeadingPartner.container'
import Testimonials from '../container/testimonial.container'
import FooterContainer from '../container/Footer.container'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Carousel autoPlayInterval={5000} />;
            <ServicesGrid />
            <HeroStats />
            <LeadingPatners />
            <Testimonials />
            <FooterContainer />
        </div>
    )
}

export default Home
