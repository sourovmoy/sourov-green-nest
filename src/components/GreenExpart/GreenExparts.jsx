import React, { useEffect, useState } from "react";
import * as motion from "motion/react-client";

const GreenExperts = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch("/greenExpats.json")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  }, []);

  return (
    <div className="py-14 bg-green-50 transition-colors duration-500">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
        Meet Our Green Experts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {experts.map((expert) => (
          <motion.div
            key={expert.plantId}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <div
              key={expert.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">
                  {expert.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {expert.specialization}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GreenExperts;
