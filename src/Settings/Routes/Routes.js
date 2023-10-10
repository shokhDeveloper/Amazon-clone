import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { getItem } from "../Utils";
import { Home } from "../../Private";
const token = getItem("amazon-token")
export const route = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/*" element={<Home/>}/>
        </>
    )
)