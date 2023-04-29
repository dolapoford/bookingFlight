import React from "react";
// import '../../../src/assets/css/Landingpage.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// let navbar = document.querySelector('.header .navbar');

// document.querySelector('#menu-btn').onclick = () =>{
//     navbar.classList.toggle('active');
// }

const Navbar =()=>{
    return(
        <header className="header">

        <div id="menu-btn" className="fas fa-bars"></div>
    
        <a data-aos="zoom-in-left" data-aos-delay="150" href="#" className="logo"> <i className="fas fa-paper-plane"></i>travel </a>
    
        <nav className="navbar">
            <a data-aos="zoom-in-left" data-aos-delay="300" href="#home">home</a>
            <a data-aos="zoom-in-left" data-aos-delay="450" href="#about">about</a>
            <a data-aos="zoom-in-left" data-aos-delay="600" href="#destination">destination</a>
            <a data-aos="zoom-in-left" data-aos-delay="750" href="#services">services</a>
            <a data-aos="zoom-in-left" data-aos-delay="900" href="#gallery">gallery</a>
            <a data-aos="zoom-in-left" data-aos-delay="1150" href="#blogs">blogs</a>
        </nav>
    
        <a data-aos="zoom-in-left" data-aos-delay="1300" href="#book-form" className="btn">book now</a>
    
    </header>
    )
}

export default Navbar;