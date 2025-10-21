import React from "react";
import { useLoaderData } from "react-router";
import HomeCard from "../components/HomeCard/HomeCard";

const Home = () => {
  const allData = useLoaderData();
  const sixData = allData.slice(0, 6);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 py-14">
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
    </div>
  );
};

export default Home;
