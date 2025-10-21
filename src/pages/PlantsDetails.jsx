import React from "react";
import { BiHeart } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link, useLoaderData, useParams } from "react-router";

const PlantsDetails = () => {
  const { id } = useParams();
  const allData = useLoaderData();
  const plant = allData.find((p) => p.plantId === Number(id));
  console.log(plant);

  return (
    <div>
      <div className="min-h-screen bg-green-50 dark:bg-gray-900 py-10 px-6">
        <div className="max-w-6xl mx-auto bg-white dark:bg-green-950 rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-green-100 dark:border-green-800">
            <Link
              to={"/plants"}
              className="flex items-center text-green-700 dark:text-green-300 hover:text-green-900 transition"
            >
              <FaArrowLeft className="w-5 h-5 mr-2" />
              Back to Plants
            </Link>
            <h1 className="text-2xl font-bold text-green-800 dark:text-green-100">
              {plant.plantName}
            </h1>
          </div>

          {/* Main Details */}
          <div className="grid md:grid-cols-2 gap-10 p-8">
            {/* Left Image */}
            <div className="flex justify-center items-center">
              <img
                src={plant.image}
                alt={plant.plantName}
                className="rounded-2xl shadow-lg w-full max-w-md hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Right Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-green-800 dark:text-green-100 mb-3">
                {plant.plantName}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {plant.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-4">
                <span className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 px-3 py-1 rounded-full text-sm font-semibold">
                  🌿 {plant.category}
                </span>
                <span className="bg-yellow-100 dark:bg-yellow-700 text-yellow-700 dark:text-yellow-100 px-3 py-1 rounded-full text-sm font-semibold">
                  ⭐ {plant.rating}
                </span>
                <span className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-100 px-3 py-1 rounded-full text-sm font-semibold">
                  🧤 Care: {plant.careLevel}
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-2">
                Price: ${plant.price}
              </h3>

              <p
                className={`text-sm mb-4 font-medium ${
                  plant.availableStock > 0
                    ? "text-green-600 dark:text-green-300"
                    : "text-red-500"
                }`}
              >
                {plant.availableStock > 0
                  ? `${plant.availableStock} in stock`
                  : "Out of stock"}
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Provided by:{" "}
                <span className="font-semibold text-green-700 dark:text-green-200">
                  {plant.providerName}
                </span>
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-green-700 transition">
                  <HiOutlineShoppingBag className="w-5 h-5" />
                  Buy Now
                </button>

                <button className="flex items-center gap-2 bg-pink-100 text-pink-600 dark:bg-pink-800 dark:text-pink-200 px-6 py-3 rounded-xl font-semibold shadow hover:bg-pink-200 dark:hover:bg-pink-700 transition">
                  <BiHeart className="w-5 h-5" />
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantsDetails;
