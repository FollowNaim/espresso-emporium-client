import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import AddNewCoffee from "../pages/AddNewCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";
import Home from "../pages/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-coffee",
        element: <AddNewCoffee />,
      },
      {
        path: "/coffee-details",
        element: <CoffeeDetails />,
      },
    ],
  },
]);
