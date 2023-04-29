import React from "react";

const myStyles = {
  // backgroundColor: 'blue',
 

 overflow: 'hidden',
};

const Service = () => {
  return (
    <div>
      <section className="services" id="services" style={myStyles}>
        <div className="heading">
          <span>our services</span>
          <h1>countless expericences</h1>
        </div>

        <div className="box-container">
          <div className="box" data-aos="zoom-in-up" data-aos-delay="150">
            <i className="fas fa-globe"></i>
            <h3>worldwide</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              cumque.
            </p>
          </div>

          <div className="box" data-aos="zoom-in-up" data-aos-delay="300">
            <i className="fas fa-hiking"></i>
            <h3>adventures</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              cumque.
            </p>
          </div>

          <div className="box" data-aos="zoom-in-up" data-aos-delay="450">
            <i className="fas fa-utensils"></i>
            <h3>food & drinks</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              cumque.
            </p>
          </div>

          <div className="box" data-aos="zoom-in-up" data-aos-delay="600">
            <i className="fas fa-hotel"></i>
            <h3>affordable hotels</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              cumque.
            </p>
          </div>

          <div className="box" data-aos="zoom-in-up" data-aos-delay="750">
            <i className="fas fa-wallet"></i>
            <h3>affordable price</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              cumque.
            </p>
          </div>

          <div className="box" data-aos="zoom-in-up" data-aos-delay="900">
            <i className="fas fa-headset"></i>
            <h3>24/7 support</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              cumque.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
