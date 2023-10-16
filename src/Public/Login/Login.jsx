import "./login.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, useBack } from "../../Settings";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchActive, setSign, setSignHelp } from "../../Settings/redux/slice";
import {ImPlay3}  from "react-icons/im"
export const Login = () => {
  const {signHelp} = useSelector(({Reducer}) => Reducer)
  const navigate = useNavigate()
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (pathname === "/login") {
      dispatch(setSign(false));
      dispatch(setSearchActive(false));
    }
  }, [pathname]);
  const handleClick = (event) => {
    if(!event.target.matches(".sign-form-help-text")){
      dispatch(setSignHelp(false))  
    }else{
      dispatch(setSignHelp(!signHelp))
    }
  }
  useBack(true);
  return (
    <section className="login" onClick={handleClick}>
      <div className="container">
        <div className="login-image-box">
          <img
            onClick={() => window.location.reload()}
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
            }
            alt="Amazon Logo"
          />
        </div>
        <div className="login-inner">
          <div className="login-inner-box">
            <form className="sign-form">
              <output>
                <h3>Sign in</h3>
              </output>
              <label htmlFor="email">
                <p>Email or mobile phone number</p>
                <input type="email" name="email" id="email" />
              </label>
              <label htmlFor="password">
                <p>Password</p>
                <input type="password" name="password" id="password" />
              </label>
              <Button className="border-transparent">Continue</Button>
            </form>
            <div className="sign-form-discription-box">
              <p className="sign-form-discription">
                <small>
                  By continuing, you agree to Amazon's{" "}
                  <Link
                    
                    to={"/register"}
                    className="card-link link-active"
                  >
                    {" "}
                    Conditions of Use and Privacy Notice.
                  </Link>{" "}
                </small>
              </p>
            </div>
            <div className="sign-form-help-box">
              <p className="card-link link-active sign-form-help-text"><ImPlay3 className="signform-help-icon" style={{transform: signHelp ? "rotateZ(90deg)": "rotateZ(0deg)"}} />  Need help ?  </p>
              {signHelp && (
                <>
                  <p className="card-link link-active ">Forget your password ?  </p>
                  <p className="card-link link-active ">  Other issues with Sign-In ?  </p>
              
                </> 
              )}
            </div>
          </div>
        </div>
        <div className="login-bottom">
          <div className="login-create-line">
            <p>New Amazon ? </p>
          </div>
          <Button onClick={() => navigate("/register") } className="border-transparent" type="light">Create your Amazon accaount  </Button>
        </div>
      </div>
    </section>
  );
};
