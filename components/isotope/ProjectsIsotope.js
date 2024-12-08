"use client";
import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const ProjectsIsotope = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".project-active", {
        itemSelector: ".item",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <section className="project-grid-area pt-130 rpt-100 pb-85 rpb-55">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xl-9 col-lg-11">
            <div
              className="section-title mb-60"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h2 style={{ color: "white" }}>Certificates</h2>
            </div>
          </div>
        </div>
        <ul
          className="project-nav mb-40"
          data-aos="fade-up"
          data-aos-delay={50}
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <li
            data-filter="*"
            className={`c-pointer ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
          >
            Show All
          </li>
          <li
            data-filter=".design"
            className={`c-pointer ${activeBtn("webdev")}`}
            onClick={handleFilterKeyChange("webdev")}
          >
            Web-Development
          </li>
          <li
            data-filter=".marketing"
            className={`c-pointer ${activeBtn("mobdev")}`}
            onClick={handleFilterKeyChange("mobdev")}
          >
            Mobile-Development
          </li>
          <li
            data-filter=".branding"
            className={`c-pointer ${activeBtn("ai")}`}
            onClick={handleFilterKeyChange("ai")}
          >
            Artificial intelligence
          </li>
          <li
            data-filter=".seo"
            className={`c-pointer ${activeBtn("other")}`}
            onClick={handleFilterKeyChange("other")}
          >
            Other
          </li>
        </ul>
        <div className="row project-active">
          <div className="col-xl-4 col-md-6 item webdev">
            <div
              className="project-item"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image">
                <img
                  src="assets/images/Certificates/css.png"
                  alt="Project Grid"
                />
              </div>
              <div className="content">
                <h5>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/rahman-karim-73a59022a/"
                    style={{ color: "white" }}
                  >
                    CSS{" "}
                  </Link>
                </h5>
                <span className="category">HackerRank</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 item webdev">
            <div
              className="project-item"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image">
                <img
                  src="assets/images/Certificates/foundation of cyber security.png"
                  alt="Project Grid"
                />
              </div>
              <div className="content">
                <h5>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/rahman-karim-73a59022a/"
                    style={{ color: "white" }}
                  >
                    Foundation of Cyber Security{" "}
                  </Link>
                </h5>
                <span className="category">Google</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 item webdev">
            <div
              className="project-item"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image">
                <img
                  src="assets/images/Certificates/frontend-developer-react.png"
                  alt="Project Grid"
                />
              </div>
              <div className="content">
                <h5>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/rahman-karim-73a59022a/"
                    style={{ color: "white" }}
                  >
                    Frontend Developer(React){" "}
                  </Link>
                </h5>
                <span className="category">HackerRank</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 item webdev">
            <div
              className="project-item"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image">
                <img
                  src="assets/images/Certificates/java.png"
                  alt="Project Grid"
                />
              </div>
              <div className="content">
                <h5>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/rahman-karim-73a59022a/"
                    style={{ color: "white" }}
                  >
                    Java{" "}
                  </Link>
                </h5>
                <span className="category">HackerRank</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 item other">
            <div
              className="project-item"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image">
                <img
                  src="assets/images/Certificates/introduction to devops.png"
                  alt="Project Grid"
                />
              </div>
              <div className="content">
                <h5>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/rahman-karim-73a59022a/"
                    style={{ color: "white" }}
                  >
                    Introduction to Devops{" "}
                  </Link>
                </h5>
                <span className="category">IBM</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 item  webdev ">
            <div
              className="project-item"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image">
                <img
                  src="assets/images/Certificates/javascript-intermediate.png"
                  alt="Project Grid"
                />
              </div>
              <div className="content">
                <h5>
                  <Link style={{ color: "white" }} href="project-details">
                    Javascript intermediate
                  </Link>
                </h5>
                <span className="category">HackerRank</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 item  other ">
            <div
              className="project-item"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image">
                <img
                  src="assets/images/Certificates/communication.png"
                  alt="Project Grid"
                />
              </div>
              <div className="content">
                <h5>
                  <Link href="project-details" style={{ color: "white" }}>
                    Communication Foundation
                  </Link>
                </h5>
                <span className="category">Linkedin Learning</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 item  mobdev ">
            <div
              className="project-item"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image">
                <img
                  src="assets/images/Certificates/introduction to mobile dev.png"
                  alt="Project Grid"
                />
              </div>
              <div className="content">
                <h5>
                  <Link href="project-details " style={{ color: "white" }}>
                    Introduction to Mobile App Development
                  </Link>
                </h5>
                <span className="category">META</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 item webdev">
            <div
              className="project-item"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image">
                <img
                  src="assets/images/Certificates/javascript.png"
                  alt="Project Grid"
                />
              </div>
              <div className="content">
                <h5>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/rahman-karim-73a59022a/"
                    style={{ color: "white" }}
                  >
                    Javascript{" "}
                  </Link>
                </h5>
                <span className="category">HackerRank</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="more-btn text-center"
        data-aos="fade-up"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <a
          target="_blank"
          href="https://www.linkedin.com/in/rahman-karim-73a59022a/"
          className="theme-btn"
        >
          View More <i className="far fa-arrow-right" />
        </a>
      </div>
    </section>
  );
};
export default ProjectsIsotope;
