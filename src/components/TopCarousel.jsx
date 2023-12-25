import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { TypeAnimation } from "react-type-animation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TopCarousel = () => {
  const [text, setText] = useState(
    "Bu Alana istenilen herhangi bir yazi eklenebilir..."
  );

  const handleSlideChange = () => {
    // Update the text content based on the current active slide
    // You can customize this logic based on your requirements
    // For simplicity, let's assume each slide has unique text content
    const currentSlide = swiperRef.current.activeIndex;

    switch (currentSlide) {
      case 0:
        setText("Bu Alana istenilen herhangi bir yazi eklenebilir...");
        break;
      case 1:
        setText("Yeni bir metin...");
        break;
      case 2:
        setText("Başka bir metin...");
        break;
      // Add more cases for additional slides
      default:
        setText("");
    }
  };

  const swiperRef = useRef(null);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        className="mySwiper"
        style={{ height: "65vh" }} // Set the height to 75vh
      >
        <SwiperSlide>
          <img
            src="https://cdn.pixabay.com/photo/2023/11/03/17/41/hummingbird-hawk-moth-8363573_640.jpg"
            alt=""
          />
          <TypeAnimation
            style={{
              color: "orangered",
              fontSize: "1rem",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              whiteSpace: "pre-line",
              height: "195px",
              display: "block",
            }}
            sequence={[text, 1000, "0"]}
            repeat={Infinity}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.pixabay.com/photo/2023/11/02/10/19/bird-8360220_640.jpg"
            alt=""
          />
          <TypeAnimation
            style={{
              color: "orangered",
              fontSize: "1rem",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              whiteSpace: "pre-line",
              height: "195px",
              display: "block",
            }}
            sequence={[text, 1000, ""]}
            repeat={Infinity}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=""
            src="https://cdn.pixabay.com/photo/2023/09/04/10/31/swan-8232481_640.jpg"
            alt=""
          />
          <TypeAnimation
            style={{
              color: "orangered",
              fontSize: "1rem",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              whiteSpace: "pre-line",
              height: "195px",
              display: "block",
            }}
            sequence={[text, 1000, ""]}
            repeat={Infinity}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TopCarousel;
