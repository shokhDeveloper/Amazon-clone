import { Route, Routes } from "react-router"
import { Login } from "./Login"
import { Register } from "./Register"

export const Sign = () => {
    return(
        <main>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path="/" element={<Login/>}/>
            </Routes>
        </main>
    )
}