import React from "react";
import ReactDOM from "react-dom/client";
//Default import
import Header from "./components/Header";
//named import
// import {Title} from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter ,Outlet,RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentsMenu"
import Profile from "./components/Profile";


           
       
  const AppLayout=()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
const appRouter=createBrowserRouter([
  {
    path : "/",
  element:<AppLayout/>,
  errorElement:<Error/>,
  children:[
    {
      path:"/about",
      element:<About/>,
      children:[
       { path :"profile",
        element : <Profile/>
      },
      ],
    },
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/restaurent/:id",
      element:<RestaurentMenu/>
    },



  ],
},


]);

const root= ReactDOM.createRoot (document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);