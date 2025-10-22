import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, error, updateProfileFunc } = use(AuthContext);
  console.log(user);
  const handleUpdate = (e) => {
    e.preventDefault();
    const newName = e.target.updateName.value;
    const newPhoto = e.target.updatePhoto.value;
    updateProfileFunc(newName, newPhoto)
      .then((res) => {
        toast.success("Update Your Profile Successfully");
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-green-50 dark:bg-gray-900 p-6">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-green-700 dark:text-green-400 mb-6">
            User Profile
          </h2>

          <div className="flex flex-col items-center mb-6">
            <img
              src={
                user.photoURL || "https://i.ibb.co/6v1Yj3D/default-avatar.png"
              }
              alt="User"
              className="w-28 h-28 rounded-full border-4 border-green-500 shadow-md object-cover"
            />
            <h3 className="text-xl font-semibold text-green-700 mt-3">
              {user.displayName || "Unnamed User"}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
          </div>

          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1 font-semibold">
                Update Name
              </label>
              <input
                type="text"
                name="updateName"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 bg-transparent text-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1 font-semibold">
                Update Photo URL
              </label>
              <input
                type="text"
                name="updatePhoto"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 bg-transparent text-gray-800 dark:text-white"
              />
            </div>

            {error && (
              <p className="text-red-600 bg-red-100 px-3 py-2 rounded-lg text-sm">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
