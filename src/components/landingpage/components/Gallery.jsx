import React from "react";
import gallery1 from "../../../assets/img/landing/gallery-img-1.jpg";
import gallery2 from "../../../assets/img/landing/gallery-img-2.jpg";
import gallery3 from "../../../assets/img/landing/gallery-img-3.jpg";
import gallery4 from "../../../assets/img/landing/gallery-img-4.jpg";
import gallery5 from "../../../assets/img/landing/gallery-img-5.jpg";
import gallery6 from "../../../assets/img/landing/gallery-img-6.jpg";
import gallery7 from "../../../assets/img/landing/gallery-img-7.jpg";
import gallery8 from "../../../assets/img/landing/gallery-img-8.jpg";
import gallery9 from "../../../assets/img/landing/gallery-img-9.jpg";

const myStyles = {
    // backgroundColor: 'blue',
   
  
   overflow: 'hidden',
  };

const galleryProperties = [
  {
    id:1,
    src: gallery1,
    title: "travel spot",
    place: "iceland",
  },
  {
    id:2,
    src: gallery2,
    title: "travel spot",
    place: "greenland",
  },
  {
    id:3,
    src: gallery3,
    title: "travel spot",
    place: "alaska",
  },
  {
    id:4,
    src: gallery4,
    title: "travel spot",
    place: "thailand",
  },
  {
    id:5,
    src: gallery5,
    title: "travel spot",
    place: "brazil",
  },
  {
    id:6,
    src: gallery6,
    title: "travel spot",
    place: "maldive",
  },
  {
    id:7,
    src: gallery7,
    title: "travel spot",
    place: "iceland",
  },
  {
    id:8,
    src: gallery8,
    title: "travel spot",
    place: "alaska",
  },
  {
    id:9,
    src: gallery9,
    title: "travel spot",
    place: "maldive",
  },
];



const Gallery = () => {
  return (
    <div>
      <section className="gallery" id="gallery" style={myStyles}>
        <div className="heading">
          <span>our gallery</span>
          <h1>we record memories</h1>
        </div>

        <div className="box-container">

        {
                    galleryProperties.map((galleryPro) =>{
                        return (
                            <div className="box" data-aos="zoom-in-up" data-aos-delay="150" key={galleryPro.id}>
                                <img src={galleryPro.src}/>
                                <span>{galleryPro.title}</span>
                                <h3>{galleryPro.place}</h3>
                            </div>
                        )
                    })
                }
        
        </div>
      </section>
    </div>
  );
};

export default Gallery;
