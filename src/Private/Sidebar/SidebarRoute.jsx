import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setNested, setNestedBack, setNestedType, setSidebarSelected } from "../../Settings/redux/slice";

export const SidebarRoute = ({ path, text, type , defaultRoute, title, selected}) => {
  const {nested, sidebarSelected} = useSelector(({Reducer}) => Reducer)
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
  const handleSelectedShow = () => {
    dispatch(setSidebarSelected(true))
  }
  return (
    <div className="sidebar-route" style={{transform: nested && defaultRoute ? `translateX(-100%)`: `translateX(0px)`}}>
      {type ? (
        <>
          <div className="sidebar-route-title-box">
            <h4 className="sidebar-route-title">{title}</h4>
          </div>
          <div onClick={handleNested } className="sidebar-route-box">
            <p>{text}</p>
          </div>
        </>
      ) : (
        <>
        {!selected ? (
          <div onClick={handleNested} className="sidebar-route-box">
            <p>{text}</p>
          </div>
        ) :(
          <>
          {!sidebarSelected ? (
          <div onClick={handleSelectedShow} className="sidebar-route-box selected">
            <p>See All</p>
          </div>
          ) :(
            <>
            <SidebarRoute path={"autoMative"} text={"Automative"} type={false}  defaultRoute={true}/>
            <SidebarRoute path={"electronics"} text={"Electronics"} type={false}  defaultRoute={true} />
            <SidebarRoute path={"computer"} text={"Computers"} type={false} defaultRoute={true} />
            <SidebarRoute path={"smart"} text={"Arts & Crafts"} type={false}  defaultRoute={true} />
            </>
          )}
          </>
        )}
        </>
      )}
    </div>
  );
};
