import React, { useContext, useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuLeafyGreen } from "react-icons/lu";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import ErrorPage from "../Error/ErrorPage";
import { addPlants, getPlants } from "../LocalStorage/LocalStorage";
import { AuthContext } from "../Provider/AuthContext";

const PlantsDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const { id } = useParams();
  const allData = useLoaderData();

  useEffect(() => {
    const bookingPlants = getPlants();
    const alreadyHave = bookingPlants.some((p) => p.plantId == id);
    if (alreadyHave) {
      setClick(true);
    }
  }, [id]);

  const plant = allData.find((p) => p.plantId === Number(id));

  const handelBooking = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Login first");
      return navigate("/auth/login");
    }
    addPlants(plant);
    e.target.reset();
    setClick(true);
    if (click) {
      return;
    } else {
      toast("Booking Complete");
    }
  };

  if (Object.keys(plant).length === 0) {
    return <ErrorPage />;
  }
  return (
    <div>
      <div className="min-h-screen bg-green-50 bg-green-900 py-10 px-6 my-10 rounded-2xl">
        <div className="max-w-6xl mx-auto bg-white dark:bg-green-950 rounded-3xl shadow-xl overflow-hidden">
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

          <div className="grid md:grid-cols-2 gap-10 p-8">
            <div className="flex justify-center items-center">
              <img
                src={plant.image}
                alt={plant.plantName}
                className="rounded-2xl shadow-lg w-full max-w-md hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-green-800 dark:text-green-100 mb-3">
                {plant.plantName}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {plant.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-4">
                <span
                  className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 px-3 py-1 rounded-full text-sm font-semibold
                flex items-center gap-2"
                >
                  <LuLeafyGreen className="h-5 w-5" /> {plant.category}
                </span>
                <span className="bg-yellow-100 dark:bg-yellow-700 text-yellow-700 dark:text-yellow-100 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                  <FaStar className="h-5 w-5" /> {plant.rating}
                </span>
                <span className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-100 px-3 py-1 rounded-full text-sm font-semibold">
                  Care: {plant.careLevel}
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
            </div>
          </div>
        </div>
        <div className="">
          <div className="card-body  w-[85vw] md:w-[30vw] mx-auto text-white font-medium text-xl">
            <h2 className="font-bold text-2xl text-center">
              Book Consultation
            </h2>
            <form onSubmit={handelBooking}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input text-green-700"
                  placeholder="Inter Your Name"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input text-green-700"
                  placeholder="Inter Your Email"
                />

                <button
                  disabled={click}
                  // onClick={() => handelBooking(true)}
                  className={`btn mt-4  bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-green-700 transition  border-none ${
                    click && "opacity-25"
                  }`}
                >
                  <HiOutlineShoppingBag className="w-5 h-5" />{" "}
                  {click ? "Booked" : "Book Now"}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantsDetails;
