import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { newss } from "../helper/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const News = () => {
  return (
    <div className="container-fluid bg-body-tertiary my-5 py-5">
      <h1 className="text-center text-dark mb-4">Neuigkeiten</h1>
      <div className="row mx-3 mx-md-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            autoScroll: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper d-flex flex-wrap"
          breakpoints={{
            576: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1080: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {newss.map((news) => (
            <SwiperSlide
              key={news.id}
              className="overflow-hidden rounded-2"
            >
              <div
                className="card w-100"
                style={{ width: "30rem" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={news.image}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 className="card-title fw-semibold text-success">
                        {news.schlagzeile}
                      </h4>
                      <p className="card-text text-center">{news.desc}</p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Zuletzt aktualisiert vor {news.time} Minuten
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default News;
