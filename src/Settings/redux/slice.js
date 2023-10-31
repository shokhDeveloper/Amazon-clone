import { createSlice } from "@reduxjs/toolkit";
import { getItem, removeItem, setItem } from "../Utils";
const initialState = {
    token: getItem("amazon-token") ? getItem("amazon-token"): null,
    user: getItem("amazon-user") ? JSON.parse(getItem("amazon-user")): null,
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
    bottomIndex: false,
    sidebar: false,
    flag: getItem("language-flag") ? getItem("language-flag"): null,
    sidebarActive: false,
    nested: false,
    nestedType: null,
    nestedBack: false,
    sidebarSelected: false, 
    heroImages: [
        {
            url: "https://kitchen.com",
            image: "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
        },
        {
            url: "https://bookshop.org/",
            image: "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
        },
        {
            url: "https://gshop.uz/category/2e-gaming-7?page=1&size=12",
            image: "https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg"
        },
        {
            url: "https://toys.com",
            image: "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
        }
    ],
    imgCount: 0,
    heroBtnActive:{
        leftBtn: false,
        rightBtn: false
    },
    signHelp: false,
    googleUser: {
        user_name: null,
        email: null,
        password: null
    },
    modalGooglePassword: false,
    errorTypingText: "You entered information that does not exist on the server",
    errorTyping: false,
    modalGooglePasswordLogin: false,
    backTopLanguageBox: false,
    tovars: [],
    korzina: [],
    allTovars: [],
    likesTovars: getItem("amazon-likes-tovars") ? JSON.parse(getItem("amazon-likes-tovars")): [],
    modalShopping: false,
    tovarsPrice: 0,
    profile: [],
    profileType: false,
    updateType: true
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
        },
        setSideBar(state, action){
            state.sidebar = action.payload
        },
        setFlag(state, action){
            state.flag = action.payload
        },
        setSidebarActive(state, action){
            state.sidebarActive = action.payload
        },
        setNested(state, action){
            state.nested = action.payload
        },
        setNestedType(state, action){
            state.nestedType = action.payload
        },
        setNestedBack(state, action){
            state.nestedBack = action.payload
        },
        setSidebarSelected(state, action){
            state.sidebarSelected = action.payload
        },
        setImgCountInc(state, action){
            if(state.imgCount < state.heroImages.length-1){
                state.imgCount += action.payload
            }else{
                state.imgCount = 0
            }
        },
        setImgCountDec(state, action){
            if(state.imgCount > 0){
                state.imgCount -= action.payload
            }else{
                state.imgCount = state.heroImages.length-1
            }
        },
        setBtnActive(state, action){
             state.heroBtnActive = action.payload
        },
        setSignHelp(state, action){
            state.signHelp = action.payload
        },
        setGoogleUserNotPassword(state, action){
            state.googleUser = action.payload
        },
        setGoogleUser(state, action){
            state.googleUser = action.payload
        },
        setModalGooglePassword(state, action){
            state.modalGooglePassword = action.payload
        },
        setErrorTyping(state, action){
            state.errorTyping = action.payload
        },
        setModalGooglePasswordLogin(state, action){
            state.modalGooglePasswordLogin = action.payload
        },
        setBackTopLanguageBox(state, action){
            state.backTopLanguageBox = action.payload
        },
        setTovars(state, action){
            state.tovars = action.payload
        },
        setKorzina(state, action){
            state.korzina = action.payload
        },
        setAllTovars(state, action){
            state.allTovars = action.payload
        },
        setLikeTovar(state, action){
            if(action.payload.id === 0 || action.payload.id){
                if(state.likesTovars.length){
                    if(state.likesTovars.some(item => {
                        if(item.id === action.payload.id && item.parentId === action.payload.parentId){
                            return true
                        }else{
                            return false
                        }
                    })){
                        state.likesTovars = state.likesTovars
                    }else{
                        state.likesTovars = [...state.likesTovars, action.payload]
                        setItem("amazon-likes-tovars", state.likesTovars)
                    }
                }else{  
                    state.likesTovars = [...state.likesTovars, action.payload]
                    setItem("amazon-likes-tovars", state.likesTovars)
                }
            }
        },
        setLikeTakeDown(state, action ){
            state.likesTovars = action.payload
            setItem("amazon-likes-tovars", state.likesTovars)
        },
        setModalShopping(state, action){
            state.modalShopping = action.payload
        },
        setTovarsPrice(state, action){
            state.tovarsPrice += action.payload
        },
        setDefaultPrice(state, action){
            state.tovarsPrice = action.payload
        },
        setProfile(state, action){
            state.profile = action.payload
        },
        setProfileType(state, action){
            state.profileType = action.payload
        },
        setUpdateType(state, action){
            state.updateType = action.payload
        }
    }
})
export const {setToken, setUser, setOpenLoader, setCloseLoader, setLocation, setSearchActive, setSearchValue, setSearchData, setDeleteUser, setSearchFilter, setSearchFocus, setLanguageBox, setSign, setBottomIndex, setSideBar, setFlag, setSidebarActive, setNested, setNestedType, setNestedBack, setSidebarSelected, setImgCountDec, setImgCountInc, setBtnActive, setSignHelp, setGoogleUser, setGoogleUserNotPassword, setModalGooglePassword, setErrorTyping, setModalGooglePasswordLogin, setBackTopLanguageBox, setTovars, setAllTovars, setLikeTovar, setLikeTakeDown, setModalShopping, setTovarsPrice, setDefaultPrice, setProfile, setProfileType, setUpdateType} = slice.actions
export const Reducer = slice.reducer