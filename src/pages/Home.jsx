import React from "react";
import TopCarousel from "../components/TopCarousel";
import Gründung from "../components/Gründung";
import Themen from "../components/Themen";

const Home = () => {
  return (
    <div>
      <div className="h-100" style={{ height: "100%" }}>
        <TopCarousel />
        <Gründung />
        <div style={{height:"8rem"}}></div>
        <Themen/>
      </div>
    </div>
  );
};

export default Home;
