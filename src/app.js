import React from "react";
import ReactDOM from "react-dom/client";
import '../index.css';
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Error from "./components/Error.js";
import ContactUs from "./components/ContactUs.js";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Practice from "./components/Practice.js";
//React component

const AppLayout = () => {
    return (
        <div className ="app">
            {/* <Header/> */}
            <Outlet/>
        </div>
    )
}

const appRoute = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
    errorElement :<Error/>,
    children :[
      {
        path : "/",
        element : <Body/>
      },
      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/contact",
        element : <ContactUs/>
      },
      {
        path : "/restaurant/:resID",
        element : <RestaurantMenu/>
      },
      {
        path : "/practice",
        element : <Practice/>
      }
    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router= {appRoute} />);
