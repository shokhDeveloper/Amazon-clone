import { useDispatch, useSelector } from "react-redux";
import {
  setNested,
  setNestedBack,
  setNestedType,
} from "../../Settings/redux/slice";
import { SidebarRoute } from "./SidebarRoute";

export const SidebarNested = () => {
  const {nestedType}  = useSelector(({Reducer}) => Reducer) 
  const dispatch = useDispatch();
  const handleCloseSidebar = () => {
    dispatch(setNestedBack(false));
    setTimeout(() => {
      dispatch(setNestedType(null));
      dispatch(setNested(false));
    }, 500);
  };
  return (
    <>
      <div className="sidebar-back" onClick={handleCloseSidebar}>
        <button  className="border-transparent">Main menu</button>
      </div>
      {nestedType === "music" ? (
        <>
        <SidebarRoute defaultRoute={false} path={null} text={"Amazon music Unlimited"} title={"Stream Music"} type={true}/>
        <SidebarRoute  defaultRoute={false} path={null} text={"Free Streaming Music"} title={null} type={false}/>
        <SidebarRoute  defaultRoute={false} path={null} text={"Podcasts"} title={null} type={false}/>
        <SidebarRoute  defaultRoute={false} path={null} text={"Open Web Player"} title={null} type={false}/>
        <SidebarRoute  defaultRoute={false} path={null} text={"Open Web Player"} title={null} type={false}/>
        <SidebarRoute  defaultRoute={false} path={null} text={"Download the app"} title={null} type={false}/>
        </>
      ): nestedType === "books" ? (
        <h1>Books</h1>
      ): nestedType === "appstore" ? (
        <h1>Appstore</h1>
      ): null}
    </>
  );
};
