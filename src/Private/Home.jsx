import { useSelector } from "react-redux"
import { Header } from "../Components"
import { useLoader } from "../Settings"

export const Home = () => {    
    const {searchActive} = useSelector(({Reducer}) => Reducer)
    return(
        <>
            <Header/>
            <div className="active-search" style={{display: searchActive ? "block": "none"}}/>
        </>
    )
}