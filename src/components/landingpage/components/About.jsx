import React from "react";
import video1 from "../../../assets/img/landing/about-vid-1.mp4"
import video2 from "../../../assets/img/landing/about-vid-2.mp4"
import video3 from "../../../assets/img/landing/about-vid-3.mp4"


document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})

const About = () => {
  return (
    <div>
      <section class="about" id="about">
        <div class="video-container" data-aos="fade-right" data-aos-delay="300">
          <video
            src={video1}
            muted
            autoplay
            loop
            class="video"
          ></video>
          <div class="controls">
            <span class="control-btn" data-src={video1}></span>
            <span class="control-btn" data-src={video2}></span>
            <span class="control-btn" data-src={video3}></span>
          </div>
        </div>

        <div class="content">
          <span>why choose us?</span>
          <h3>Nature's Majesty Awaits You</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugit
            repellat error deserunt nam aperiam odit libero quos provident.
            Nostrum?
          </p>
          <a href="#" class="btn">
            read more
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
