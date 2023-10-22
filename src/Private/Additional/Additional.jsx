import "./additional.scss";
import { Link } from "react-router-dom";
import AdditionalTovar from "../../Settings/additional.json";
import { useSelector } from "react-redux";
export const Additional = () => {
  const { token } = useSelector(({ Reducer }) => Reducer);
  return (
    <section className="additional">
      <div className="container">
        <div className="additional-inner">
          {AdditionalTovar?.map((item) => {
            const { active, images } = item;
            return (
              <div className="card">
                <div className="card-header">
                  <div className="card-title-box">
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <div className="card-body card-body-active">
                  {(function (active) {
                    if (active) {
                      return images.map((item) => {
                        return (
                          <div className="card-item">
                            <img
                              src={item.img}
                              width={150}
                              height={100}
                              alt="Amazon Image"
                            />
                            <Link
                              className="card-link"
                              to={token ? "/see-more" : "login"}
                            >
                              {item.discription}
                            </Link>
                          </div>
                        );
                      });
                    } else {
                      return (
                        <img src={item.img} width={300} height={270} alt="" />
                      );
                    }
                  })(active)}
                </div>
                <div className="card-footer">
                  <Link
                    className="card-link link-active"
                    to={`${token ? "/see-more" : "login"}`}
                  >
                    {item.discription}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
