import "./About.scss";
import banner_img from "../../assets/images/m2.jpg";
import { FaCircle } from "react-icons/fa6";
import ClientReview from "../../components/ClientReview/ClientReview";
import RingLine from "../../components/RingLine/RingLine";

const About = () => {
  return (
    <div className="about">
      <div className="about-banner">
        <img src={banner_img} alt="" />
      </div>

      <div className="about-container">
        <div className="about-content">
          <div className="about-content-left">
            <h1>True Shades Photography</h1>
            <p>
              True Shades Photography is a sterling example of the light and
              shade in our lives, of the subtle nuances that are -and yet are
              not- of the palette of events that move along timeless corridors,
              where beauty and passion stand intertwined.
            </p>

            <p>
              Every day we celebrate our existence with delectable shades of
              color, vibrant hues of festivity, bonding and glamour that spell
              the eternal romance of life. We do it with a difference—we capture
              these hues in pixels that transform them into True Shades- a
              treasure house of the ‘impossible and the remarkable.”
            </p>

            <p>
              With ten years of solid experience to back us in dealing with
              quality photography, we have never stopped aiming for perfection
              in what we do. Our work speaks volumes for itself and needs no
              sponsor. We, at True Shades Photography, put our hearts into the
              click and bring life into the picture.
            </p>
          </div>

          

          <div className="about-content-right">
            <div className="about-content-right-top">
              <h1>Principles Of Our Work</h1>
              <ul>
                <li>
                  <FaCircle className="li-icon" /> Integrity and Honesty
                </li>
                <li>
                  <FaCircle className="li-icon" /> Quality over quantity
                </li>
                <li>
                  <FaCircle className="li-icon" /> Our assets are our clients &
                  team
                </li>
              </ul>
            </div>

            <div className="about-content-right-bottom">
              <h1>Our Experience</h1>
              <p>
                The only source of knowledge is experience. We are glad to be a
                part of the wedding industry since 8 years.
              </p>
            </div>
          </div>
        </div>

        <RingLine />

        <div className="about-content2">
          <h1>Founder</h1>
          <img src={banner_img} alt="" />
          <div className="about-content2-name">
            <h4 className="founder-name">Arshid Bhimji</h4>
            <p className="founder-title">Founder</p>
          </div>

          <div className="founder-desc">
            <p>
              With a keen eye, the ability to use gradients, light and colors,
              stunning creativity and the talent to capture good frames in
              adverse situations, Arshid Bhimji has what it takes to be a pro
              photographer & cinematographer and has made him what he is today.
            </p>
            <p>
              Arshid started small- a compositor in the VFX industry and made
              his mark in all the multinational studios. He worked in- be it
              Prana Studios, Reliance Media Works or UTV. He learned, studied,
              observed, worked hard and the wells of passion were watered and
              fueled by tremendous energy and a burning desire to make it big.
            </p>

            <p>
              Arshid Bhimji turns the ordinary into extraordinary therein lies
              his artistic skill. He renders photographs with ingenuity and a
              passion that is unique to him and every picture speaks a thousand
              words. His goal to create a huge bench mark in this form of art,
              seems like to be going his way. He believes hardwork and his keep
              learning nature, is the key to make his dreams come true.
            </p>
          </div>
        </div>

        <RingLine />

        <div className="about-content3">
          <h1>Client Reviews</h1>

          <div className="client-reviews">
            <ClientReview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
