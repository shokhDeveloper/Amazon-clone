import "./additional.scss";
import { Link } from "react-router-dom";
import AdditionalTovar from "../../Settings/additional.json";
import { useSelector } from "react-redux";
import { RenderCard } from "../../Components";
export const Additional = () => {
  return (
    <section className="additional">
      <div className="container">
        <div className="additional-inner">
          <RenderCard arr={AdditionalTovar}/>
        </div>
      </div>
    </section>
  );
};
