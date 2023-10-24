import { useTranslation } from "react-i18next";
import "./backtop.scss";
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux";

export const BackTop = () => {
    const {flag} = useSelector(({Reducer}) => Reducer)
    const {i18n:{language}, t} = useTranslation()
    return(
        <>
            <section className="back-top">
                <a className="backtop-btn" href="#swiper">Back to top</a>    
                <div className="container">
                    <div className="backtop-inner">
                        <div className="backtop-item">
                            <p className="backtop-item-title"><strong>Get to Know Us</strong></p>
                            <ul className="backtop-item-list">
                                <li>
                                    <NavLink>Careers</NavLink>
                                </li>
                                <li>
                                    <NavLink> Blog </NavLink>
                                </li>
                                <li>
                                    <NavLink>About Amazon</NavLink>
                                </li>
                                <li>
                                    <NavLink>
                                        Amazon devices
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink>
                                        Amazon Science
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="backtop-item">
                            <p className="backtop-item-title"><strong>Get to Know Us</strong></p>
                            <ul className="backtop-item-list">
                                <li>
                                    <NavLink>Careers</NavLink>
                                </li>
                                <li>
                                    <NavLink> Blog </NavLink>
                                </li>
                                <li>
                                    <NavLink>About Amazon</NavLink>
                                </li>
                                <li>
                                    <NavLink>
                                        Amazon devices
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink>
                                        Amazon Science
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="backtop-item">
                            <p className="backtop-item-title"><strong>Get to Know Us</strong></p>
                            <ul className="backtop-item-list">
                                <li>
                                    <NavLink>Careers</NavLink>
                                </li>
                                <li>
                                    <NavLink> Blog </NavLink>
                                </li>
                                <li>
                                    <NavLink>About Amazon</NavLink>
                                </li>
                                <li>
                                    <NavLink>
                                        Amazon devices
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="backtop-item">
                            <p className="backtop-item-title"><strong>Get to Know Us</strong></p>
                            <ul className="backtop-item-list">
                                <li>
                                    <NavLink>Careers</NavLink>
                                </li>
                                <li>
                                    <NavLink> Blog </NavLink>
                                </li>
                                <li>
                                    <NavLink>About Amazon</NavLink>
                                </li>
                                <li>
                                    <NavLink>
                                        Amazon devices
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink>
                                        Amazon Science
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="backtop-bottom">
                        <div className="backtop-bottom-inner">
                            <div className="backtop-image">
                            <img width={100} height={80}  src={"http://localhost:3000/static/media/logo.79a1dd45e47017ffa5da.png"} alt="" 
                            onClick={() => window.location.reload()} />
                            </div>
                            <div className="backtop-bottom-languages ">
                                <div className="backtop-bottom-language backtop-bottom-btn">
                                     {t("language")}
                                </div>
                            </div>
                            <div className="backtop-bottom-valyuta backtop-bottom-btn">
                                <p> ${t("valyuta")}</p>
                            </div>
                            <div className="backtop-bottom-data">
                                <img src={flag} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}