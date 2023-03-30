import "@testing-library/jest-dom"
import { render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import { RESTAURANTDATA } from "../../mock/data";


global.fetch=jest.fn(()=>{
   return Promise.resolve({
        json:()=>{
           return Promise.resolve(RESTAURANTDATA)}
    })
})

test("shimmer on HomePage",()=>{
    const body= render(
     <StaticRouter>
         <Provider store={store}><Body/></Provider>
     </StaticRouter>);
 
     
 
     const shimmer=body.getByTestId("shimmer")
 
     expect(shimmer.children.length).toBe(15)
 })

test("Restaurant should load  on HomePage", async()=>{
   const body= render(
    <StaticRouter>
        <Provider store={store}><Body/></Provider>
    </StaticRouter>);

    await waitFor(()=> 
    expect(screen.getByTestId("search-btn")))

    const shimmer=body.getByTestId("shimmer")

    expect(shimmer.children.length).toBe(15)
})