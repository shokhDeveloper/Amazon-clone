import "./header.scss";
import Logo from "../../Settings/assets/images/logo.png";
import {BsSearch} from "react-icons/bs"
import {BiSolidUserCircle} from "react-icons/bi"
import {FiShoppingCart} from "react-icons/fi"
import {GrLocation} from "react-icons/gr"
import { useDispatch, useSelector } from "react-redux";
import { setFlag, setLanguageBox, setLocation, setModalShopping, setSearchActive, setSearchFocus, setSearchValue, setSign } from "../../Settings/redux/slice";
import { useEffect } from "react";
import { SearchTodo } from "./SearchTodo";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import { setItem } from "../../Settings";
import { SignBox } from "./SignBox";
import { HeaderBottom } from "./HeaderBottom";
import { ApiRequests } from "../../Settings";
import AmericaFlag from "../../Settings/assets/images/America-Flag.png";
import { LanguageBox } from "../LanguageBox";
import { useCart } from "react-use-cart";
export const Header = () => {
  const {currentApi, searchActive, searchFocus, languageBox, signBox, flag, token, user} = useSelector(({Reducer}) => Reducer)
  const navigate = useNavigate()
  const {t, i18n:{language}} = useTranslation()
  const {items} = useCart()
  const dispatch = useDispatch()
  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((api) => {
      const {coords:{latitude, longitude}} = api
      dispatch(setLocation({
        latitude,
        longitude
      }))
    })  
  }
  useEffect(() => {
    if(currentApi?.latitude){
      window.open(`https://www.google.com/maps/place/${currentApi?.latitude?.toString()?.substring(0,2)}%C2%B040'33.0%22N+66%C2%B057'20.7%22E/@${currentApi?.latitude?.toString()?.substring(0,5)}8291,${currentApi?.longitude?.toString().substring(0,4)}53167,17z/data=!3m1!4b1!4m4!3m3!8m2!3d${currentApi?.latitude}!4d${currentApi.longitude}?entry=ttu`, "blank")   
      
    }
  },[currentApi])
  const handleMouse = () => {
    dispatch(setLanguageBox(true))
    dispatch(setSign(false))
    dispatch(setSearchActive(true))
  }
  const handleOut = () => {
    dispatch(setLanguageBox(false))
    dispatch(setSearchActive(false))  
  }
  
  return (
    <>
  <header className="site-header">

    <div className="container">
    <div className="site-header-inner-box">
    <img className="site-logo" onClick={() => window.location.reload()} src={Logo} alt="Amazon Logo" />
    <div onClick={handleLocation} className="site-header-location">
      <span className="text-small">Deliver to</span>
      <p className="text-title"><GrLocation className="header-location-icon"/> Uzbekistan</p>
    </div>
    <div className="site-header-search"  style={{outline: searchActive && searchFocus ? "4px solid #c78c3f": "4px solid transparent"}}>
      <select  defaultValue={"all"} className="site-header-select border-transparent" style={{zIndex: !searchActive ? "1": "0"}}>
        <option value="all">All</option>
        <option value="arts">Arts Crafts</option>
        <option value="automative">Automative</option>
        <option value="baby">Baby</option>      
      </select>
      <input onChange={(event) => dispatch(setSearchValue(event.target.value)) } onFocus={() => {
        dispatch(setSearchFocus(true))
        dispatch(setSearchActive(true))
      }}  className="header-search-input border-transparent" type="text" placeholder="Search Amazon" />
      <SearchTodo active={searchActive} focus={searchFocus}/>
      <BsSearch className="header-search-icon"/>
    </div>
    <nav className="site-nav">
      <div className="site-languages" onMouseEnter={handleMouse} >
        <span className="site-default-language" style={{backgroundImage: `url(${!flag ? AmericaFlag : flag === "https://flagcdn.com/us.svg" ? AmericaFlag: flag}`}}>
          {language.toUpperCase()}
        </span>
        <LanguageBox type={"headerLanguage"} languageBox={languageBox} setLanguageBox={setLanguageBox}/>
      </div>
      {!token ? (
      <div className="site-nav-option" onClick={() => navigate("/sign") } onMouseEnter={() => {dispatch(setSign(true))
        dispatch(setSearchFocus(false))
      }}>
        <span className="site-option-small">
          {t("hello")}
        </span>
        <span className="site-option-title">
          {t("sign")}
        </span>
        {signBox ? (
          <SignBox/>
        ): null}
      </div>
      ): (
        <div className="site-nav-option user-option" onClick={() => navigate("/profile-settings")}>
          <span className="user-data"><BiSolidUserCircle/> {user.user_name.split(" ")[0][0].toUpperCase()}.{user.user_name.split(" ")[1][0].toUpperCase()}</span>
        </div>
      )}
      <div className="site-nav-option">
        <span className="site-option-small">
            Returns
        </span>
        <span className="site-option-title">
          & Orders
        </span>
        
      </div>
      <div className="site-nav-option">
        <span className="site-option-small">
          Your
        </span>
        <span className="site-option-title">
          Prime
        </span>
      </div>
      <div className="site-header-shoppingCart" onClick={() => {
        dispatch(setModalShopping(true))
      }}>
        <FiShoppingCart className="site-shoppingCart-icon"/>
        <span className="site-shopping-count">{items.length}</span>
      </div>
    </nav>
    </div>
    </div>
  </header>
  <HeaderBottom/>
  </>   
  );
};