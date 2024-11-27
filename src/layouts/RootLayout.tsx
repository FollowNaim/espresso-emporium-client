import { Toaster } from "react-hot-toast";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/navigation/Footer";
import Nav from "../components/navigation/Nav";

function RootLayout() {
  return (
    <>
      <div className="font-Raleway">
        <Toaster />
        <Nav />
        <ScrollRestoration />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;
