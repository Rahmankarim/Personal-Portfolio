"use client";
import React, { useEffect } from "react";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    const handleLoad = () => {
      AOS.refresh();
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  return (
    <AkpagerLayout header={9} footer={9} bodyClass={"home-nine"} onePage={true}>
      <section
        id="about"
        className="hero-area-nine pt-165 rpt-150 pb-130 rpb-100 rel z-1"
      >
        <div className="container">
          <div className="row gap-70 align-items-center">
            <div className="col-lg-6">
              <div
                className="hero-content style-nine mb-100 rmb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h1
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  Hi, I’m{" "}
                  <span style={{ color: "#9000ff" }}>Rahman Karim!</span>
                </h1>
                <p>MERN Stack Developer</p>
                <p>
                  I build dynamic, user-centric web apps, blending front-end and
                  back-end expertise to craft seamless, responsive experiences.
                </p>
                {/* <form className="newsletter-form mt-40" action="#">
                  <label htmlFor="email-address">
                    <i className="fas fa-envelope" />
                  </label>
                  <input
                    id="email-address"
                    type="email"
                    placeholder="Email Address"
                    required=""
                  />
                  <button type="submit">
                    <b>
                      Free Trail <i className="far fa-arrow-right" />
                    </b>
                  </button>
                </form>
                <ul className="icon-list pt-15">
                  <li>
                    <i className="fal fa-check" /> Free 14-day trial
                  </li>
                  <li>
                    <i className="fal fa-check" /> No credit card required
                  </li>
                </ul> */}
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="hero-nine-image">
                <img src="assets/images/rahman karim/hi.png" alt="Hero" />
                <div className="shapes">
                  {/* <div
                    className="shape one"
                    data-aos="zoom-in-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src="assets/images/shapes/hero-nine1.png"
                      alt="Shape"
                    />
                  </div> */}
                  <div
                    className="shape two"
                    data-aos="zoom-in-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src="assets/images/rahman karim/tango rose.png"
                      alt="Shape"
                    />
                  </div>
                  {/* <div
                    className="shape three"
                    data-aos="zoom-in-left"
                    data-aos-delay={100}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src="assets/images/shapes/hero-nine3.png"
                      alt="Shape"
                    />
                  </div> */}
                  {/* <div
                    className="shape four"
                    data-aos="zoom-in-right"
                    data-aos-delay={100}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src="assets/images/shapes/hero-nine4.png"
                      alt="Shape"
                    />
                  </div> */}
                  {/* <div
                    className="shape five"
                    data-aos="zoom-in-left"
                    data-aos-delay={200}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src="assets/images/rahman karim/drinking alone.png"
                      alt="Shape"
                    />
                  </div> */}
                  {/* <div
                    className="shape six"
                    data-aos="zoom-in-right"
                    data-aos-delay={200}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src="assets/images/shapes/hero-nine6.png"
                      alt="Shape"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-nine-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/hero-nine.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/hero-nine.png" alt="Shape" />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="client-logo-area pt-100 pb-90 rpb-60 rel z-2 "
        style={{ marginTop: "-187px" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-11">
              <div
                className="section-title text-center mb-60"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h1>About</h1>
              </div>
            </div>
          </div>
          <p>
            I’m <span style={{ color: "#9000FF" }}>Rahman Karim</span>, a MERN
            Stack Developer and a Computer Science student at COMSATS Lahore.
            During my internship at Crogics Technologies, I gained valuable
            experience building both the front-end and back-end of web
            applications, ensuring seamless functionality. Alongside my passion
            for technology, I enjoy hiking and playing football, which help me
            stay active and balanced. I’m always eager to learn, grow, and use
            my skills to create innovative solutions that make a difference.
          </p>
        </div>
      </section>

      {/* Hero area End */}
      {/* Client Logo Area Start */}
      <section className="client-logo-area pt-100 pb-90 rpb-60 rel z-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-11">
              <div
                className="section-title text-center mb-60"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h1>Education</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Client Logo Area End */}
      {/* Tab Area Start */}
      <section className="advanced-tab-area pb-130 rpb-100">
        <div className="container">
          <Tab.Container defaultActiveKey={"tabOne1"}>
            <Nav
              as={"ul"}
              className="nav advanced-tab mb-55"
              role="tablist"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <Nav.Item as={"li"}>
                <Nav.Link as={"button"} eventKey="tabOne1">
                  <i className="far fa-arrow-right" />
                  School
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={"li"}>
                <Nav.Link as={"button"} eventKey="tabOne2">
                  <i className="far fa-arrow-right" /> College
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={"li"}>
                <Nav.Link as={"button"} eventKey="tabOne3">
                  <i className="far fa-arrow-right" /> University
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={"li"}>
                <Nav.Link as={"button"} eventKey="tabOne4">
                  <i className="far fa-arrow-right" /> Jobs &amp; Internships
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={"li"}>
                <Nav.Link as={"button"} eventKey="tabOne5">
                  <i className="far fa-arrow-right" /> Volunteer work
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="tab-content">
              <Tab.Pane className="tab-pane fade" eventKey="tabOne1">
                <div className="row align-items-center justify-content-between">
                  <div className="col-lg-6">
                    <div className="content rmb-55">
                      <div className="section-title mb-30">
                        <h2>
                          Hasegawa Memorial Public School and College Karimabad
                          Hunza
                        </h2>
                      </div>
                      <p>
                        At Hasegawa Memorial Public School and College, I gained
                        foundational skills in academics and extracurricular
                        activities. Throughout my time here, I developed key
                        competencies in Microsoft Excel and Word, along with
                        soft skills such as effective communication and
                        presentation abilities, which have been essential in
                        both academic and personal growth.
                      </p>
                      <ul className="icon-list mt-20 mb-40">
                        <li>
                          <i className="fal" /> Matriculation (Science)
                        </li>
                        <li>
                          <i className="fal fa-date" />
                          Jan 2007 - Jan 2018
                        </li>
                      </ul>
                      {/* <a href="#" className="theme-btn style-two">
                        Learn More <i className="far fa-arrow-right" />
                      </a> */}
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6">
                    <div className="image">
                      <img
                        src="assets/images/rahman karim/homework.png"
                        alt="Tab"
                      />
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabOne2">
                <div className="row align-items-center justify-content-between">
                  <div className="col-xl-5 col-lg-6">
                    <div
                      className="image"
                      data-aos="fade-left"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <img
                        src="assets/images/rahman karim/i hate homework.png"
                        alt="Tab"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="content rmt-55"
                      data-aos="fade-right"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="section-title mb-30">
                        <h2>
                          The Innova Academy School and College Jutial Gilgit
                        </h2>
                      </div>
                      <p>
                        During my time at The Innova Academy, I specialized in
                        Computer Science (ICS), where I honed my programming
                        skills in C and developed proficiency in Microsoft Excel
                        and Word. I also enhanced my presentation skills and
                        became adept at presentation development, preparing me
                        to communicate technical ideas effectively and
                        confidently.
                      </p>
                      <ul className="icon-list mt-20 mb-40">
                        <li>
                          <i className="fal" /> ICS (Intermediate Computer
                          Science)
                        </li>
                        <li>
                          <i className="fal " /> 2019 – 2021
                        </li>
                        {/* <li>
                          <i className="fal fa-check" /> Message Experience
                        </li> */}
                      </ul>
                      {/* <a href="#" className="theme-btn style-two">
                        Learn More <i className="far fa-arrow-right" />
                      </a> */}
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabOne3">
                <div className="row align-items-center justify-content-between">
                  <div className="col-lg-6">
                    <div className="content rmb-55">
                      <div className="section-title mb-30">
                        <h2>COMSATS University Islamabad, Lahore Campus</h2>
                      </div>
                      <p>
                        At COMSATS, I am pursuing a Bachelor’s in Computer
                        Science, where I am deepening my understanding of
                        programming languages such as C and Java, and exploring
                        key topics like Data Structures and Object-Oriented
                        Programming (OOP). I have also developed skills in
                        project planning, presentation development, and
                        communication, essential for both academic and
                        professional growth. Outside of academics, I actively
                        participate in football and volleyball, enhancing my
                        teamwork and leadership abilities.
                      </p>
                      <ul className="icon-list mt-20 mb-40">
                        <li>
                          <i className="fal" /> BS in Computer Science
                        </li>
                        <li>
                          <i className="fal " />
                          Feb 2022 – Present
                        </li>
                        {/* <li>
                          <i className="fal fa-check" /> Message Experience
                        </li> */}
                      </ul>
                      {/* <a href="#" className="theme-btn style-two">
                        Learn More <i className="far fa-arrow-right" />
                      </a> */}
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6">
                    <div className="image">
                      <img
                        src="assets/images/rahman karim/sticker (6).png"
                        alt="Tab"
                      />
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabOne4">
                <div className="row align-items-center justify-content-between">
                  <div className="col-xl-5 col-lg-6">
                    <div className="image">
                      <img
                        src="assets/images/rahman karim/sleep glasses.png"
                        alt="Tab"
                      />{" "}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content rmt-55">
                      <div className="section-title mb-30">
                        <h2>Intern, Crogics Pvt Ltd </h2>
                      </div>
                      <p>
                        As an intern at Crogics Pvt Ltd, I am working as a MERN
                        Stack Developer, gaining hands-on experience in Node.js
                        and tackling real-world problem-solving challenges. I am
                        actively involved in backend development, refining my
                        skills in database management, APIs, and JavaScript.
                        Additionally, I am enhancing my expertise in project
                        collaboration, version control, and continuous learning,
                        while contributing to a range of projects that
                        strengthen my development and technical problem-solving
                        abilities across the MERN stack.
                      </p>
                      <ul className="icon-list mt-20 mb-40">
                        <li>
                          <i className="fal " /> Feb 2024 – Present
                        </li>
                      </ul>
                      {/* <a href="#" className="theme-btn style-two">
                        Learn More <i className="far fa-arrow-right" />
                      </a> */}
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabOne5">
                <div className="row align-items-center justify-content-between">
                  <div className="col-lg-6">
                    <div className="content rmb-55">
                      <div className="section-title mb-30">
                        <h2>Patrol Leader (PL)</h2>
                      </div>
                      <p>
                        As a volunteer Patrol Leader in Hunza, Pakistan, I have
                        had the privilege of contributing to community
                        development and youth empowerment in a region celebrated
                        for its natural beauty and rich cultural heritage. I led
                        various scouting activities, such as outdoor adventures,
                        educational workshops, and community service projects,
                        with a focus on developing leadership skills, teamwork,
                        and environmental awareness among local youth.
                      </p>
                      <ul className="icon-list mt-20 mb-40">
                        <li>
                          <i className="fal" /> Ismaili Boy Scouts
                        </li>
                        <li>
                          <i className="fal" /> Jan 2012 – Present (12 yrs 11
                          mo)
                        </li>
                        {/* <li>
                          <i className="fal " />
                          Feb 2022 – Present
                        </li> */}
                        {/* <li>
                          <i className="fal fa-check" /> Message Experience
                        </li> */}
                      </ul>
                      {/* <a href="#" className="theme-btn style-two">
                        Learn More <i className="far fa-arrow-right" />
                      </a> */}
                    </div>
                    <div className="content rmb-55">
                      <div className="section-title mb-30">
                        <h2>Tour Manager</h2>
                      </div>
                      <p>
                        As a volunteer Tour Manager at Baltit Fort, a historic
                        site under the Aga Khan Development Network (AKDN), I
                        played a key role in enhancing the visitor experience
                        while promoting the fort’s rich history and cultural
                        significance. My responsibilities included leading
                        engaging and informative tours, sharing insights into
                        the fort's historical and architectural heritage, and
                        addressing visitor inquiries. I focused on creating a
                        welcoming atmosphere, offering personalized
                        recommendations to ensure a memorable experience for
                        every guest.
                      </p>
                      <ul className="icon-list mt-20 mb-40">
                        <li>
                          <i className="fal " /> Aga Khan Development Network
                        </li>
                        <li>
                          <i className="fal" /> Jan 2018 – Jan 2019 (1 yr 1 mo)
                        </li>
                        {/* <li>
                          <i className="fal " />
                          Feb 2022 – Present
                        </li> */}
                        {/* <li>
                          <i className="fal fa-check" /> Message Experience
                        </li> */}
                      </ul>
                      {/* <a href="#" className="theme-btn style-two">
                        Learn More <i className="far fa-arrow-right" />
                      </a> */}
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6">
                    <div className="image">
                      <img
                        src="assets/images/rahman karim/koala friend.png"
                        alt="Tab"
                      />
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
      {/* Tab Area End */}
      {/* Services Area Start */}
      <section
        id="services"
        className="service-area-nine bgc-black pt-130 rpt-100 pb-100 rpb-70"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-11">
              <div
                className="section-title text-center text-white mb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h1>Area of Work</h1>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="iconic-box style-three"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon webIcon">
                  <img src="assets/images/icons/web.png" alt="Icon" />
                </div>
                <div className="content">
                  <h5 style={{ color: "white" }}>Web Development</h5>

                  <p>
                    I focus on seamless user experiences and efficient backend
                    solutions
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-three-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="iconic-box style-three"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <img src="assets/images/icons/iconic-box2.png" alt="Icon" />
                </div>
                <div className="content">
                  <h5 style={{ color: "white" }}>Artificial intelligence</h5>

                  <p>
                    I develop intelligent systems that provide support and
                    experiences
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-three-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="iconic-box style-three"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <img src="assets/images/icons/iconic-box3.png" alt="Icon" />
                </div>
                <div className="content">
                  <h5 style={{ color: "white" }}>Mobile Development</h5>

                  <p>
                    I create smooth, cross-platform mobile apps with React
                    Native and Expo
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-three-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="iconic-box style-three"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon webIcon">
                  <img src="assets/images/icons/game.png" alt="Icon" />
                </div>
                <div className="content">
                  <h5 style={{ color: "white" }}>Game Development</h5>

                  <p>
                    I build engaging games with interactive designs and
                    immersive experiences
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-three-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <SkillSlider /> */}
      <section className="marquee-iconic-box-area pt-60 rpt-40 pb-50">
        <div
          className="section-title text-center text-white mb-55"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <h1>Skills and languages</h1>
        </div>
        <Slider
          {...sliderProps.marqueeSliderLeft}
          className="marquee-slider-right iconic-slider-right"
        >
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-six">
              <i className="flaticon-pen-tool" />
            </div>
            <div className="content">
              <h6 className="title">UI/UX Design</h6>
              {/* <span className="subtitle">5+ Course</span> */}
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-seven">
              <i className="flaticon-goal-1" />
            </div>
            <div className="content">
              <h6 className="title">Leadership Skill</h6>
              {/* <span className="subtitle">8+ Course</span> */}
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-eight">
              <i className="flaticon-code" />
            </div>
            <div className="content">
              <h6 className="title">Web Development</h6>
              <span className="subtitle">10+ Projects</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-four">
              <i className="flaticon-megaphone" />
            </div>
            <div className="content">
              <h6 className="title">Mobile App Development</h6>
              <span className="subtitle">8+ Projects</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-six">
              <i className="flaticon-new-job" />
            </div>
            <div className="content">
              <h6 className="title">MERN Stack Development</h6>
              <span className="subtitle">10+ Projects</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-nine">
              <i className="flaticon-diaphragm" />
            </div>
            <div className="content">
              <h6 className="title">Photography</h6>
              {/* <span className="subtitle">3+ Course</span> */}
            </div>
          </div>
        </Slider>
        <Slider
          {...sliderProps.marqueeSliderRight}
          className="marquee-slider-left iconic-slider-left"
          dir="rtl"
        >
          <div className="marquee-iconic-box d-flex">
            <div className="icon " style={{ background: "transparent" }}>
              <img src="assets/images/launguages/Cpp.avif" alt="Hero" />
            </div>
            <div className="content">
              <h6 className="title">C++</h6>
              <span className="subtitle"></span>
            </div>
          </div>

          <div className="marquee-iconic-box d-flex">
            <div
              className="icon"
              style={{ background: "transparent", borderRadius: "31px" }}
            >
              <img src="assets/images/launguages/CSS.png" alt="Hero" />
            </div>
            <div className="content">
              <h6 className="title">CSS </h6>
              {/* <span className="subtitle">9+ Course</span> */}
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div
              className="icon"
              style={{ background: "transparent", borderRadius: "31px" }}
            >
              <img src="assets/images/launguages/Python.png" alt="Hero" />
            </div>
            <div className="content">
              <h6 className="title">Python </h6>
              {/* <span className="subtitle">9+ Course</span> */}
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div
              className="icon"
              style={{ background: "transparent", borderRadius: "31px" }}
            >
              <img src="assets/images/launguages/ts.png" alt="Hero" />
            </div>
            <div className="content">
              <h6 className="title">Typescript </h6>
              {/* <span className="subtitle">9+ Course</span> */}
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div
              className="icon"
              style={{ background: "transparent", borderRadius: "31px" }}
            >
              <img src="assets/images/launguages/bootstrap.png" alt="Hero" />
            </div>
            <div className="content">
              <h6 className="title">Bootstrap </h6>
              {/* <span className="subtitle">9+ Course</span> */}
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div
              className="icon"
              style={{ background: "transparent", borderRadius: "31px" }}
            >
              <img src="assets/images/launguages/java.png" alt="Hero" />
            </div>
            <div className="content">
              <h6 className="title">Java </h6>
              {/* <span className="subtitle">9+ Course</span> */}
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div
              className="icon"
              style={{ background: "transparent", borderRadius: "31px" }}
            >
              <img src="assets/images/launguages/node.png" alt="Hero" />
            </div>
            <div className="content">
              <h6 className="title">Node js </h6>
              {/* <span className="subtitle">9+ Course</span> */}
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div
              className="icon"
              style={{ background: "transparent", borderRadius: "31px" }}
            >
              <img src="assets/images/launguages/mongo.png" alt="Hero" />
            </div>
            <div className="content">
              <h6 className="title">Mongo DB</h6>
              {/* <span className="subtitle">9+ Course</span> */}
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div
              className="icon"
              style={{ background: "transparent", borderRadius: "31px" }}
            >
              <img src="assets/images/launguages/react.svg" alt="Hero" />
            </div>
            <div className="content">
              <h6 className="title">React.Js</h6>
              {/* <span className="subtitle">9+ Course</span> */}
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div
              className="icon"
              style={{ background: "transparent", borderRadius: "31px" }}
            >
              <img src="assets/images/launguages/next.png" alt="Hero" />
            </div>
            <div className="content">
              <h6 className="title">Next.Js</h6>
              {/* <span className="subtitle">9+ Course</span> */}
            </div>
          </div>
        </Slider>
      </section>
      <section
        id="about"
        className="about-area-nine bgc-black pb-110 rpb-80 rel z-1"
      >
        <div className="container">
          <div className="row gap-90 align-items-center">
            <div className="col-lg-6">
              <div
                className="about-content-nine text-white rmb-35"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>Cocurricular Activities</h2>
                </div>
                <p>
                  I am an avid sports enthusiast who enjoys staying active and
                  embracing challenges.
                </p>
                <div className="feature-icon-box mt-35">
                  <div className="icon">
                    <i className="far" />
                  </div>
                  <div className="content">
                    <p>
                      I play football and volleyball, which have taught me
                      teamwork, strategy, and discipline. Swimming is another
                      passion of mine, as it helps me maintain physical fitness
                      while being incredibly refreshing.
                    </p>
                  </div>
                </div>
                <div className="feature-icon-box">
                  <div className="icon">
                    <i className="far " />
                  </div>
                  <div className="content">
                    <p>
                      Additionally, I have a deep love for hiking and
                      mountaineering, where I explore nature’s beauty, test my
                      endurance, and experience the thrill of conquering new
                      heights. These activities not only keep me physically fit
                      but also help me develop resilience and a sense of
                      adventure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-nine-right-images mb-20 text-lg-end"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/rahman karim/sticker (7).png"
                  alt="About"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area End */}
      {/* Feature Image box Area Start */}
      <section
        id="features"
        className="feature-image-box-area pt-130 rpt-100 pb-100 rpb-70"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-11">
              <div
                className="section-title text-center mb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>My Recent Work</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div
                className="feature-image-box style-two"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/Websites-banners/gwdm.png"
                  alt="Feature"
                />
                <div className="content">
                  <h4>
                    <Link
                      href="https://www.goodwillmovement.com.au/"
                      className="projects-hover"
                    >
                      Goodwill Disability Movement
                    </Link>
                  </h4>

                  <ul className="icon-list">
                    <li>
                      <i className="fal fa-check" /> React.js
                    </li>
                    <li>
                      <i className="fal fa-check" /> Mongodb
                    </li>
                    <li>
                      <i className="fal fa-check" />
                      Responsive Documentation Included
                    </li>
                  </ul>
                  <h5 style={{ marginTop: "47px" }}>
                    <Link
                      target="_blank"
                      href="https://www.goodwillmovement.com.au/"
                      className="theme-btn"
                    >
                      Visit Webiste
                      <i className="far fa-arrow-right" />
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="feature-image-box style-two"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/Websites-banners/thoughtsNest.png"
                  alt="Feature"
                />
                <div className="content">
                  <h4>
                    <Link
                      href="https://github.com/Rahmankarim/ThoughtNest"
                      className="projects-hover"
                    >
                      ThoughtNest
                    </Link>
                  </h4>

                  <ul className="icon-list">
                    <li>
                      <i className="fal fa-check" /> Node js
                    </li>
                    <li>
                      <i className="fal fa-check" /> Javascript
                    </li>
                    <li>
                      <i className="fal fa-check" />
                      Responsive Documentation Included
                    </li>
                  </ul>
                  <h5 style={{ marginTop: "47px" }}>
                    <Link
                      target="_blank"
                      href="https://github.com/Rahmankarim/ThoughtNest"
                      className="theme-btn"
                    >
                      Show Source Code
                      <i className="far fa-arrow-right" />
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="feature-image-box style-two"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/Websites-banners/smileCrafter.png"
                  alt="Feature"
                />
                <div className="content">
                  <h4>
                    <Link
                      href="https://github.com/Rahmankarim/SmileCrafters"
                      className="projects-hover"
                    >
                      SmileCrafter
                    </Link>
                  </h4>

                  <ul className="icon-list">
                    <li>
                      <i className="fal fa-check" /> Html, CSS ,Javascript,
                      Typescript
                    </li>
                    <li>
                      <i className="fal fa-check" /> Bootstrap
                    </li>
                    <li>
                      <i className="fal fa-check" />
                      Responsive Documentation Included
                    </li>
                  </ul>
                  <h5 style={{ marginTop: "83px" }}>
                    <Link
                      target="_blank"
                      href="https://github.com/Rahmankarim/SmileCrafters"
                      className="theme-btn"
                    >
                      Show Source Code
                      <i className="far fa-arrow-right" />
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="feature-image-box style-two"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/Websites-banners/Helpng-Hand.png"
                  alt="Feature"
                />
                <div className="content">
                  <h4>
                    <Link
                      href="https://github.com/Rahmankarim/HelpingHands"
                      className="projects-hover"
                    >
                      Goodwill Disability Movement
                    </Link>
                  </h4>

                  <ul className="icon-list">
                    <li>
                      <i className="fal fa-check" /> HTML5, CSS, Javascript ,
                      Typescript
                    </li>
                    <li>
                      <i className="fal fa-check" /> Bootstrap
                    </li>
                    <li>
                      <i className="fal fa-check" />
                      Responsive Documentation Included
                    </li>
                  </ul>
                  <h5 style={{ marginTop: "47px" }}>
                    <Link
                      target="_blank"
                      href="https://github.com/Rahmankarim/HelpingHands"
                      className="theme-btn"
                    >
                      Show Source Code <i className="far fa-arrow-right" />
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="feature-image-box style-two"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/Websites-banners/TrendHive.png"
                  alt="Feature"
                />
                <div className="content">
                  <h4>
                    <Link
                      href="https://github.com/Rahmankarim/TrendHive"
                      className="projects-hover"
                    >
                      TrendHive
                    </Link>
                  </h4>

                  <ul className="icon-list">
                    <li>
                      <i className="fal fa-check" />{" "}
                      HTML5,CSS,JavaScript,Typescript
                    </li>
                    <li>
                      <i className="fal fa-check" /> Bootstrap
                    </li>
                    <li>
                      <i className="fal fa-check" />
                      Responsive Documentation Included
                    </li>
                  </ul>
                  <h5 style={{ marginTop: "47px" }}>
                    <Link
                      target="_blank"
                      href="https://github.com/Rahmankarim/TrendHive"
                      className="theme-btn"
                    >
                      Show Source Code
                      <i className="far fa-arrow-right" />
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="feature-image-box style-two"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/Websites-banners/Gemify.png"
                  alt="Feature"
                />
                <div className="content">
                  <h4>
                    <Link
                      href="https://github.com/Rahmankarim/Gemify"
                      className="projects-hover"
                    >
                      Gemify
                    </Link>
                  </h4>

                  <ul className="icon-list">
                    <li>
                      <i className="fal fa-check" /> Html, CSS ,Javascript,
                      Typescript
                    </li>
                    <li>
                      <i className="fal fa-check" /> Bootstrap
                    </li>
                    <li>
                      <i className="fal fa-check" />
                      Responsive Documentation Included
                    </li>
                  </ul>
                  <h5 style={{ marginTop: "83px" }}>
                    <Link
                      target="_blank"
                      href="https://github.com/Rahmankarim/Gemify"
                      className="theme-btn"
                    >
                      Show Source Code
                      <i className="far fa-arrow-right" />
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <h3 className="githubLink">
              Check More on{" "}
              <Link
                target="_blank"
                style={{ color: "blue" }}
                href="https://github.com/Rahmankarim"
              >
                Github
              </Link>
            </h3>
          </div>
        </div>
      </section>
      <section className="team-area pb-80 rpb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div
                className="section-title text-center mb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Certificates</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/Certificates/communication.png"
                    alt="Team"
                  />
                  <div className="social-media">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/rahman-karim-73a59022a/"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="description">
                  <h5>Communication Foundation</h5>
                  <span className="designation">Linkedin Learning</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/Certificates/css.png" alt="Team" />
                  <div className="social-media">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/rahman-karim-73a59022a/"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="description">
                  <h5>CSS</h5>
                  <span className="designation">Hacker Rank</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/Certificates/foundation of cyber security.png"
                    alt="Team"
                  />
                  <div className="social-media">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/rahman-karim-73a59022a/"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="description">
                  <h5>Foundation of Cyber Security</h5>
                  <span className="designation">Google</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/Certificates/frontend-developer-react.png"
                    alt="Team"
                  />
                  <div className="social-media">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/rahman-karim-73a59022a/"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="description">
                  <h5>Frontend Developer(React)</h5>
                  <span className="designation">HackerRank</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/Certificates/introduction to devops.png"
                    alt="Team"
                  />
                  <div className="social-media">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/rahman-karim-73a59022a/"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="description">
                  <h5>Introduction to Devops</h5>
                  <span className="designation">IBM</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/Certificates/introduction to mobile dev.png"
                    alt="Team"
                  />
                  <div className="social-media">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/rahman-karim-73a59022a/"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="description">
                  <h5>Introduction to Mobile App Development</h5>
                  <span className="designation">META</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/Certificates/java.png" alt="Team" />
                  <div className="social-media">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/rahman-karim-73a59022a/"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="description">
                  <h5>Java</h5>
                  <span className="designation">HackerRank</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/Certificates/javascript-intermediate.png"
                    alt="Team"
                  />
                  <div className="social-media">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/rahman-karim-73a59022a/"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="description">
                  <h5>Javascript Intermediate</h5>
                  <span className="designation">HackerRank</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/Certificates/javascript.png"
                    alt="Team"
                  />
                  <div className="social-media">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/rahman-karim-73a59022a/"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="description">
                  <h5>Javascript</h5>
                  <span className="designation">HackerRank</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/Certificates/CB3 E-Learning.png"
                    alt="Team"
                  />
                  <div className="social-media">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/rahman-karim-73a59022a/"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="description">
                  <h5>CB3 E-Learning</h5>
                  <span className="designation">Universal Robots</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="tooltip-area bgs-cover rel pt-130 rpt-100"
        style={{
          backgroundImage: "url(assets/images/backgrounds/tolltip.png)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-9 col-lg-11 mb-135 rmb-80 text-center"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-35">
                <h2>Lets get Connected</h2>
                <p>
                  Here are some of the social media platform to connect with
                  each other
                </p>
              </div>
              {/* <Link href="contact" className="theme-btn">
                Get Started Now <i className="far fa-arrow-right" />
              </Link> */}
            </div>
          </div>
          <div className="tooltips-wrap">
            <div className="tooltip-item active">
              <div className="tooltip-btn">
                <img
                  style={{ maxWidth: "100%" }}
                  src="assets/images/rahman karim/sticker (4).png"
                  alt="Icon"
                />
              </div>
              <div className="tooltip-content">
                <div className="image">
                  <img
                    src="assets/images/rahman karim/surprised phone.png"
                    alt="Tooltip"
                  />
                </div>
              </div>
            </div>
            <div className="tooltip-item">
              <div className="tooltip-btn">
                <a
                  href="https://www.linkedin.com/in/rahman-karim-73a59022a/"
                  target="_blank"
                >
                  <img
                    src="assets/images/tooltips/tooltip-icon2.png"
                    alt="Icon"
                  />
                </a>
              </div>
              <div className="tooltip-content">
                <div className="image">
                  <img
                    src="assets/images/rahman karim/surprised phone.png"
                    alt="Tooltip"
                  />
                </div>
              </div>
            </div>
            <div className="tooltip-item">
              <div className="tooltip-btn">
                <a
                  href="mailto:rahmankarim2468@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="assets/images/tooltips/Mail.webp" alt="Icon" />
                </a>
              </div>
              <div className="tooltip-content">
                <div className="image">
                  <img
                    src="assets/images/rahman karim/surprised phone.png"
                    alt="Tooltip"
                  />
                </div>
              </div>
            </div>
            <div className="tooltip-item">
              <div className="tooltip-btn">
                <a href="https://github.com/Rahmankarim" target="_blank">
                  <img
                    style={{ borderRadius: "100%" }}
                    src="assets/images/tooltips/Github.png"
                    alt="Icon"
                  />
                </a>
              </div>
              <div className="tooltip-content">
                <div className="image">
                  <img
                    src="assets/images/rahman karim/surprised phone.png"
                    alt="Tooltip"
                  />
                </div>
              </div>
            </div>
            <div className="tooltip-item">
              <div className="tooltip-btn">
                <a href="https://medium.com/@rahmankarim2468" target="_blank">
                  <img src="assets/images/tooltips/medium.png" alt="Icon" />
                </a>
              </div>
              <div className="tooltip-content">
                <div className="image">
                  <img
                    src="assets/images/rahman karim/surprised phone.png"
                    alt="Tooltip"
                  />
                </div>
              </div>
            </div>
            <div className="tooltip-item">
              <div className="tooltip-btn">
                <a
                  href="https://www.instagram.com/rahman_karim_1/"
                  target="_blank"
                >
                  <img
                    src="assets/images/tooltips/tooltip-icon6.png"
                    alt="Icon"
                  />
                </a>
              </div>
              <div className="tooltip-content">
                <div className="image">
                  <img
                    src="assets/images/rahman karim/surprised phone.png"
                    alt="Tooltip"
                  />
                </div>
              </div>
            </div>
            <div className="tooltip-item">
              <div className="tooltip-btn">
                <a href="https://dev.to/rahman_karim" target="_blank">
                  <img src="assets/images/tooltips/dev.png" alt="Icon" />
                </a>
              </div>
              <div className="tooltip-content">
                <div className="image">
                  <img
                    src="assets/images/rahman karim/surprised phone.png"
                    alt="Tooltip"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="testimonials-nine-area py-130 rpy-100 rel z-1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title text-center mb-55"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Lets see what others think</h2>
              </div>
            </div>
          </div>
          <Slider
            {...sliderProps.testiSliderThree}
            className="testi-slider-three"
            data-aos="fade-in"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div>
              <div className="testimonial-item-two">
                <div className="author">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/ceo.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <h6>Majeed</h6>
                    <span>CEO &amp; Founder</span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
                <div className="line" />
                <div className="author-text">
                  Rahman Karim is an exceptional MERN stack developer with a
                  strong foundation in web development and database management.
                  His ability to integrate front-end and back-end seamlessly
                  ensures user-friendly and efficient applications. He
                  consistently demonstrates a passion for learning and
                  innovation, making him a valuable asset to any team.
                </div>
              </div>
            </div>
            <div>
              <div className="testimonial-item-two">
                <div className="author">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/ustad.png"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <h6>Abdullah Baig</h6>
                    <span>Full stack web developer</span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
                <div className="line" />
                <div className="author-text">
                  Rahman is a talented and dedicated student of computer science
                  with a keen interest in data science and software development.
                  His hands-on experience with projects, including dynamic web
                  applications and mobile apps, showcases his technical
                  expertise and creative problem-solving skills.
                </div>
              </div>
            </div>
            <div></div>
            <div>
              <div className="testimonial-item-two">
                <div className="author">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/shahab.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <h6>Shahab Karim</h6>
                    <span>Mern Stack Developer</span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
                <div className="line" />
                <div className="author-text">
                  Rahman Karim is a versatile and driven individual who excels
                  in both academics and professional endeavors. His internship
                  experience and coursework reflect his commitment to mastering
                  his field, while his collaborative attitude makes him a
                  pleasure to work with.
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="testimonial-nine-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/testimonial-left.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/testimonial-right.png" alt="Shape" />
          </div>
        </div>
      </section>
    </AkpagerLayout>
  );
};
export default page;
