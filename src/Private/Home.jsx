import "./home.scss";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../Components";
import { setSearchActive, setSearchFocus } from "../Settings/redux/slice";
import { Sidebar } from "./Sidebar";
import { useEffect } from "react";

export const Home = () => {
  const { searchActive } = useSelector(
    ({ Reducer }) => Reducer
  );
  const dispatch = useDispatch();
  const handleMouseDown = (event) => {
    dispatch(setSearchActive(false));
    dispatch(setSearchFocus(false));
  };
  useEffect(() => {
    console.log("ishladi")
  },[])
  return (
    <>
      <div className="parent">
        <div className="child">
          <Header />
      
          <div
            className="active-search"
            style={{ display: searchActive ? "block" : "none" }}
            onMouseDown={handleMouseDown}
          />
        </div>
        <Sidebar />
      </div>
    </>
  );
};
