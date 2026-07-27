import { createBrowserRouter, Navigate } from "react-router";
import HomeLayout from "../layouts/MainLayout/Public pages/Home/HomeLayout";
import Home from "../pages/Home/Home";
import News from "../pages/Home/News/News";
import CategoryNews from "../pages/Home/Category News/CategoryNews";
import Loading from "../components/ui/Loading/Loading";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import NewsDetails from "../pages/News Details/NewsDetails";
import PrivateRoutes from "./privateRoutes";
import Update from "../pages/Update/Update";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "/",
        Component: Home,
        children: [
          {
            path: "/",
            Component: News,
            loader: () => fetch("/news.json"),
            hydrateFallbackElement: <Loading />,
          },
          {
            path: "/category/:id",
            Component: CategoryNews,
            loader: () => fetch("/news.json"),
            hydrateFallbackElement: <Loading />,
          },
        ],
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
      {
        path: "/career",
        element: <h1>Career</h1>,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        index: true,
        element: <Navigate to={"/auth/login"} replace />,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signup",
        Component: Signup,
      },
      {
        path: "update",
        Component: Update,
      }
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoutes>
        <NewsDetails />
      </PrivateRoutes>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading />,
  },
  {
    path: "/*",
    element: <h1>Error 404</h1>,
  },
]);

export default router;
