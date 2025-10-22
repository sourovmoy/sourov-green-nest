import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { Link } from "react-router";

const HomeCard = ({ data }) => {
  //   console.log(data);

  return (
    <Link to={`/plants/${data.plantId}`}>
      <div className="bg-white dark:bg-green-900 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
        <div className="relative">
          <img
            src={data.image}
            alt={data.plantName}
            className="w-full h-56 object-cover"
          />
          <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {data.category}
          </span>
        </div>

        <div className="p-5">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
            {data.plantName}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300 mb-2 line-clamp-2">
            {data.description}
          </p>

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center text-yellow-500">
              <IoStarSharp className="w-4 h-4 fill-yellow-500" />
              <span className="ml-1 text-sm font-medium text-gray-600 dark:text-gray-200">
                {data.rating}
              </span>
            </div>
            <span className="text-green-700 dark:text-green-300 font-semibold">
              ${data.price}
            </span>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span
              className={`text-sm ${
                data.availableStock > 0
                  ? "text-green-600 dark:text-green-300"
                  : "text-red-500"
              }`}
            >
              {data.availableStock > 0
                ? `${data.availableStock} in stock`
                : "Out of stock"}
            </span>

            <button className="flex items-center gap-2 bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-green-700 transition-all duration-200">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;
