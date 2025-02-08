import "./Homepage.scss";

import HomeBanner from "../../components/HomeBanner/HomeBanner";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import HomeSection2 from "../../components/HomeSection2/HomeSection2";
import PortfolioSection from "../../components/PortfolioSection/PortfolioSection";
import HomeSection3 from "../../components/HomeSection3/HomeSection3";
import OurService from "../../components/OurService/OurService";
import ClientReview from "../../components/ClientReview/ClientReview";
import Getintouch from "../../components/Getintouch/Getintouch";

import RingLine from "../../components/RingLine/RingLine";

const Homepage = () => {
  return (
    <div className="homepage">
      <HomeBanner />

      <div className="homepage-container">
        <WhoWeAre />

        <RingLine />

        <HomeSection2 />

        <RingLine />

        <PortfolioSection />

        <RingLine />

        <HomeSection3 />

        <RingLine />

        <OurService />

        <RingLine />
      </div>

      <ClientReview />

      <RingLine />

      <Getintouch />
    </div>
  );
};

export default Homepage;
