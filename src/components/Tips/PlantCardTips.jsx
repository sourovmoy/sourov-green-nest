import React, { useEffect, useState } from "react";
import Loading from "../../Loading/Loading";

const PlantCareTips = () => {
  const [tips, setTips] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch("/plantsTips.json")
      .then((res) => res.json())
      .then((data) => setTips(data));
    setTimeout(() => setLoader(false), 700);
  }, []);

  if (loader) {
    return <Loading />;
  }

  return (
    <div className=" py-16 px-6">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-10">
        🌿 Plant Care Tips
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center border border-green-100 hover:scale-104"
          >
            <div className="text-5xl mb-4">{tip.icon}</div>
            <h2 className="text-xl font-semibold text-green-800 mb-2">
              {tip.title}
            </h2>
            <p className="text-gray-600 text-sm mb-3">{tip.description}</p>
            <span className="text-xs font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
              {tip.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantCareTips;
