import "./Homepage.scss";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import ring from "../../assets/images/ring.png";
import m1 from "../../assets/images/m1.jpg";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import ring_svg from "../../assets/images/ring.svg";
import RingLine from "../../components/RingLine/RingLine";

const Homepage = () => {
  return (
    <div className="homepage">
      <HomeBanner />

      <div className="banner2">
        <div className="banner2-card">
          <h1>One Of The Best Wedding Photographers In Mumbai</h1>
          <p>
            With an array of photographic and related services, True Shades
            Photography has grown into one of the best wedding photographers in
            Mumbai. The fusion of human emotions with their own different hues
            captured in pixels makes up True Shades Photography.
          </p>

          <div className="banner2-buttons">
            <button className="b2-button">Photography</button>
            <button className="b2-button">Films</button>
          </div>
        </div>

        <RingLine />

        <div className="banner2-card">
          <h1>Featured In</h1>
          <div className="banner2-imgs">
            <img src={m1} alt="" className="banner2-img" />
            <img src={m1} alt="" className="banner2-img" />
            <img src={m1} alt="" className="banner2-img" />
            <img src={m1} alt="" className="banner2-img" />
          </div>
        </div>

        <RingLine />


        <div className="banner2-card">
          <h1>We are One Of the Best Wedding Photographers in Mumbai</h1>
          <p>
            We are one of the Best Wedding <strong>Photography</strong> in
            Mumbai! Events such as weddings are about traditions and rituals,
            about momentous moments, about journeys of discovery and about new
            relationships. To cement all of that together you need something
            strong, something beautiful and something everlasting. That’s what
            True Shades <strong>Photography</strong> creates for you-beautiful
            memories that outlive time and space with our specialized Candid
            Photography
          </p>

          <p>
            In Mumbai, things are always happening and competition is
            cut-throat, but amidst it all we are there for you, providing
            artistically and <strong>Stylistically</strong> the joyous moments
            of a lifetime. Love may be in the air, but we capture that too by
            not missing out on those hidden glances, the subtle displays of
            affection, the latent nuances that emerge stealthily—oblivious to
            all eyes but that of our camera!
          </p>
        </div>

        <RingLine />


        <div className="banner2-card">
          <h1>Candid Photographer speak Volumes!</h1>
          <p>
            A peep into our work on Candid Photography by our Candid{" "}
            <strong> Photographers</strong> will show you how stimulating we can
            be and why we chose True Shades Photography as our signature. We
            understand the meaning of business success and know what it takes to
            get there. For all practical purposes we may be photographers, but
            we believe that it’s an art that goes beyond the mere
            technicalities. It’s a passion for us and each photograph is a
            commitment towards excellence.
          </p>

          <p>
            Dynamism, diligence and perfection, you may say, are our middle
            names—so if you do need to pep up your special day, do reach out to
            us. If you’re in Mumbai, we’ll make your special day{" "}
            <strong>Extraordinary </strong>
            for you—through the color and romance of our candid photography
            services. Post processing also plays a virtual part in making us One
            Of The Best Wedding Photographers in Mumbai
          </p>
        </div>

        <RingLine />


        <div className="banner2-card">
          <h1>Client Reviews</h1>

          <div className="review-cards">
            <ReviewCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
