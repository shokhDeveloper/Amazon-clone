import { NavLink } from "react-router-dom";
import { SidebarRoute } from "./SidebarRoute";

export const SidebarDefaultRoutes = () => {
  return (
    <>
      <SidebarRoute path={"music"} text={"Amazon music"} type={true} title={"Digital Content & Devices"} defaultRoute={true} />
      <SidebarRoute path={"books"} text={"Kindle E-readers & Books"} type={false} defaultRoute={true} />
      <SidebarRoute path={"appstore"} text={"Amazon Appstore"} type={false} defaultRoute={true}/>
      <hr style={{margin: "1rem 0rem"}} />
     </>
  );
};
