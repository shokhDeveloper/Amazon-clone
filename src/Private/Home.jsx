import "./home.scss";
import { useDispatch, useSelector } from "react-redux";
import { BackTop, Carousel, Header, Modal, Shopping } from "../Components";
import { setModalShopping, setSearchActive, setSearchFocus } from "../Settings/redux/slice";
import { Sidebar } from "./Sidebar";
import { Hero } from "./Hero";
import { Additional } from "./Additional";
import { Route, Routes } from "react-router";
import { SeeMore } from "./SeeMore";

export const Home = () => {
  const { searchActive, modalShopping, token } = useSelector(({ Reducer }) => Reducer);
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
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Carousel
                    type={"exiting"}
                    name={"exiting-carousel"}
                    activeCarousel={true}
                  />
                  <Carousel
                    type={"book"}
                    name="book-carousel"
                    activeCarousel={false}
                  />
                  <Additional />
                  <BackTop />
                </>
              }
            />
            <Route path="/see-more" element={<SeeMore/>}/>
          </Routes>
          {token && (
          <Modal type={"shopping"}  modal={modalShopping} setModal={setModalShopping}>
            <Shopping modal={modalShopping}/>
          </Modal>
          )}
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
