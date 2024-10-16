import React, { useState } from "react";
import "./css/Portfolio.css";

// Import your images
import groceryImage from "./assets/p3.png"; // Update with your actual image names
import project2Image from "./assets/p2.png"; // Add more images as needed
import project3Image from "./assets/p1.png"; // Add more images as needed

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: groceryImage,
      text: "Grocery Go simplifies shopping with personalized recommendations and real-time inventory tracking, making your grocery experience faster and hassle-free!",
    },
    {
      src: project2Image,
      text: "Grocery Go: Discover an effortless shopping experience with our diverse range of quality grocery products!",
    },
    {
      src: project3Image,
      text: "Grocery Go: Simplifying your shopping journey with seamless cart functionality for quick and easy checkout!",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio-title">My Portfolio</h2>
      <div className="portfolio-slider">
        <button className="slider-button prev-button" onClick={handlePrev}>
          &lt;
        </button>
        <div className="portfolio-image">
          <img src={images[currentIndex].src} alt="Portfolio" />
          <p>{images[currentIndex].text}</p>
        </div>
        <button className="slider-button next-button" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
