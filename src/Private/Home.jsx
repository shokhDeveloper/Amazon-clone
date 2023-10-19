import "./home.scss";
import { useDispatch, useSelector } from "react-redux";
import { Carousel, Header } from "../Components";
import { setSearchActive, setSearchFocus } from "../Settings/redux/slice";
import { Sidebar } from "./Sidebar";
import { Hero } from "./Hero";

export const Home = () => {
  const { searchActive } = useSelector(
    ({ Reducer }) => Reducer
  );
  const dispatch = useDispatch();
  const handleMouseDown = (event) => {
    dispatch(setSearchActive(false));
    dispatch(setSearchFocus(false));
  };
  
  return (
    <>
      <div className="parent">
        <div className="child">
          <Header />
          <Hero/>
          <Carousel name="book-carousel"/>
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
