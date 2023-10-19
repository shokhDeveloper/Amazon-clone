import { useDispatch, useSelector } from "react-redux";
import "./hero.scss";
import {
  setBtnActive,
  setImgCountDec,
  setImgCountInc,
} from "../../Settings/redux/slice";
import { HeroInner } from "./HeroInner";
export const Hero = () => {
  const { imgCount, heroImages, heroBtnActive } = useSelector(
    ({ Reducer }) => Reducer
  );
  const dispatch = useDispatch();
  const { left, right } = heroBtnActive;
  const handleUrlLocationReplace = (url) => {
    window.open(url, "blank")
  }
  return (
    <section className="hero">
      
      <div className="container">
        <div className="hero-inner">
          <div className="hero-image-box">
            {heroImages?.map((item) => {
              return (
                <img
                  onClick={() => handleUrlLocationReplace(item.url)}
                  src={item.image}
                  alt="Amazon img"
                  style={{ transform: `translateX(${imgCount * -100}%)` }}
                />
              );
            })}
          </div>
          <div className="hero-elements">
            <div className="hero-btn-box">
              <button
                className={`hero-btn ${left ? "hero-btn-active " : ""}`}
                onClick={() => {
                  dispatch(setImgCountDec(1));
                  dispatch(setBtnActive({ left: true, right: false }));
                }}
              ></button>
              <button
                className={`hero-btn ${right ? "hero-btn-active" : ""}`}
                onClick={() => {
                  dispatch(setBtnActive({ left: false, right: true }));
                  dispatch(setImgCountInc(1));
                }}
              ></button>
            </div>
            < HeroInner/>
          </div>
        </div>
      </div>
    </section>
  );
};
