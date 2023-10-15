import { Link, useLocation } from "react-router-dom"
import { useBack } from "../../Settings"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setSearchActive, setSign } from "../../Settings/redux/slice"

export const Login = () => {
    const {pathname} = useLocation()
    const dispatch = useDispatch()
    useEffect(() => {
        if(pathname ==="/login"){
            dispatch(setSign(false))
            dispatch(setSearchActive(false))
        }
    },[pathname])
    useBack(true)
    return(
        <section className="login">
            <div className="container">
                <h1>Login</h1>
                <Link to={"/register"}>Register</Link>
            </div>
        </section>       
    )
}