import React from "react";

import des1 from '../../../assets/img/landing/des-1.jpg'
import des2 from '../../../assets/img/landing/des-2.jpg'
import des3 from '../../../assets/img/landing/des-3.jpg'
import des4 from '../../../assets/img/landing/des-4.jpg'
import des5 from '../../../assets/img/landing/des-5.jpg'
import des6 from '../../../assets/img/landing/des-6.jpg'
import des7 from '../../../assets/img/landing/des-7.jpg'
import des8 from '../../../assets/img/landing/des-8.jpg'

const myStyles = {
    // backgroundColor: 'blue',
   overflow: 'hidden',
   
  };

const Destination = () => {
  return (
    <div style={myStyles}>
      <section className="destination" id="destination">
        <div className="heading">
          <span>our destination</span>
          <h1>make yours destination</h1>
        </div>

        <div className="box-container">
          <div className="box" >
            <div className="image">
              <img src={des1} alt="" />
            </div>
            <div className="content">
              <h3>tours & travel</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              <a href="#">
                read more <i className="fas fa-angle-right"></i>
              </a>
            </div>
          </div>

          <div className="box" >
            <div className="image">
              <img src={des2} alt="" />
            </div>
            <div className="content">
              <h3>tours & travel</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              <a href="#">
                read more <i className="fas fa-angle-right"></i>
              </a>
            </div>
          </div>

          <div className="box" >
            <div className="image">
              <img src={des3} alt="" />
            </div>
            <div className="content">
              <h3>tours & travel</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              <a href="#">
                read more <i className="fas fa-angle-right"></i>
              </a>
            </div>
          </div>

          <div className="box" >
            <div className="image">
              <img src={des4} alt="" />
            </div>
            <div className="content">
              <h3>tours & travel</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              <a href="#">
                read more <i className="fas fa-angle-right"></i>
              </a>
            </div>
          </div>

          <div className="box" >
            <div className="image">
              <img src={des5} alt="" />
            </div>
            <div className="content">
              <h3>tours & travel</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              <a href="#">
                read more <i className="fas fa-angle-right"></i>
              </a>
            </div>
          </div>

          <div className="box" >
            <div className="image">
              <img src={des6} alt="" />
            </div>
            <div className="content">
              <h3>tours & travel</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              <a href="#">
                read more <i className="fas fa-angle-right"></i>
              </a>
            </div>
          </div>

          <div className="box" >
            <div className="image">
              <img src={des7} alt="" />
            </div>
            <div className="content">
              <h3>tours & travel</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              <a href="#">
                read more <i className="fas fa-angle-right"></i>
              </a>
            </div>
          </div>

          <div className="box" >
            <div className="image">
              <img src={des8} alt="" />
            </div>
            <div className="content">
              <h3>tours & travel</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              <a href="#">
                read more <i className="fas fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destination;
