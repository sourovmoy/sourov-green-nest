import React from "react";
import { useLoaderData } from "react-router";
import PlantCard from "../components/PlantsCard/PlantCard";

const Plants = () => {
  const allData = useLoaderData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 py-14">
      {allData ? (
        allData.map((data) => (
          <PlantCard key={data.plantId} data={data}></PlantCard>
        ))
      ) : (
        <div className="text-4xl flex justify-center">
          <h1>No Plants Found</h1>
        </div>
      )}
    </div>
  );
};

export default Plants;
