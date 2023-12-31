import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import {GiHamburgerMenu} from "react-icons/gi"
import { setSideBar } from "../../Settings/redux/slice"
export const HeaderBottom = () => {
    const dispatch = useDispatch()
    const {bottomIndex} = useSelector(({Reducer}) => Reducer)
    const handleClick = () => {
      dispatch(setSideBar(true))
    }
    return(
        <div className="header-bottom" id="swiper">
            <div className="container">
              <ul className="header-bottom-links" >
                  <li className="header-bottom-item" onClick={handleClick} style={{zIndex: bottomIndex ? "1111111111": "0" }}>
                     <NavLink><GiHamburgerMenu className="header-bottom-burger-icon"/>   All</NavLink>   
                  </li>
                  <li className="header-bottom-item" style={{zIndex: bottomIndex ? "1111111111": "0" }}>
                     <NavLink>Today's Deals</NavLink>   
                  </li>
                  <li className="header-bottom-item" style={{zIndex: bottomIndex ? "1111111111": "0" }}>
                    <NavLink>Customer Service</NavLink>
                  </li>
                  <li className="header-bottom-item" style={{zIndex: bottomIndex ? "1111111111": "0" }}>
                    <NavLink>Registry</NavLink>
                  </li>
                  <li className="header-bottom-item" style={{zIndex: bottomIndex ? "1111111111": "0" }}>
                    <NavLink>Gift Cards</NavLink>
                  </li>
                  <li className="header-bottom-item" style={{zIndex: bottomIndex ? "1111111111": "0" }}>
                    <NavLink>
                        Sell
                    </NavLink>
                  </li>
              </ul>  
            </div>
        </div>
    )
}