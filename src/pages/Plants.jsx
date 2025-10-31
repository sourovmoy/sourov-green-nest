import React from "react";
import { useLoaderData } from "react-router";
import PlantCard from "../components/PlantsCard/PlantCard";
import * as motion from "motion/react-client";

const Plants = () => {
  const allData = useLoaderData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-14">
      {allData ? (
        allData.map((data) => (
          <motion.div
            key={data.plantId}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <PlantCard key={data.plantId} data={data}></PlantCard>
          </motion.div>
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
