import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setNested, setNestedBack, setNestedType } from "../../Settings/redux/slice";

export const SidebarRoute = ({ path, text, type , defaultRoute}) => {
  const {nested} = useSelector(({Reducer}) => Reducer)
  const dispatch = useDispatch()
  const handleNested = () => {
    if(defaultRoute){
        dispatch(setNested(true))
        setTimeout(() => {
            dispatch(setNestedType(path))   
            dispatch(setNestedBack(true))
        }, 500) 
    }else{
        return false
    }
  }
  return (
    <div className="sidebar-route" style={{transform: nested && defaultRoute ? `translateX(-100%)`: `translateX(0px)`}}>
      {type ? (
        <>
          <div className="sidebar-route-title-box">
            <h4 className="sidebar-route-title">Digital Content & Devices</h4>
          </div>
          <div onClick={handleNested } className="sidebar-route-box">
            <p>{text}</p>
          </div>
        </>
      ) : (
        <>
          <div onClick={handleNested} className="sidebar-route-box">
            <p>{text}</p>
          </div>
        </>
      )}
    </div>
  );
};
