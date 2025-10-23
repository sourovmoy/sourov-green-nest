import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";

const BookingCard = ({ plants, handelRemove }) => {
  return (
    <div>
      <div className="bg-green-100 sm:flex justify-between items-center rounded-2xl shadow-2xl px-4 py-3 sm:py-0 text-green-700 mb-5">
        <div className="flex justify-between items-baseline sm:justify-normal items-center gap-3 ">
          <div className="">
            <img
              className="w-30 h-30 object-fill my-4 rounded-lg"
              src={plants.image}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-xl font-medium text-center sm:text-start">
              {plants.plantName}
            </h2>
            <div className="flex gap-5 sm:gap-20 items-center my-2">
              <div className="flex flex-col sm:flex-row text-green-600 text-md font-medium">
                <p>Available:</p>
                <p className="">{plants.availableStock}</p>
              </div>
              <div className="flex flex-col sm:flex-row text-[#FF8811] text-md font-medium">
                <p>Price:</p>
                <p className="">{plants.price}$</p>
              </div>
              <div>
                <p className="text-[#627382] text-md flex items-center">
                  <FaStar color="orange" /> {plants.rating}
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => handelRemove(plants.plantId)}
          className="btn bg-gradient-to-l from-[#3b8132] to-[#72bf6a] hover:scale-105 text-white w-full sm:w-fit my-4 sm:my-0"
        >
          Cancel Booking
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
