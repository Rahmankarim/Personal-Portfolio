import React from "react";
import Slider from "react-slick";
import { sliderProps } from "@/utility/sliderProps";

const SkillSlider = () => {
  return (
    <>
      <section className="marquee-iconic-box-area bg-black pb-10">
        <Slider
          {...sliderProps.marqueeSliderRight}
          className="marquee-slider-right text-white iconic-slider-right"
        >
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/member1.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Mike R. Smith</h6>
              <span className="subtitle">New York</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/member2.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Leroy T. Casey</h6>
              <span className="subtitle">Australia</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/member3.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Roger E. Sanders</h6>
              <span className="subtitle">Poland</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/member4.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Chris L. Mauney</h6>
              <span className="subtitle">Bangladesh</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/member5.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">James D. Wright</h6>
              <span className="subtitle">Germany</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/member6.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Louis M. Pawlak</h6>
              <span className="subtitle">Netherland</span>
            </div>
          </div>
        </Slider>
        <Slider
          {...sliderProps.marqueeSliderLeft}
          className="marquee-slider-left text-white iconic-slider-left"
          dir="rtl"
        >
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/member7.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Roland J. Reilly</h6>
              <span className="subtitle">Canada</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/member8.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">William M. Hook</h6>
              <span className="subtitle">Portugal</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/member9.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Pete B. Cadiz</h6>
              <span className="subtitle">Brazil</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/member10.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Johnny M. Bain</h6>
              <span className="subtitle">New York</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/member11.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Michael C. Smith</h6>
              <span className="subtitle">London</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/member12.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Leonard M. Miller</h6>
              <span className="subtitle">South Africa</span>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
};

export default SkillSlider;
