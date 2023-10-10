import { NavLink } from "react-router-dom";

export const SidebarDefaultRoutes = () => {
  return (
    <>
      <div className="sidebar-route">
        <div className="sidebar-route-title-box">
          <h4 className="sidebar-route-title">Digital Content & Devices</h4>
        </div>
        <div className="sidebar-route-box">
          <NavLink to={"/music"}>Amazon music</NavLink>
        </div>
      </div>
    </>
  );
};
