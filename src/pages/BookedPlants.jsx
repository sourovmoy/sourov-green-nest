import React, { useEffect, useState } from "react";
import { getPlants, removePlants } from "../LocalStorage/LocalStorage";
import BookingCard from "../BookedPlants/BookingCard";

const BookedPlants = () => {
  const [booked, setBooked] = useState([]);

  useEffect(() => {
    const plants = getPlants();
    if (plants) {
      setBooked(plants);
    }
  }, []);
  const handelRemove = (id) => {
    const filterPlants = booked.filter((plant) => plant.plantId !== id);
    setBooked(filterPlants);
    removePlants(id);
  };

  return (
    <div>
      <h3 className="text-center font-bold text-3xl text-green-700 mt-10 mb-5 h-screen">
        Your Booking Lists ({booked.length})
      </h3>
      <div className="">
        {booked.map((plants) => (
          <BookingCard
            key={plants.plantId}
            plants={plants}
            handelRemove={handelRemove}
          ></BookingCard>
        ))}
      </div>
    </div>
  );
};

export default BookedPlants;
