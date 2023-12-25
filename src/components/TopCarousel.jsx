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
        style={{ height: "65vh", backgroundSize: "cover" }} // Set the height to 75vh
      >
        <SwiperSlide>
          <img
            className="object-fit-cover"
            src="https://cdn.pixabay.com/photo/2016/04/12/18/56/school-1325091_640.png"
            alt=""
          />
          <TypeAnimation
            style={{
              color: "white",
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
            className="object-fit-cover"
            src="https://cdn.pixabay.com/photo/2023/04/06/10/22/earth-day-7903523_640.png"
            alt=""
          />
          <TypeAnimation
            style={{
              color: "white",
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
            className="object-fit-cover"
            src="https://cdn.pixabay.com/photo/2016/11/30/12/09/question-mark-1872634_640.jpg"
            alt=""
          />
          <TypeAnimation
            style={{
              color: "white",
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
