import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({children}) => {
    const [carouselData, setCarouselData] = useState(null)
    return(
        <Context.Provider value={{carouselData, setCarouselData}}>
            {children}
        </Context.Provider>
    )
}