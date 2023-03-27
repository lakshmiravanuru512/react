import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
//Default import
import Header from "./components/Header";
//named import
// import {Title} from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
//import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter ,Outlet,RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentsMenu"
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
//import Instamart from "./components/Instamart";
import store from "./utils/store";
import Cart from "./components/Cart";


  const Instamart=lazy(()=>
    import("./components/Instamart")
  ) 
  
  const About=lazy(()=>{
    import("./components/About")
  })
       
  const AppLayout=()=>{
   
    return(
      <Provider store={store}>
      
        <Header/>
        <Outlet/>
        <Footer/>
        </Provider>
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
      element:<Suspense fallback={<h1>Loading.....</h1>}>
        <About/>
      </Suspense>,
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
    {
      path:"/instamart",
      element:(<Suspense fallback={<Shimmer/>}>
        <Instamart/></Suspense>),

    },
    {
      path:"/cart",
      element:<Cart/>,
    },




  ],
},


]);

const root= ReactDOM.createRoot (document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);