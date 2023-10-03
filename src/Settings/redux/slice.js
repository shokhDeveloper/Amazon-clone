import { createSlice } from "@reduxjs/toolkit";
import { getItem, removeItem, setItem } from "../Utils";
const initialState = {
    token: getItem("amazon-token") ? getItem("amazon-token"): null,
    user: getItem("amazon-user") ? JSON.parse("amazon-user"): null,
    loader: window.localStorage.getItem("loader") ? false: true
}
export const slice = createSlice({
    name: "uzum",
    initialState,
    reducers:{
        setOpenLoader(state){
            state.loader = true
            removeItem("loader")
        },
        setCloseLoader(state){
            state.loader = false
            setItem("loader", "amazon-loader-end")
        },
        setToken(state, action){
            state.token = action.payload
            setItem("amazon-token", state.token)           
        },
        setUser(state, action){
            state.user = action.payload
            setItem("amazon-user", state.user)
        },
    }
})
export const {setToken, setUser, setOpenLoader, setCloseLoader} = slice.actions
export const Reducer = slice.reducer