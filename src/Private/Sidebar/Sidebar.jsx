import "./sidebar.scss";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  setNested,
  setNestedBack,
  setNestedType,
  setSearchActive,
  setSideBar,
  setSidebarActive,
} from "../../Settings/redux/slice";
import { useEffect } from "react";
import { Route, Routes } from "react-router";
import { SidebarDefaultRoutes } from "./SidebarDefaultRoutes";
import { SidebarNested } from "./SidebarNested";

export const Sidebar = () => {
  const { sidebar, sidebarActive, token, user, nestedType, nestedBack } = useSelector(
    ({ Reducer }) => Reducer
  );
  const dispatch = useDispatch();
  const handleSidebarTimeOut = (type) => {
    if (type === "open") {
      setTimeout(() => {
        dispatch(setSidebarActive(true));
      }, 500);
    } else {
      dispatch(setSidebarActive(false));
      setTimeout(() => {
        dispatch(setSideBar(false));
      }, 500);
    }
  };
  
  const handleMouseDown = (event) => {
    if (
      event.target.matches(".sidebar-overlay") ||
      event.target.matches("sidebar-close")
    ) {
      handleSidebarTimeOut("close");
    }
  };
  useEffect(() => {
    if (sidebar) {
      handleSidebarTimeOut("open");
    }
  }, [sidebar]);
  return (
    <div
      onMouseDown={handleMouseDown}
      className="sidebar-overlay"
      style={{ display: sidebar ? "flex" : "none" }}
    >
      <div
        className="sidebar"
        style={{
          transform: sidebarActive ? "translateX(0%)" : "translateX(-100%)",
        }}
      >
        <div className="sidebar-inner">
          <div className="sidebar-elements">
            <div className="sidebar-header">
              <div className="sidebar-header-inner">
                {!token ? (
                  <h4>Hello, sign in</h4>
                ) : (
                  <h4>Hello, {user?.name}</h4>
                )}
              </div>
            </div>
            <div className="sidebar-routes">
              <div className="sidebar-routes-box">
                <div className={`sidebar-default ${nestedType ? "sidebar-defult-active": ""} `} >
                  <SidebarDefaultRoutes />
                </div>
                <div className={`sidebar-nested ${nestedType ? "sidebar-nested-active": ""  }`} style={{transform: nestedBack ?"translateX(0px)": "translateX(100%)"}}>
                  <SidebarNested/>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-close">
            <button
              onClick={() => handleSidebarTimeOut("close")}
              className="border-transparent"
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
