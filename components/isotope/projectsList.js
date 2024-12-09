import PageBanner from "@/components/PageBanner";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import Link from "next/link";
const ProjectList = () => {
  return (
    <section className="project-list-area py-130 rpy-100">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xl-9 col-lg-11">
            <div
              className="section-title mb-60"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h2>My Recent Projects</h2>
            </div>
          </div>
        </div>
        <div className="project-item style-two">
          <div
            className="image"
            data-aos="fade-left"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div style={{ backgroundColor: "#781D7D" }}>
              <img
                src="assets/images/Websites-banners/gwdm.png"
                alt="Project List"
                style={{ padding: "20px" }}
              />
            </div>
          </div>
          <div
            className="content"
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <p className="category" href="#">
              React.js , Mongodb
            </p>
            <h2>
              <Link href="https://www.goodwillmovement.com.au/">
                Goodwill Disability Movement
              </Link>
            </h2>
            <p>
              Goodwill Disability Movement is an NDIS provider working with
              people with disability to make it easier for them to access
              services they require under the NDIS support service. We aim to
              create an environment of service provision which creates a
              smoother journey for all involved, including our staff and
              participants.
            </p>
            <Link
              target="_blank"
              href="https://www.goodwillmovement.com.au/"
              className="details-btn"
            >
              <i className="far fa-arrow-right" />
            </Link>
          </div>
        </div>
        <div className="project-item style-two">
          <div
            className="content"
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <p className="category">Node js, Javascript</p>
            <h2>
              <Link
                target="_blank"
                href="https://github.com/Rahmankarim/ThoughtNest"
              >
                ThoughtNest
              </Link>
            </h2>
            <p>
              ThoughtNest is a web application designed for managing and
              interacting with blog content. It features user authentication,
              allowing users to register, log in, and manage their profiles. The
              application supports CRUD operations on blog posts, enabling users
              to create, read, update, and delete their content.
            </p>
            <Link
              target="_blank"
              href="https://github.com/Rahmankarim/ThoughtNest"
              className="details-btn"
            >
              <i className="far fa-arrow-right" />
            </Link>
          </div>
          <div
            className="image"
            data-aos="fade-left"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div style={{ backgroundColor: "#781D7D" }}>
              <img
                src="assets/images/Websites-banners/thoughtsNest.png"
                alt="Project List"
              />
            </div>
          </div>
        </div>
        <div className="project-item style-two">
          <div
            className="image"
            data-aos="fade-left"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img
              src="assets/images/Websites-banners/smileCrafter.png"
              alt="Project List"
            />
          </div>
          <div
            className="content"
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <p className="category" href="#">
              Html, CSS ,Javascript, Bootstrap, Typescript{" "}
            </p>
            <h2>
              <Link
                target="_blank"
                href="https://github.com/Rahmankarim/SmileCrafters"
              >
                SmileCrafter{" "}
              </Link>
            </h2>
            <p>
              SmileCrafter is a captivating static website meticulously designed
              to spread joy and inspiration through creativity. Crafted with
              HTML, CSS, JavaScript and Bootstrap, SmileCrafter embodies the
              essence of imagination, innovation, and happiness.
            </p>
            <Link
              target="_blank"
              href="https://github.com/Rahmankarim/SmileCrafters"
              className="details-btn"
            >
              <i className="far fa-arrow-right" />
            </Link>
          </div>
        </div>
        <div className="project-item style-two">
          <div
            className="content"
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a className="category" href="#">
              HTML5, CSS, Javascript, Bootstrap , Typescript{" "}
            </a>
            <h2>
              <Link
                target="_blank"
                href="https://github.com/Rahmankarim/HelpingHands"
              >
                HelpingHands{" "}
              </Link>
            </h2>
            <p>
              Helping Hand is a dynamic static website dedicated to extending
              support and empowering lives through acts of kindness and
              generosity. Developed using a combination of HTML, CSS,
              JavaScript, and Bootstrap framework.
            </p>
            <Link
              target="_blank"
              href="https://github.com/Rahmankarim/HelpingHands"
              className="details-btn"
            >
              <i className="far fa-arrow-right" />
            </Link>
          </div>
          <div
            className="image"
            data-aos="fade-left"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img
              src="assets/images/Websites-banners/Helpng-Hand.png"
              alt="Project List"
            />
          </div>
        </div>
        <div className="project-item style-two">
          <div
            className="image"
            data-aos="fade-left"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img
              src="assets/images/Websites-banners/TrendHive.png"
              alt="Project List"
            />
          </div>
          <div
            className="content"
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a className="category" href="#">
              HTML5, CSS, Javascript, Bootstrap , Typescript{" "}
            </a>
            <h2>
              <Link
                target="_blank"
                href="https://rahmankarim.github.io/TrendHive/"
              >
                TrendHive
              </Link>
            </h2>
            <p>
              TrendHive is a multitude of static pages dedicated to the latest
              trends, clothing collections, and style inspirations. Crafted with
              HTML, CSS, JavaScript, and Bootstrap (FrameWork).
            </p>
            <Link
              target="_blank"
              href="https://rahmankarim.github.io/TrendHive/"
              className="details-btn"
            >
              <i className="far fa-arrow-right" />
            </Link>
          </div>
        </div>
        <div className="project-item style-two">
          <div
            className="content"
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a className="category" href="#">
              Html, CSS ,Javascript,Bootstrap, Typescript{" "}
            </a>
            <h2>
              <Link
                target="_blank"
                href="https://github.com/Rahmankarim/Gemify"
              >
                Gemify{" "}
              </Link>
            </h2>
            <p>
              Gemify is a sophisticated static website designed to showcase
              exquisite jewelry collections. Built using HTML, CSS, JavaScript,
              and Bootstrap, Gemify combines modern web design with elegant
              aesthetics. Our website offers a seamless user experience,
              allowing visitors to explore our stunning jewelry pieces with
              ease.
            </p>
            <Link
              target="_blank"
              href="https://github.com/Rahmankarim/Gemify"
              className="details-btn"
            >
              <i className="far fa-arrow-right" />
            </Link>
          </div>
          <div
            className="image"
            data-aos="fade-left"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img
              src="assets/images/Websites-banners/Gemify.png"
              alt="Project List"
            />
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
            href="https://github.com/Rahmankarim"
            className="theme-btn"
          >
            View More <i className="far fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default ProjectList;
