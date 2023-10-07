import { createSlice } from "@reduxjs/toolkit";
import { getItem, removeItem, setItem } from "../Utils";
const initialState = {
    token: getItem("amazon-token") ? getItem("amazon-token"): null,
    user: getItem("amazon-user") ? JSON.parse("amazon-user"): null,
    loader: window.localStorage.getItem("loader") ? false: true,
    currentApi:{
        latitude: null,
        longitude: null
    },
    searchActive: false,
    searchValue: "",
    searchData: []
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
        setLocation(state, action){
            state.currentApi = action.payload
        },
        setSearchActive(state, action){
            state.searchActive = action.payload
        },
        setSearchValue(state, action){
            state.searchValue = action.payload
        },
        setSearchData(state, action){
            state.searchData = action.payload
        },
        setDeleteUser(state, action){
            state.searchData = state.searchData.filter(item => item.id !== action.payload)
        }
    }
})
export const {setToken, setUser, setOpenLoader, setCloseLoader, setLocation, setSearchActive, setSearchValue, setSearchData, setDeleteUser} = slice.actions
export const Reducer = slice.reducer