import { useEffect } from "react";
import "./OurPorfolio.scss";
import card_1 from "../../assets/images/1.jpg";
import card_2 from "../../assets/images/2.jpg";

const OurPorfolio = () => {
  useEffect(() => {
    // Function to apply tilt effect on mouse move
    const cards = document.querySelectorAll(".ourPorfolio-card");

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const { width, height, left, top } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        // Calculate the tilt based on the mouse position
        const xRotation = (y / height - 0.2) * 10; // Vertical tilt
        const yRotation = (x / width - 0.2) * -10; // Horizontal tilt

        // Apply tilt transform with perspective
        card.querySelector(".ourPorfolio-card-inner").style.transform = `
          perspective(1000px)
          rotateX(${xRotation}deg)
          rotateY(${yRotation}deg)
        `;
      });

      card.addEventListener("mouseleave", () => {
        // Reset tilt when mouse leaves the card
        card.querySelector(".ourPorfolio-card-inner").style.transform = `
          perspective(1000px)
          rotateX(0deg)
          rotateY(0deg)
        `;
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div className="ourPorfolio">
      <div className="ourPorfolio-top">
        <h1>Our Portfolio</h1>
        <p>Kimono captures all of your beautiful memories</p>
      </div>

      <div className="ourPorfolio-cards">
        <div className="ourPorfolio-card">
          <div className="ourPorfolio-card-inner">
            <img src={card_1} alt="California Fall Collection 2023" />
            <h2>California Fall Collection 2023</h2>
            <p>By Jonathon Willson</p>
          </div>
        </div>

        <div className="ourPorfolio-card">
          <div className="ourPorfolio-card-inner">
            <img src={card_2} alt="California Fall Collection 2023" />
            <h2>California Fall Collection 2023</h2>
            <p>By Jonathon Willson</p>
          </div>
        </div>

        <div className="ourPorfolio-card">
          <div className="ourPorfolio-card-inner">
            <img src={card_2} alt="California Fall Collection 2023" />
            <h2>California Fall Collection 2023</h2>
            <p>By Jonathon Willson</p>
          </div>
        </div>

        <div className="ourPorfolio-card">
          <div className="ourPorfolio-card-inner">
            <img src={card_1} alt="California Fall Collection 2023" />
            <h2>California Fall Collection 2023</h2>
            <p>By Jonathon Willson</p>
          </div>
        </div>
      </div>

      <button>
        <div className="btn-wrap">
          <span>Discover All Projects</span>
          <span>Discover All Projects</span>
        </div>
      </button>
    </div>
  );
};

export default OurPorfolio;
