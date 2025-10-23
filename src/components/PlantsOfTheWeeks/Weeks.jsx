import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/virtual";
import { FaStar } from "react-icons/fa";
import { Atom } from "react-loading-indicators";
import { Link } from "react-router";

const Weeks = ({ allData }) => {
  if (!allData) {
    return (
      <div className="flex justify-center items-center">
        <Atom color="#32cd32" size="medium" text="" textColor="" />
      </div>
    );
  }

  const randomPlant = allData[Math.floor(Math.random() * allData.length)];

  return (
    <div>
      <section className="bg-green-50 py-12 px-6 text-center rounded-3xl shadow-lg">
        <h2 className="text-3xl font-bold text-green-700 mb-6">
          Plant of the Week
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-20 my-5">
          <img
            src={randomPlant.image}
            alt="Snake Plant"
            className="w-64 h-64 rounded-2xl object-cover shadow-lg border-4 border-green-400"
          />
          <div className="max-w-md text-left">
            <h3 className="text-2xl font-semibold text-green-800">
              {randomPlant.plantName}
            </h3>
            <p className="text-gray-600 mt-2 mb-10">
              {randomPlant.description}
            </p>
            <Link
              to={`/plants/${randomPlant.plantId}`}
              className="mt-5 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition"
            >
              Learn More
            </Link>
          </div>
        </div>
        <Swiper
          modules={[Virtual, Autoplay]}
          speed={2000}
          slidesPerView={1}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          virtual
          className="mt-4 rounded-xl"
        >
          <SwiperSlide virtualIndex={1}>
            <p className="font-medium text-green-900">
              Plant Name: {randomPlant.plantName}
            </p>
          </SwiperSlide>
          <SwiperSlide virtualIndex={2}>
            <p className="font-medium text-green-900">
              Category: {randomPlant.category}
            </p>
          </SwiperSlide>
          <SwiperSlide virtualIndex={3}>
            <p className="font-medium text-green-900">
              Price: {randomPlant.price}
            </p>
          </SwiperSlide>
          <SwiperSlide virtualIndex={4}>
            <p className="font-medium text-green-900 flex items-center justify-center">
              Rating: {randomPlant.rating} <FaStar color="orange" />
            </p>
          </SwiperSlide>
          <SwiperSlide virtualIndex={5}>
            <p className="font-medium text-green-900 gap-2">
              Available: {randomPlant.availableStock} piece
            </p>
          </SwiperSlide>
          <SwiperSlide virtualIndex={6}>
            <p className="font-medium text-green-900">
              Description: {randomPlant.description}{" "}
            </p>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Weeks;
