import "./header.scss";
import Logo from "../../Settings/assets/images/logo.png";
import {BsSearch} from "react-icons/bs"
import {FiShoppingCart} from "react-icons/fi"
import {GrLocation} from "react-icons/gr"
import { useDispatch, useSelector } from "react-redux";
import { setLocation, setSearchActive, setSearchValue } from "../../Settings/redux/slice";
import { useEffect } from "react";
import { SearchTodo } from "./SearchTodo";
export const Header = () => {
  const {currentApi, searchActive} = useSelector(({Reducer}) => Reducer)
  const dispatch = useDispatch()
  const handleLanguageOpen = () => {

  };
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
  return (
  <header className="site-header">
    <div className="container">
    <div className="site-header-inner-box">
    <img className="site-logo" onClick={() => window.location.reload()} src={Logo} alt="Amazon Logo" />
    <div onClick={handleLocation} className="site-header-location">
      <span className="text-small">Deliver to</span>
      <p className="text-title"><GrLocation className="header-location-icon"/> Uzbekistan</p>
    </div>
    <div className="site-header-search"  style={{outline: searchActive ? "4px solid #c78c3f": "4px solid transparent"}}>
      <select  defaultValue={"all"} className="site-header-select border-transparent" style={{zIndex: !searchActive ? "1": "0"}}>
        <option value="all">All</option>
        <option value="arts">Arts Crafts</option>
        <option value="automative">Automative</option>
        <option value="baby">Baby</option>      
      </select>
      <input onChange={(event) => dispatch(setSearchValue(event.target.value))} className="header-search-input border-transparent" type="text" placeholder="Search Amazon" />
      <SearchTodo active={searchActive}/>
      <BsSearch className="header-search-icon"/>
    </div>
    <nav className="site-nav">
      <div className="site-languages">
        <span>
          EN 
        </span>
      </div>
      <div className="site-nav-option">
        <span className="site-option-small">
          Hello
        </span>
        <span className="site-option-title">
          Sign in
        </span>
      </div>
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
      <div className="site-header-shoppingCart">
        <FiShoppingCart className="site-shoppingCart-icon"/>
        <span className="site-shopping-count">0</span>
      </div>
    </nav>
    </div>
    </div>
  </header>   
  );
};
