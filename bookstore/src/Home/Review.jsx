import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa6";
import Image from "../assets/profile.jpg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customers
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg ">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt animi, excepturi corrupti atque, cumque rem quasi
                  dolorem commodi, facere a temporibus sunt sint laudantium
                  numquam magnam vitae sapiente accusamus nisi!
                </p>
                <img class="w-10 h-10 mb-4 rounded-full" src={Image} alt="Rounded avatar"></img>
                <h5 className="text-lg font-medium ">Mark Ping</h5>
                <p className="text-base ">CEO, ABC Company </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg ">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt animi, excepturi corrupti atque, cumque rem quasi
                  dolorem commodi, facere a temporibus sunt sint laudantium
                  numquam magnam vitae sapiente accusamus nisi!
                </p>
                <img class="w-10 h-10 mb-4 rounded-full" src={Image} alt="Rounded avatar"></img>
                <h5 className="text-lg font-medium ">Mark Ping</h5>
                <p className="text-base ">CEO, ABC Company </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg ">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt animi, excepturi corrupti atque, cumque rem quasi
                  dolorem commodi, facere a temporibus sunt sint laudantium
                  numquam magnam vitae sapiente accusamus nisi!
                </p>
                <img class="w-10 h-10 mb-4 rounded-full" src={Image} alt="Rounded avatar"></img>
                <h5 className="text-lg font-medium ">Mark Ping</h5>
                <p className="text-base ">CEO, ABC Company </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt animi, excepturi corrupti atque, cumque rem quasi
                  dolorem commodi, facere a temporibus sunt sint laudantium
                  numquam magnam vitae sapiente accusamus nisi!
                </p>
                <img class="w-10 h-10 mb-4 rounded-full" src={Image} alt="Rounded avatar"></img>
                <h5 className="text-lg font-medium ">Mark Ping</h5>
                <p className="text-base ">CEO, ABC Company </p>
              </div>
            </div>
          </SwiperSlide>

          
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
