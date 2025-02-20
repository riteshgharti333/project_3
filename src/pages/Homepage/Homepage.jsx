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
import AboutAgency from "../../components/AboutAgency/AboutAgency";
import OurFeatures from "../../components/OurFeatures/OurFeatures";
import OurCore from "../../components/OurCore/OurCore";
import OurPorfolio from "../../components/OurPorfolio/OurPorfolio";
import ContactSection from "../../components/ContactSection/ContactSection";
import FollowSection from "../../components/FollowSection/FollowSection";
import PhotoAlbums from "../../components/PhotoAlbums/PhotoAlbums";

const Homepage = () => {
  return (
    <div className="homepage">
      <HomeBanner />

      <div className="homepage-container">
        <OurService />

        <PhotoAlbums />

        <AboutAgency />

        <OurFeatures />

        <OurCore />

        <OurPorfolio />
      </div>

      <ClientReview />

      <Getintouch />

      {/* <ContactSection /> */}

      <FollowSection />
    </div>
  );
};

export default Homepage;
