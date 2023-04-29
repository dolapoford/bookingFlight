import React from "react";
import pic1 from "../../../assets/img/landing/pic-1.png";
import pic2 from "../../../assets/img/landing/pic-2.png";
import pic3 from "../../../assets/img/landing/pic-3.png";
import pic4 from "../../../assets/img/landing/pic-4.png";
import pic5 from "../../../assets/img/landing/pic-5.png";
import pic6 from "../../../assets/img/landing/pic-6.png";

const testProperties = [
  {
    id: 1,
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, ratione.",
    src: pic1,
    name: "john deo",
    work: "designer",
  },
  {
    id: 2,
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, ratione.",
    src: pic2,
    name: "john deo",
    work: "designer",
  },
  {
    id: 3,
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, ratione.",
    src: pic3,
    name: "john deo",
    work: "designer",
  },
  {
    id: 4,
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, ratione.",
    src: pic4,
    name: "john deo",
    work: "designer",
  },
];
const Testimonial = () => {
  return (
    <div>
      <section className="review">
        <div className="content" data-aos="fade-right" data-aos-delay="300">
          <span>testimonials</span>
          <h3>good news from our clients</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            laudantium corporis fugiat quae unde perspiciatis similique ab modi
            enim consequatur aperiam cumque distinctio facilis sit, debitis
            possimus asperiores non harum.
          </p>
        </div>

        <div
          className="box-container"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          {testProperties.map((pic) => {
            return (
              <div className="box" key={pic.id}>
                <p>{pic.title}</p>
                <div className="user">
                  <img src={pic.src} alt="" />

                  <div className="info">
                    <h3>{pic.name}</h3>
                    <span>{pic.work}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
