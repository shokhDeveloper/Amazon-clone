import "./sign.scss"
import { Outlet, Route, Routes } from "react-router"
import { Login } from "./Login"

export const Sign = () => {
    return(
        <main>
            <Outlet/>
        </main>
    )
}