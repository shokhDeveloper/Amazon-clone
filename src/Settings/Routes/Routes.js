import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { getItem } from "../Utils";
import { Home } from "../../Private";
import { Sign } from "../../Public/Sign";
import { Register } from "../../Public";
const token = getItem("amazon-token")
export const route = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/*" element={<Home/>}/>
            <Route path="/login" element={<Sign/>}/>
            <Route path="/register" element={<Register/>}/>
        </>
    )
)