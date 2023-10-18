import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { getItem } from "../Utils";
import { Home } from "../../Private";
import { Sign } from "../../Public/Sign";
import { Login, Register } from "../../Public";
const token = getItem("amazon-token")
export const route = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/*" element={<Home/>}/>
            {!token ?  (
                <Route path="/sign/*" element={<Sign/>}>
                    <Route index element={<Login/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                </Route>
            ): (
                ""
            )}   
        </>
    )
)