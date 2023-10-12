import { NavLink } from "react-router-dom";
import { SidebarRoute } from "./SidebarRoute";

export const SidebarDefaultRoutes = () => {
  return (
    <>
      <SidebarRoute path={"music"} text={"Amazon music"} type={true} title={"Digital Content & Devices"} defaultRoute={true} />
      <SidebarRoute path={"books"} text={"Kindle E-readers & Books"} type={false} defaultRoute={true} />
      <SidebarRoute path={"appstore"} text={"Amazon Appstore"} type={false} defaultRoute={true}/>
      <hr style={{margin: "1rem 0rem"}} />
      <SidebarRoute path={"electronics"} text={"Electronics"} type={true} title={"Shop By Departament"} defaultRoute={true} />
      <SidebarRoute path={"computer"} text={"Computers"} type={false} defaultRoute={true} />
      <SidebarRoute path={"computer"} text={"Arts & Crafts"} type={false}  defaultRoute={true} />
      <SidebarRoute type={false} selected={true}/>      
      <SidebarRoute path={"music"} text={"Gift Cards"} type={true} title={"Programs & Featurs"} defaultRoute={true} />
      <SidebarRoute path={"books"} text={"Shop By Interest"} type={false}  defaultRoute={true} />
      <SidebarRoute path={"cumputer"} text={"Shop By Interest"} type={false}  defaultRoute={true} />
      <SidebarRoute path={"appstore"} text={"Kindle E-readers & Books"} type={false} defaultRoute={true} />
      <SidebarRoute path={"appstore"} text={"Amazon Appstore"} type={false} defaultRoute={true}/>
     </>
  );
};
