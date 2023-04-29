import React from "react";

const Booking = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className="content">
          <span data-aos="fade-up" data-aos-delay="150">
            follow us
          </span>
          <h3 data-aos="fade-up" data-aos-delay="300">
            to the unknown
          </h3>
          <p data-aos="fade-up" data-aos-delay="450">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus quia illum quod perspiciatis harum in possimus? Totam
            consequuntur officia quia?
          </p>
          <a data-aos="fade-up" data-aos-delay="600" href="#" className="btn">
            book now
          </a>
        </div>
      </section>

      <section className="book-form" id="book-form">
        <form action="">
          <div data-aos="zoom-in" data-aos-delay="150" className="inputBox">
            <span>where to?</span>
            <input type="text" placeholder="place name" value="" />
          </div>
          <div data-aos="zoom-in" data-aos-delay="300" className="inputBox">
            <span>when?</span>
            <input type="date" value="" />
          </div>
          <div data-aos="zoom-in" data-aos-delay="450" className="inputBox">
            <span>how many?</span>
            <input type="number" placeholder="number of travelers" value="" />
          </div>
          <input
            data-aos="zoom-in"
            data-aos-delay="600"
            type="submit"
            value="find now"
            className="btn"
          />
        </form>
      </section>
    </div>
  );
};

export default Booking;
