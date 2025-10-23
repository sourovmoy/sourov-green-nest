import React from "react";
import { Link, useLoaderData } from "react-router";
import HomeCard from "../components/HomeCard/HomeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Virtual, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/virtual";
import "swiper/css/effect-coverflow";
import { FaArrowRight } from "react-icons/fa";
import PlantCareTips from "../components/Tips/PlantCardTips";
import GreenExperts from "../components/GreenExpart/GreenExparts";
import Weeks from "../components/PlantsOfTheWeeks/Weeks";

const Home = () => {
  const allData = useLoaderData();
  const sixData = allData.slice(0, 6);
  const swiperData = allData.slice(6, 14);

  return (
    <div>
      <div className="my-10 bg-gradient-to-l from-[#cce7c9] to-[#acd8a7] p-8 rounded-2xl">
        <h3 className="text-center text-3xl text-green-700 font-bold mb-8">
          Make Your Home into a Garden
        </h3>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Virtual, Autoplay, Pagination, EffectCoverflow]}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper [&_.swiper-pagination-bullet]:bg-green-600 [&_.swiper-button-next]:text-green-700 [&_.swiper-button-prev]:text-green-700"
        >
          {swiperData.map((data) => (
            <SwiperSlide key={data.plantId}>
              <Link
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col items-center"
                to={`/plants/${data.plantId}`}
              >
                <img
                  src={data.image}
                  alt={data.plantName}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="p-4 text-center">
                  <h2 className="text-xl font-semibold text-green-800">
                    {data.plantName}
                  </h2>
                  <p className="text-gray-500 text-sm">{data.category}</p>
                  <p className="text-green-600 font-bold mt-2 text-lg">
                    ${data.price}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <h3 className="text-center text-3xl text-green-700 font-bold mt-20">
        Top Rated Indoor Plants
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-14 pb-3">
        {sixData ? (
          sixData.map((data) => (
            <HomeCard key={data.plantId} data={data}></HomeCard>
          ))
        ) : (
          <div className="text-4xl flex justify-center">
            <h1>No Plants Found</h1>
          </div>
        )}
      </div>
      <div className="flex justify-end">
        <Link
          to={"/plants"}
          className="text-green-700 font-medium flex items-center hover:text-green-900"
        >
          See more <FaArrowRight />
        </Link>
      </div>
      <div>
        <PlantCareTips />
      </div>
      <div>
        <Weeks allData={allData}></Weeks>
      </div>
      <div className="mt-10">
        <GreenExperts />
      </div>
    </div>
  );
};

export default Home;
