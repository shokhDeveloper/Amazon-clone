import "./sidebar.scss";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchActive,
  setSideBar,
  setSidebarActive,
} from "../../Settings/redux/slice";
import { useEffect } from "react";
import { Route, Routes } from "react-router";
import { SidebarDefaultRoutes } from "./SidebarDefaultRoutes";

export const Sidebar = () => {
  const { sidebar, sidebarActive, token, user } = useSelector(
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
              <Routes>
                <Route index element={<SidebarDefaultRoutes />} />
              </Routes>
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
