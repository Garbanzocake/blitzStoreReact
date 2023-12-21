import { createBrowserRouter } from "react-router-dom"
import { ShopPage } from "../components/shop/ShopPage"

export const ShopRoutes=()=>{
    createBrowserRouter([
        {
            path:'/',
            elemenet:<ShopPage/>,
            children:[
                
            ]
        }
    ])
}