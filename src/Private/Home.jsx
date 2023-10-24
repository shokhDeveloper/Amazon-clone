import "./home.scss";
import { useDispatch, useSelector } from "react-redux";
import { BackTop, Carousel, Header } from "../Components";
import { setSearchActive, setSearchFocus } from "../Settings/redux/slice";
import { Sidebar } from "./Sidebar";
import { Hero } from "./Hero";
import { Additional } from "./Additional";

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
          <Carousel type={"exiting"} name={"exiting-carousel"}  activeCarousel={true}/>
          <Carousel type={"book"} name="book-carousel"  activeCarousel={false}/>
          <Additional/>
          <BackTop/>
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
