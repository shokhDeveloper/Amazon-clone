import "./home.scss";
import { useDispatch, useSelector } from "react-redux"
import { Header } from "../Components"
import { useLoader } from "../Settings"
import { useEffect } from "react"
import { setSearchActive, setSearchFocus } from "../Settings/redux/slice"
import { Sidebar } from "./Sidebar";

export const Home = () => {    
    const {searchActive, searchFocus} = useSelector(({Reducer}) => Reducer)
    const dispatch = useDispatch()
    const handleMouseDown = (event) => {
        dispatch(setSearchActive(false))
        dispatch(setSearchFocus(false))
    }
    return(
        <>
            <div className="parent">
            <div className="child">
            <Header/>
            <div className="active-search" style={{display: searchActive ? "block": "none"}} onMouseDown={handleMouseDown}/>
            </div>
            <Sidebar/>
            </div>
        </>
    )
}