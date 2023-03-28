import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../utils/store"
import Header from "../Header"
import {StaticRouter} from "react-router-dom/server"


test("Logo should load on rendering header",()=>{
    const header=render(
        <StaticRouter>
    <Provider store={store}>
        <Header/></Provider>
        </StaticRouter>)
        const logo=header.getAllByTestId("logo")
        console.log(logo)
        expect(logo[0].src).toBe("http://localhost/dummy.png")

}) ;



test("Cart should be 0 rendering header",()=>{
    const header=render(
        <StaticRouter>
    <Provider store={store}>
        <Header/></Provider>
        </StaticRouter>)
        const cart=header.getByTestId("cart")
       
        expect(cart.innerHTML).toBe("Cart - 0 items")

}) ;

test("onlineStatus should be Yes rendering header",()=>{
    const header=render(
        <StaticRouter>
    <Provider store={store}>
        <Header/></Provider>
        </StaticRouter>)
        const onlineStatus=header.getByTestId("online-status")
       
        expect(onlineStatus.innerHTML).toBe("Yes")

}) ;








