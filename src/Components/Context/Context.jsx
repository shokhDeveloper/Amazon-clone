import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({children}) => {
    const [carouselData, setCarouselData] = useState(null)
    const [activeTovar, setActiveTovar] = useState({
        parentId: null,
        id: null,
        active: false
    })
    const [textType, setTextType] = useState(false)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    return(
        <Context.Provider value={{carouselData, setCarouselData, page, setPage, limit, setLimit, textType, setTextType, activeTovar, setActiveTovar}}>
            {children}
        </Context.Provider>
    )
}