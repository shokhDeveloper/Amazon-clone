import { useTranslation } from "react-i18next"
import { ApiRequests, setItem } from "../../Settings"
import { useDispatch, useSelector } from "react-redux"
import { setSearchActive, setFlag } from "../../Settings/redux/slice"
import { Link } from "react-router-dom"
import { useEffect } from "react"
export const LanguageBox = ({languageBox, setLanguageBox, type}) => {
   const {searchActive} = useSelector(({Reducer}) => Reducer)
   const {i18n:{changeLanguage, language}, t} = useTranslation()
   const dispatch = useDispatch()
   const {getCountries} = ApiRequests
   const handleOut = () => {
    dispatch(setLanguageBox(false))
    dispatch(setSearchActive(false))  
  }
   const handleGetCountry = async (countrie) => {
    try{
     const request = await getCountries(countrie)
     if(request?.status === 200){
       const response = await request.data
       dispatch(setFlag(response[response?.length > 1 ? 1: 0].flags.svg))
       setItem("language-flag", response[response?.length > 1 ? 1: 0].flags.svg)
     }
    }catch(error){
     return error
    }
 }
    return(
        <div className={`site-languages-box ${type ? "languages-backTop-box": ""}`} style={{display: type === "headerLanguage"  && languageBox && searchActive ? "block": languageBox && type === "backTop" ? "block": "none" }} onMouseLeave={handleOut}>
            <div className="site-languages-discription-box">
              <p className="default-text">Change languages <Link className="default-link" to={"/sign-in"}>Learn more</Link></p>
              <div className="site-language-check-active">
                <input type="radio" name="language"  id="language" defaultChecked={language.trim() === "en" ? true: false} onChange={(event) => {
                  changeLanguage(event.target.value)
                  setItem("amazon-language", event.target.value)
                  handleGetCountry(t("languageApi"))
                }} value={"en"} />
                <span className="language-check">English - EN</span>
              </div>
            </div>
            <div className="site-languages-all">
              <div className="site-language-check">
               <input type="radio" name="language" id="language" defaultChecked={language === "de" ? true: false} onChange={(event) => {changeLanguage(event.target.value)
                  setItem("amazon-language", event.target.value)
                  handleGetCountry(t("languageApi"))

                } } value={"de"} />
                <span className="language-check">Deutch - DE</span>
              </div>
              <div className="site-language-check">
                <input type="radio" name="language" id="language" value={"ru"} defaultChecked={language === "ru" ? true: false} onChange={(event) => {
                  changeLanguage(event.target.value)
                  setItem("amazon-language", event.target.value)
                  handleGetCountry(t("languageApi"))

                }}  />
                <span className="language-check">Russia - RU</span>
              </div>
              <div className="site-language-check">
                <input type="radio" name="language" id="language" value={"uz"} defaultChecked={language === "uz" ? true: false} onChange={(event) => {
                  changeLanguage(event.target.value)
                  setItem("amazon-language", event.target.value)
                  handleGetCountry(t("languageApi"))

                }}/>
                <span className="language-check">Uzbek - UZ</span>
              </div>
           </div>
            <div className="site-language-currency">
              <p className="default-text">Change currency <Link className="default-link" to={"/sign-up"}>Learn mode</Link></p>
              <p className="default-text">$ - {t("currency")}</p>
          </div>
        </div>
    )
}