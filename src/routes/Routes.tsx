import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import AddNewCoffee from "../pages/AddNewCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";
import Home from "../pages/Home";
import UpdateCoffee from "../pages/UpdateCoffee";

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
        path: "/coffees/:id",
        element: <CoffeeDetails />,
        loader: ({ params }) =>
          fetch(`https://server-coffees.vercel.app/coffees/${params.id}`),
      },
      {
        path: "/update-coffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`https://server-coffees.vercel.app/coffees/${params.id}`),
      },
    ],
  },
]);
