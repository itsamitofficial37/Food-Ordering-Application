import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense,} from "react";
import UserContext from "./utils/UserContext";


// code spiliting
// lazy loading
// on demand loading
// Dynamic importing

const AboutClass = lazy(() => import("./components/AboutClass"));
const Contact = lazy(() => import("./components/Contact"));

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
 
  const [userName , setUserName] = useState();

  const handleLogin = (userData) => {
    // For simplicity, we just set the user in the state
    setUserName(userData);
  };

  // authenication 
  useEffect(()=> {
    // Api Call 
    const data = {
      name : "AMIT"
    }
    setUserName(data.name);
  }, [])
 
  return (
    <UserContext.Provider value = {{loggedInUser :  userName , setUserName}}>
    <div>
    
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
     </UserContext.Provider>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback="Loading">
            <AboutClass />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<RouterProvider router={appRoutes} />);
