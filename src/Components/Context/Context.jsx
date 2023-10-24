import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({children}) => {
    const [carouselData, setCarouselData] = useState(null)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    return(
        <Context.Provider value={{carouselData, setCarouselData, page, setPage, limit, setLimit}}>
            {children}
        </Context.Provider>
    )
}