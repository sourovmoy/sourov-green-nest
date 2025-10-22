import { createBrowserRouter } from "react-router";
import HomeLayOut from "../Layout/HomeLayOut";

import Profile from "../pages/Profile";
import ErrorPage from "../Error/ErrorPage";
import Plants from "../pages/Plants";
import MainError from "../Error/MainError";
import Home from "../pages/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { Suspense } from "react";
import Loading from "../Loading/Loading";
import PlantsDetails from "../pages/PlantsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut />,
    hydrateFallbackElement: <Loading />,
    errorElement: <MainError />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />,
          </Suspense>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/plants",
        element: (
          <Suspense fallback={<Loading />}>
            <Plants />
          </Suspense>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/plants/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <PlantsDetails />
          </Suspense>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/signup",
        element: <SignUp />,
      },
    ],
  },
]);
export default router;
