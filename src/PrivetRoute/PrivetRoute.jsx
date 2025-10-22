import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Navigate, useLocation } from "react-router";
import { Atom } from "react-loading-indicators";

const PrivetRoute = ({ children }) => {
  const { user, spinner } = use(AuthContext);
  const location = useLocation();
  if (spinner) {
    return (
      <div className="flex justify-center items-center">
        <Atom color="#32cd32" size="medium" text="" textColor="" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/auth/login"} state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivetRoute;
