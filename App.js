import React from "react";
import ReactDOM from "react-dom/client";
import AppContainer from "./src/AppContainer";
import Contact from "./src/Components/Body/Contact/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./src/Components/Body/About/About";
import ErrorPage from "./src/Components/ErrorPage/ErrorPage";
import Body from "./src/Components/Body/Body";
import ResturantMenu from "./src/Components/Body/ResturantMenu/ResturantMenu";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:"/resturant/:resId",
        element:<ResturantMenu/>
      }
    ],
    errorElement: <ErrorPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={routes} />);
