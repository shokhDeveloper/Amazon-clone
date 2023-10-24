import { RouterProvider } from "react-router";
import { GlobalStyle, getItem, route, useFetching, useLoader } from "./Settings";
import { Context, Loader } from "./Components";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBottomIndex, setBtnActive, setSearchData } from "./Settings/redux/slice";
import i18n from "i18next";
import {initReactI18next, useTranslation} from "react-i18next"
i18n
  .use(initReactI18next) 
  .init({
   
    resources: {
      en: {
        translation: {
          "defaultLanguage": "EN",
          "language": "English",
          "currency": "USD - USD - Dollar",
          "hello": "Hello",
          "sign": "Sign in",
          "languageApi": "America",
          "valyuta": "USD - U.S Dollar",
          "region": "United States"
        },
      },
      de: {
        translation:{
          "defaultLanguage": "DE",
          "language": "Deutch",
          "currency": "EU - EU - Euro",
          "hello": "Guten morgen",
          "sign": "Eingeben",
          "languageApi": "German",
          "valyuta": "Euro  ",
          "region": "Germain"
        },
      },
      ru:{
        translation: {
          "defaultLanguage": "RU",
          "language": "Russia",
          "currency": "RU - RU - Rubl",
          "hello": "Привет",
          "sign": "Bxoд",
          "languageApi": "Russia",
          "valyuta": "Rubl",
          "region": "Russia"
        },
      },
      uz: {
        translation:{
          "defaultLanguage": "UZ",
          "language": "Uzbek",
          "currency": "So'm - So'm - Uzbek so'm",
          "hello": "Salom",
          "sign": "Kirish",
          "languageApi": "Uzbekistan",
          "valyuta": "So'm",
          "region": "Uzbekistan" 
        },
      }
    },
    lng: getItem("amazon-language") ? getItem("amazon-language") : "en", 
    fallbackLng: getItem("amazon-language") ? getItem("amazon-language") : "en", 
  });
function App() {
  const {setLimit, setPage, page} = useContext(Context)
  const {openLoader} = useLoader()
  const {data} = useFetching("https://jsonplaceholder.typicode.com/users")
  const {loader} = useSelector(({Reducer}) => Reducer )
  const dispatch = useDispatch()
  useEffect(() => {
    if(loader){
      openLoader()
    }
  },[loader])
  
  useEffect(() => {
    if(data?.length){
      dispatch(setSearchData(data))
    }
  },[data])
  const handleScroll = () => {
    if(window.scrollY > 0){
      dispatch(setBottomIndex(false))
    }else{
      dispatch(setBottomIndex(true))
    }
    if(Math.ceil((window.innerHeight + window.scrollY)) >= document.body.offsetHeight){
      if(page < 3){
        setPage(page + 1)
      }else{
        setPage(2)
      }
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },[])
  const handleClick = (event) => {
    if(!event.target.matches(".hero-btn")){
      dispatch(setBtnActive({left: false, right: false}))
    }
  }
  useEffect(() => {
    window.addEventListener("click", handleClick)
    return () => window.removeEventListener("click", handleClick)
  },[])

  return (
    <>
    {loader ? (
      <Loader/>
    ): (
     <RouterProvider router={route}/> 
    )}
    <GlobalStyle/>
    </>
  );
}

export default App;
