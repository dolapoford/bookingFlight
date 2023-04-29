import React from "react";

const myStyles = {
    // backgroundColor: 'blue',
   
  
   overflow: 'hidden',
  };


const Banner = () => {
  return (
    <div>
      <div className="banner" style={myStyles}>
        <div className="content" data-aos="zoom-in-up" data-aos-delay="300">
          <span>start your adventures</span>
          <h3>Let's Explore This World</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            voluptatum praesentium amet quibusdam quam officia suscipit odio.
          </p>
          <a href="#book-form" className="btn">
            book now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
