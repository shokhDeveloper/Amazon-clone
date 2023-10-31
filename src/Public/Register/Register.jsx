import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, useBack, useLoader } from "../../Settings";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  setGoogleUserNotPassword,
  setModalGooglePassword,
  setSearchActive,
  setSign,
  setSignHelp,
  setToken,
  setUser,
} from "../../Settings/redux/slice";
import { useForm, Controller } from "react-hook-form";
import { useMutation } from "react-query";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { GoogleProvider, auth } from "../../Settings/firebase/firebase.config";
import { Modal, SignPassword } from "../../Components";
export const Register = () => {
  const date = new Date();
  const { token, googleUser, modalGooglePassword } = useSelector(
    ({ Reducer }) => Reducer
  );
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { openLoader } = useLoader();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === "/Sign") {
      dispatch(setSign(false));
      dispatch(setSearchActive(false));
    }
  }, [pathname]);
  const validationSchema = Yup.object().shape({
    email: Yup.string().test(
      "contact",
      "Invalid Email or Phone number",
      (value) => {
        const emailRejex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const phoneRejex = /^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/;
        if (!emailRejex.test(value) && !phoneRejex.test(value)) {
          return false;
        } else {
          return true;
        }
      }
    ),
    user_name: Yup.string().required("User name its required !"),
    password: Yup.string()
      .min(3, "Min 3")
      .max(12, "Max 12")
      .required("Password its required !"),
  });
  const {
    register,
    formState: { errors, isValid },
    watch,
    handleSubmit,
    control,
  } = useForm({
    values: {
      user_name: "",
      password: "",
    },
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  const { mutate } = useMutation((data) => {
    axios
      .post(process.env.REACT_APP_SERVER + "/register", {
        ...data,
        date: `${date.toLocaleString()} Register at`,
      })
      .then((response) => {
        if (response.status === 201) {
          const { accessToken, user } = response.data;
          dispatch(setToken(accessToken));
          dispatch(setUser(user));
        }
      });
  });
  const onSubmit = (userData) => {
    mutate(userData);
  };
  const handleGoogle = () => {
    signInWithPopup(auth, GoogleProvider).then((response) => {
      if (response.user) {
        const {
          user: { displayName, email },
        } = response;
        const GoogleUser = {
          user_name: displayName,
          email,
          password: null,
        };
        dispatch(setGoogleUserNotPassword(GoogleUser));
      }
    });
  };
  useEffect(() => {
    if (token) {
      openLoader();
      navigate("/");
      window.location.reload()
    }
  }, [token]);
  useEffect(() => {
    if (googleUser.user_name && !googleUser.password) {
      dispatch(setModalGooglePassword(true))
    }
  }, [googleUser]);
  watch();
  useBack(true);
  return (
    <section className="sign">
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
              <form className="sign-form" onSubmit={handleSubmit(onSubmit)}>
                <output>
                  <h3>Sign in</h3>
                </output>
                <label htmlFor="name">
                  <p className={errors?.user_name ? "error-text" : ""}>
                    {errors?.user_name ? errors?.user_name?.message : "Name"}
                  </p>
                  <input
                    className={`form-input ${
                      errors?.user_name ? "form-error-input" : ""
                    }`}
                    {...register("user_name")}
                    type="text"
                    name="user_name"
                    id="user_name"
                    placeholder="First and last name"
                  />
                </label>
                <label htmlFor="email">
                  <p className={errors?.contact ? "error-text" : ""}>
                    {errors?.contact
                      ? errors?.contact.message
                      : "Email or phone number"}
                  </p>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => {
                      return (
                        <input
                          className={`form-input ${
                            errors?.contact ? "form-error-input" : ""
                          }`}
                          type="text"
                          {...field}
                          id="email"
                          name="email"
                          placeholder="Email or number"
                        />
                      );
                    }}
                  />
                </label>
                <label htmlFor="password">
                  <p className={`${errors?.password ? "error-text" : ""}`}>
                    {errors?.password ? errors?.password?.message : "Password"}
                  </p>
                  <input
                    className={`form-input ${
                      errors?.password ? "form-error-input" : ""
                    }`}
                    {...register("password")}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="At least 10 characters"
                  />
                </label>
                <div className="sign-btns">
                  <Button
                    type="submit"
                    className="border-transparent submitter-btn"
                  >
                    Continue
                  </Button>
                  <Button
                    onClick={handleGoogle}
                    styledtype="light"
                    className="light border-transparent google-btn"
                  >
                    Google authentication
                  </Button>
                </div>
              </form>
              <div className="sign-form-discription-box">
                <p className="sign-form-discription">
                  <small>
                    By continuing, you agree to Amazon's{" "}
                    <Link to={"register"} className="card-link link-active">
                      {" "}
                      Conditions of Use and Privacy Notice.
                    </Link>{" "}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sign-items-bottom">
        <div className="container">
          <div className="sign-items-bottom-box">
            <div className="sign-items-bottom-links">
              <Link className="card-link link-active" to={"register"}>
                Conditions of Use{" "}
              </Link>
              <Link className="card-link link-active" to={"register"}>
                Privacy Notice
              </Link>
              <Link className="card-link link-active" to={"register"}>
                Help
              </Link>
            </div>
            <p>
              <small>
                &copy; 1996-{date.getFullYear()}, Amazo.com, Inc. or its
                affiliates
              </small>
            </p>
          </div>
        </div>
      </div>
      <Modal modal={modalGooglePassword} setModal={setModalGooglePassword}>
        <SignPassword type={"register"}/>
      </Modal>
    </section>
  );
};
