import AmericaFlag from "../../Settings/assets/images/America-Flag.png"
import { useTranslation } from "react-i18next";
import "./backtop.scss";
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { LanguageBox } from "../LanguageBox";
import { setBackTopLanguageBox, setSearchActive } from "../../Settings/redux/slice";
import { useEffect } from "react";
import { Footer } from "../Footer";
export const BackTop = () => {
    const {flag, backTopLanguageBox} = useSelector(({Reducer}) => Reducer)
    const dispatch = useDispatch()
    const {t} = useTranslation()
    const handleMouseEnter = () => {
        dispatch(setBackTopLanguageBox(true))
    }
    useEffect(() => {
        console.log(backTopLanguageBox)
    },[backTopLanguageBox])
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
                   
                </div>
                <hr className="backtopLine" />
                <div className="backtop-bottom">
                    <div className="container">
                        <div className="backtop-bottom-inner">
                            <div className="backtop-image">
                            <img width={100} height={80}  src={"http://localhost:3000/static/media/logo.79a1dd45e47017ffa5da.png"} alt="" 
                            onClick={() => window.location.reload()} />
                            </div>
                            <div className="backtop-bottom-languages" onMouseEnter={handleMouseEnter}>
                                <div className="backtop-bottom-language backtop-bottom-btn">
                                     {t("language")}
                                </div>
                                <LanguageBox type={"backTop"} languageBox={backTopLanguageBox} setLanguageBox={setBackTopLanguageBox}/>
                            </div>
                            <div className="backtop-bottom-valyuta backtop-bottom-btn">
                                <p> ${t("valyuta")}</p>
                            </div>
                            <button className="backtop-bottom-data backtop-bottom-btn" style={{backgroundImage: `url(${flag === "https://flagcdn.com/us.svg" ? AmericaFlag : flag ? flag : AmericaFlag})`}}>
                                {t("region")}
                            </button>
                        </div>
                    </div>
                    </div>
            </section>
            <Footer/>
        </>
    )
}