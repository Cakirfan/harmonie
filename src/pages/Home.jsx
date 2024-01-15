import React from "react";
import TopCarousel from "../components/TopCarousel";
import Gründung from "../components/Gründung";
import Themen from "../components/Themen";
import News from "../components/News"


const Home = () => {
  return (
    <div>
      <div className="h-100" style={{ height: "100%", backgroundColor: "#fff" }}>
        <TopCarousel />
        <Gründung />
        <News />
        <Themen />
      </div>
    </div>
  );
};

export default Home;
