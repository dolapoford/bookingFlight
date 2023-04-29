import { background } from '@chakra-ui/system';
import React  from 'react';
import '../../../src/assets/css/Landingpage.css';
import Navbar from './components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Booking from './components/Booking';
import About from './components/About';
import Destination from './components/Destination';
import Service from './components/Service';
import Gallery from './components/Gallery';
import Testimonial from './components/Testimonial';
import Banner from './components/Banner';
import Footer from './components/Footer';

const myStyles = {
    // backgroundColor: 'blue',
   
   fontSize: "62.5%",
   
  };

const LandingPage =() =>{
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="landing-page" > 

            <div className="landing-section"  >
                <Navbar/>
                <Booking />
                <About/>
                <Destination/>
                <Service/>
                <Gallery/>
                <Testimonial/>
                <Banner/>
                <Footer/>

            </div>

        </div>
    )
}

export default LandingPage;