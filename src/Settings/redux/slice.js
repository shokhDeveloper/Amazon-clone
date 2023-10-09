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
    searchFocus: false,
    searchActive: false,
    searchValue: "",
    searchData: [],
    languageBox: false,
    signBox: false,
    bottomIndex: false
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
        setSearchFocus(state, action){
            state.searchFocus = action.payload
        },
        setSearchFilter(state, action){
            state.searchData = state.searchData.filter(item => item.name.match(action.payload))
        },
        setDeleteUser(state, action){
            state.searchData = state.searchData.filter(item => item.id !== action.payload)
        },
        setLanguageBox(state, action){
            state.languageBox = action.payload
        },
        setSign(state, action){
            state.signBox = action.payload
        },
        setBottomIndex(state, action){
            state.bottomIndex = action.payload
        }
    }
})
export const {setToken, setUser, setOpenLoader, setCloseLoader, setLocation, setSearchActive, setSearchValue, setSearchData, setDeleteUser, setSearchFilter, setSearchFocus, setLanguageBox, setSign, setBottomIndex} = slice.actions
export const Reducer = slice.reducer