import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const news = () => {
  return (
    <div className="container-fluid my-5 bg-dark py-5">
      <h1 className="text-center text-white mb-4">Neuigkeiten</h1>
      <div className="row mx-3 mx-md-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 3000, // Set the autoplay delay in milliseconds
            disableOnInteraction: false, // Allow manual interaction to disable autoplay
          }}
          pagination={{
            clickable: true,
            autoScroll: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper d-flex flex-wrap"
          breakpoints={{
            // Set different configurations for different screen sizes
            576: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide className="overflow-hidden rounded-2">
            <div
              class="card w-100"
              style={{ width: "30rem", minWidth: "25rem" }}
            >
              <div class="row g-0">
                <div class="col-md-5">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/04/04/15/34/shelf-3290109_640.jpg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden rounded-2">
            <div class="card w-100" style={{ width: "30rem" }}>
              <div class="row g-0">
                <div class="col-md-5">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/04/04/15/34/shelf-3290109_640.jpg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden rounded-2">
            <div class="card w-100" style={{ width: "30rem" }}>
              <div class="row g-0">
                <div class="col-md-5">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/04/04/15/34/shelf-3290109_640.jpg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden rounded-2">
            <div class="card w-100" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-5">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/04/04/15/34/shelf-3290109_640.jpg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden rounded-2">
            <div class="card w-100" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-5">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/04/04/15/34/shelf-3290109_640.jpg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden rounded-2">
            <div class="card w-100" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-5">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/04/04/15/34/shelf-3290109_640.jpg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden rounded-2">
            <div class="card w-100" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-5">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/04/04/15/34/shelf-3290109_640.jpg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden rounded-2">
            <div class="card w-100" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-5">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/04/04/15/34/shelf-3290109_640.jpg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default news;
