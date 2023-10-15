import { useTranslation } from "react-i18next"
import { Button } from "../../Settings"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setLanguageBox, setSearchActive, setSign } from "../../Settings/redux/slice"
import { useEffect } from "react"

export const SignBox = () => {
    const {signBox} = useSelector(({Reducer}) => Reducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {t} = useTranslation()
    useEffect(() => {
        if(signBox){
            dispatch(setSearchActive(true))
            dispatch(setLanguageBox(false))
        }
    },[signBox])
    return(
        <div className="site-sign-box" onMouseLeave={() => {
            dispatch(setSearchActive(false))
            dispatch(setSign(false))} }>
          <div className="site-sign-elements">
            <Button onClick={() => navigate("/login") } className="border-transparent">{t("sign")}</Button>
            <p className="default-text">Sizda akkaunt yo'qmi ? <Link className="default-link" to={"/register"}>Register</Link></p>
          </div>
          <div className="site-sign-inner">
            <div className="site-sign-item">
                <p><strong>Your lists</strong></p>
                <ul>
                    <li>
                        <Link to={"/register"}>Create Account</Link>
                    </li>
                    <li>
                        <Link to={"/login"}>Login Account</Link>
                    </li>
                </ul>
            </div>
            <div className="site-sign-item">
                <p><strong>Your Account</strong></p>
                <ul>
                    <li>
                        <Link to={"/profile-settings"}>Account</Link>
                    </li>
                    <li>
                        <Link to={"/login"}>Login Account</Link>
                    </li>
                </ul>
            </div>
          </div>
        </div>
    )
}