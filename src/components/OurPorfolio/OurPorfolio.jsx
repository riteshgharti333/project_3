import { useEffect } from "react";
import "./OurPorfolio.scss";
import { portfolioImgs } from "../../assets/data";
import { Link } from "react-router-dom";

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
        <p>
          TK Production Films captures all your beautiful memories with
          elegance, turning every special moment into a timeless masterpiece.
        </p>
      </div>

      <div className="ourPorfolio-cards">
        {portfolioImgs.map((item) => (
          <div className="ourPorfolio-card">
            <div className="ourPorfolio-card-inner">
              <img src={item.img} alt="California Fall Collection 2023" />
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Link to={"/porfolio"} className="porfolio-link">
        <button>
          <div className="btn-wrap">
            <span>Discover All Projects</span>
            <span>Discover All Projects</span>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default OurPorfolio;
