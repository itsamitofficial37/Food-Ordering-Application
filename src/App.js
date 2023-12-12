import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Count from "./components/Count";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
      <Count />
    </div>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement : <Error/>
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<RouterProvider router={appRoutes} />);
