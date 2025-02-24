import "./About.scss";
import { FaPlus, FaMinus } from "react-icons/fa6";

import { useState, useEffect, useRef } from "react";

import bg17 from "../../assets/images/bg17.jpg";

import bg18 from "../../assets/images/bg18.jpg";
import bg19 from "../../assets/images/bg19.jpg";
import bg20 from "../../assets/images/bg20.jpg";

import bg23 from "../../assets/images/bg23.jpg";

import CountUp from "react-countup";

import OurCore from "../../components/OurCore/OurCore";

import ClientReview from "../../components/ClientReview/ClientReview";

import OurPhotography from "../../components/OurPhotography/OurPhotography";

import AOS from "aos";
import "aos/dist/aos.css";

import overlay3 from "../../assets/images/overlay3.png";

import { TbPlayerPlayFilled } from "react-icons/tb";

import about1 from "../../assets/images/bannerimg/about-banner1.webp";
import { aboutLists } from "../../assets/data";

const About = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleList = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [startCount, setStartCount] = useState(false);
  const aboutContentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.7 }
    );

    if (aboutContentRef.current) {
      observer.observe(aboutContentRef.current);
    }

    return () => {
      if (aboutContentRef.current) {
        observer.unobserve(aboutContentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <div className="about">
      <div className="top-banner">
        <div className="about-banner">
          <div className="about-banner-desc">
            <h1>About</h1>
          </div>
        </div>
      </div>

      <div className="about-content-title">
        <img src={about1} alt="" />

        <p>
          Welcome to TK Production Films, your premier destination for capturing
          the magic of love stories! Founded and led by Taufeq Khan, a
          passionate filmmaker with over 16 years of experience, we specialize
          in creating breathtaking wedding videography that resonates across the
          globe. Taufeq's journey began in Diu, India, where he launched his
          wedding photography services. With a remarkable portfolio of over 700
          weddings and 100+ pre-wedding shoots, he possesses a unique talent for
          crafting captivating narratives that reflect the essence of each
          couple's celebration. Now proudly settled in London for the past 5
          years, TK Production extends its artistry throughout the UK, having
          conducted over 15 pre-wedding and 10+ pre-wedding couple shoots. Our
          services reach vibrant cities across India, including Mumbai and
          Ahmedabad, and we capture stunning couple shoots in picturesque
          locations such as Lisbon, Portugal, enriching your love story with
          unforgettable backdrops.
        </p>

        <p>
          In addition to our photography and videography services, we actively
          participate in various city trade expos, showcasing our work and
          connecting with couples seeking to immortalize their special moments.
          At TK Production, we believe that every couple deserves a unique
          narrative that shines through in every frame. Our artistic approach
          and keen attention to detail ensure we create stunning visuals that
          resonate for a lifetime. Our commitment to excellence guarantees
          unparalleled service, making your wedding memories truly
          unforgettable.
        </p>

        <p>
          Join us at TK Production Films as we craft timeless memories that you
          and your loved ones will cherish forever. Let us bring your love story
          to life!
        </p>
      </div>

      <div className="about-big-img" data-aos="fade-up">
        <img src={bg17} alt="About Us" />
      </div>

      <div className="about-overlay">
        <img src={overlay3} alt="" />
      </div>

      <div className="about-content" ref={aboutContentRef}>
        <div className="about-content-left">
          <div className="about-content-left-top">
            <img src={bg18} alt="" data-aos="fade-up" data-aos-offset="700" />

            <div className="about-content-left-top-right">
              <h1>
                Our <span className="line-break">Vision</span>
              </h1>
              <p>
                At <span className="bold-text">TK Production Films</span>, we
                craft visual narratives that embody love and celebration.
                Through our lens, we capture the essence of your unique story,
                preserving moments that turn into timeless memories. Our passion
                lies in storytelling, ensuring every frame reflects the beauty,
                joy, and emotions of your special journey. With creativity and
                dedication, we transform fleeting moments into a lasting legacy,
                allowing you to relive your cherished experiences for years to
                come. Your story, beautifully told.
              </p>
            </div>
          </div>

          <div className="about-content-left-bottom">
            <div className="about-content-left-content">
              <div className="about-content-left-content-top">
                <h1>
                  <CountUp
                    start={startCount ? 0 : null}
                    end={70}
                    duration={2.5}
                  />
                  %
                </h1>
                <p>Customer Satisfaction</p>
              </div>

              <hr className="about-content-left-bottom-line" />
            </div>

            <div className="about-content-left-content">
              <div className="about-content-left-content-top">
                <h1>
                  <CountUp
                    start={startCount ? 0 : null}
                    end={1500}
                    duration={2.5}
                  />
                  +
                </h1>

                <p>Photography Session</p>
              </div>

              <hr className="about-content-left-bottom-line" />
            </div>
          </div>
        </div>

        <div className="about-content-right">
          <img src={bg19} alt="" data-aos="fade-up" data-aos-offset="700" />
        </div>
      </div>

      <div className="about-content2">
        <div className="about-content2-img">
          <img src={bg20} alt="Why Choose Us" />
        </div>

        <div className="about-content2-desc">
          <h1>
            Why Choose <span className="line-break">Us</span>
          </h1>

          <div className="about-content2-lists">
            {aboutLists.map((list, index) => (
              <div key={index} className="about-content2-list">
                <div
                  className={`about-content2-list-top ${
                    openIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleList(index)}
                >
                  <h3>{list.title}</h3>
                  {openIndex === index ? (
                    <FaMinus className="about-content2-icon" />
                  ) : (
                    <FaPlus className="about-content2-icon" />
                  )}
                </div>
                <p
                  className={`about-content2-desc-text ${
                    openIndex === index ? "open" : ""
                  }`}
                >
                  {list.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="experience">
            <div className="experience-circle">
              <h4>16+</h4>
            </div>
            <h2>Years Experience</h2>
          </div>
        </div>
      </div>

      <div class="about-content3">
        <div class="scrolling-container">
          <div class="scrolling-content">
            <h1>TK</h1>
            <h1>Production </h1>
            <h1>Films</h1>
          </div>
          <div class="scrolling-content">
            <h1>TK</h1>
            <h1>Production </h1>
            <h1>Films</h1>
          </div>
        </div>
      </div>

      <div className="about-content4">
        <img src={bg23} alt="" />

        <div className="player">
          <TbPlayerPlayFilled className="player-icon" />
        </div>
      </div>

      <div className="core-option">
        <OurCore />
      </div>

      <ClientReview />

      <OurPhotography />
    </div>
  );
};

export default About;
