import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, useBack, useLoader } from "../../Settings";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setErrorTyping, setGoogleUserNotPassword, setModalGooglePasswordLogin, setSearchActive, setSign, setSignHelp, setToken, setUser } from "../../Settings/redux/slice";
import {ImPlay3}  from "react-icons/im"
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import axios from "axios";
import { ErrorTyping, Modal, SignPassword } from "../../Components";
import { signInWithPopup } from "firebase/auth";
import { GoogleProvider, auth } from "../../Settings/firebase/firebase.config";
export const Login = () => {
  const date = new Date()
  const {signHelp, token, errorTyping, googleUser, modalGooglePasswordLogin, errorTypingText} = useSelector(({Reducer}) => Reducer)
  const {openLoader} = useLoader()
  const validationSchema = Yup.object().shape({
    email: Yup.string().test(
      "contact",
      "Invalid Email or Phone number",
      (value) => {
        const emailRejex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const phoneRejex = /^\d{12}$/;
        if (!emailRejex.test(value) && !phoneRejex.test(value)) {
          return false;
        } else {
          return true;
        }
      }
    ),
    password: Yup.string()
      .min(3, "Min 3")
      .max(12, "Max 12")
      .required("Password its required !"),
  });
  const {register ,watch, control,  formState:{errors, isValid}, handleSubmit} = useForm({
    values: {
      email: "",
      password: ""
    },
    mode: "all",
    resolver: yupResolver(validationSchema)
  })
  const navigate = useNavigate()
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (pathname === "/sign") {
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
  const {mutate} = useMutation((data) => {
    axios.post(process.env.REACT_APP_SERVER + "/login", {...data, date: `${date.toLocaleString()} Login At`}).then(response => {
      if(response?.status === 200){
        const {accessToken, user} = response.data
        dispatch(setToken(accessToken))
        dispatch(setUser(user))        
      }
    }).catch(error => {
      if(error?.response?.status === 400){
        dispatch(setErrorTyping(true))
      }
    })
  })
  const onSubmit = (userData) => {
    mutate(userData)
  }
  const handleGoogle = () => {
    signInWithPopup(auth, GoogleProvider).then(response => {
      const { user:{displayName, email}} = response
      const GoogleUser = {
        user_name: displayName,
        email,
        password: null
      }
      dispatch(setGoogleUserNotPassword(GoogleUser))
    })
  }
  useEffect(() => {
    if(token){
        openLoader()
        navigate("/")
        window.location.reload()
    }
    if(googleUser.user_name && !googleUser.password){
      dispatch(setModalGooglePasswordLogin(true))
    }

  },[token, googleUser])
  
  watch()
  useBack(true);
  return (
    <section className="login" onClick={handleClick}>
      <div className="sign-items">

      <div className="container">
        <div className="sign-image-box">
          <img
            onClick={() => window.location.reload()}
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
            }
            alt="Amazon Logo"
          />
        </div>
        <div className="sign-inner">
          <div className="sign-inner-box">
            <form onSubmit={handleSubmit(onSubmit)} className="sign-form">
              <output>
                <h3>Sign in</h3>
              </output> 
              <ErrorTyping   type={errorTyping} text={errorTypingText} modal={false}/>
              <label htmlFor="email">
                <p className={`${errors?.email || errorTyping  ? "error-text": "" }`}>{errors?.email? errors?.email?.message: "Email or phone number"}</p>
                <Controller name="email" control={control} render={({field}) => (
                  <input className={`form-input ${errors?.email || errorTyping  ? "form-error-input": ""}`} {...field} type="text" id="email" name="email" placeholder="Email or number"></input>
                )}></Controller>

              </label>
              <label htmlFor="password">
                <p className={`${errors?.password || errorTyping  ? "error-text": "" }`}>{errors?.password? errors?.password?.message : "Password"}</p>
                <input {...register("password")} className={`form-input ${errors?.password || errorTyping ? "form-error-input": ""}`} type="password" name="password" id="password" />
              </label>
              <div className="sign-btns">
              <Button className="border-transparent">Continue</Button>
              <Button onClick={handleGoogle} className="border-transparent google-btn" type="button" styledtype="light">Google Authentication</Button>
              </div>
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
        <div className="sign-bottom">
          <div className="sign-create-line">
            <p>New Amazon ? </p>
          </div>
          <Button styledtype="light" onClick={() => navigate("register") } className="border-transparent" type="light">Create your Amazon accaount  </Button>
        </div>
      </div>
      </div>
      <div className="sign-items-bottom">
        <div className="container">
           <div className="sign-items-bottom-box">
               <div className="sign-items-bottom-links">
                <Link className="card-link link-active" to={"register"}>Conditions of Use </Link>
                <Link className="card-link link-active" to={"register"}>Privacy Notice</Link>
                <Link className="card-link link-active" to={"register"}>Help</Link>
                </div>   
                  <p><small>&copy; 1996-{date.getFullYear()}, Amazo.com, Inc. or its affiliates</small></p>
            </div>     
        </div>
      </div>
      <Modal modal={modalGooglePasswordLogin} setModal={setModalGooglePasswordLogin}>
        <SignPassword type={"login"} />
      </Modal>
    </section>
  );
};
