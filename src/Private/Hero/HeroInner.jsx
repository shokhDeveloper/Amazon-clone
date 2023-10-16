import { Link } from "react-router-dom";
import heroCardJson from "../../Settings/heroCard.json";
import { useSelector } from "react-redux";
export const HeroInner = () => { 
  const {token} = useSelector(({Reducer}) => Reducer)  
  return (
    <div className="hero-inner-cards">
      {heroCardJson.map((item) => {
        return (
          <div className="hero-card card">
            <div className="card-header">
              <div className="card-title-box">
                <h3> {item.title} </h3>
              </div>
            </div>
            <div className="card-body card-body-active">
              {(function (active) { 
                if (active) {
                  return item.images?.map((item) => {
                    return (
                      <div className="card-item">
                        <img src={item.img} width={150} height={100} alt="Amazon Image" />
                        <Link className="card-link" to={`${token ? "/see-more": "login" }`}>{item.discription}</Link>
                      </div>
                    );
                  });
                }else {
                    return(
                        <img src={item.image} width={300} height={270} alt="Amazon Image"/>
                    )
                }
              })(item.active)}
            </div>
            <div className="card-footer">
                <Link className="card-link link-active" to={`${token ? "/see-more": "login"}`}>{item.discription}</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
