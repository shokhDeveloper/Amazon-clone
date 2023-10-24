import { Link } from "react-router-dom";
import heroCardJson from "../../Settings/heroCard.json";
import { useSelector } from "react-redux";
import { RenderCard } from "../../Components";
export const HeroInner = () => {
  const { token } = useSelector(({ Reducer }) => Reducer);
  return (
    <>
      <div className="hero-inner-cards-parent">
        <div className="hero-inner-cards">
          <RenderCard arr={heroCardJson}/>
        </div>
      </div>
    </>
  );
};
