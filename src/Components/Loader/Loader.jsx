import "./loader.scss"
import {Puff } from "react-loader-spinner"
export const Loader = () => {
    return(
        <div className="load">
            <div className="container">
            <Puff color="#10BFFF" height={80} width={80}/>
            </div>
        </div>
    )
}