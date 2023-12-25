import React from "react";
import { TypeAnimation } from "react-type-animation";

const TopCarousel = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide rounded-2 overflow-hidden mx-auto z-0 shadow-lg"
      data-bs-ride="carousel"
      style={{ width: "90%", height: "75vh" }}
    >
      <div className="carousel-inner z-0">
        <div className="carousel-item active">
          <img
            src="https://cdn.pixabay.com/photo/2023/06/11/14/45/apple-8056182_1280.jpg"
            className="d-block w-100"
            height="100%"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.pixabay.com/photo/2016/07/13/12/14/inspiration-1514296_1280.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.pixabay.com/photo/2017/09/14/08/28/head-2748333_1280.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <TypeAnimation
        style={{
          color: "orangered",
          fontSize: "2rem",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          whiteSpace: "pre-line",
          height: "195px",
          display: "block",
        }}
        sequence={[
          `Line one\nLine Two\nLine Three\nLine Four\nLine Five\n\nLine Seven`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
          1000,
          "",
        ]}
        repeat={Infinity}
      />
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default TopCarousel;
