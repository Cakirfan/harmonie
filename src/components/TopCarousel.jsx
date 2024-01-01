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
    "Jeder Mensch ist ein einzigartiger Schatz und dessen sind wir uns bewusst..."
  );

  const handleSlideChange = () => {
    // Update the text content based on the current active slide
    // You can customize this logic based on your requirements
    // For simplicity, let's assume each slide has unique text content
    const currentSlide = swiperRef.current.activeIndex;

    switch (currentSlide) {
      case 0:
        setText("Jeder Mensch ist ein einzigartiger Schatz und dessen sind wir uns bewusst...");
        break;
      // case 1:
      //   setText("Yeni bir metin...");
      //   break;
      // case 2:
      //   setText("Başka bir metin...");
      //   break;
      // // Add more cases for additional slides
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
          <video
            className="object-fit-cover rounded-2 lh-1"
            autoPlay
            muted
            loop
            style={{ width: "98%", height: "100%" }}
          >
            <source
              src="https://cdn.pixabay.com/vimeo/883402169/berge-188595.mp4?width=1280&hash=dd35a32cd52c7efa7e2e453438db851698f7333f"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <TypeAnimation
            style={{
              color: "white",
              fontSize: "1.8rem",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              whiteSpace: "pre-line",
              height: "195px",
              display: "block",
            }}
            sequence={[text, 3000, "0"]}
            repeat={Infinity}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TopCarousel;
