import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({children}) => {
    const [bookFocus, setBookFocus] = useState(null)
    return(
        <Context.Provider value={{bookFocus, setBookFocus}}>
            {children}
        </Context.Provider>
    )
}