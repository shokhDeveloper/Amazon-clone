import {Form, Formik, ErrorMessage, Field } from "formik"
import * as Yup from "yup"
import { Button, useLoader } from "../../Settings"
import { useDispatch, useSelector } from "react-redux"
import { setGoogleUser, setModalGooglePassword, setToken, setUser } from "../../Settings/redux/slice"
import { useEffect } from "react"
import { useMutation } from "react-query"
import axios from "axios"
import { useNavigate } from "react-router"

export const SignPassword = ({type}) => {
    const date = new Date()
    const {openLoader} = useLoader()
    const {googleUser, token} = useSelector(({Reducer}) => Reducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const initialValues = {
        password: ""
    }
    const validationSchema = Yup.object({
        password: Yup.string().max(10, "Max 10 characters").required("Password its required !")
    })
    const handleSub = (password) => {
        dispatch(setGoogleUser({...googleUser, ...password, date: `${date.toLocaleString()} Register At `}))
    }
    const {mutate} = useMutation((data) => {
        axios.post(process.env.REACT_APP_SERVER + `/${type}`, data).then(response => {
            const {accessToken, user} = response.data
            if(type === "login" && response.status === 200 || response.status === 304){
                dispatch(setToken(accessToken))
                dispatch(setUser(user))
            }else if(type === "register" && response.status === 201){
                dispatch(setToken(accessToken))
                dispatch(setUser(user))
            }
        }).catch(error => {
            return error
        })
    })
    useEffect(() => {
        if(googleUser.password){
            ;(() => {
                mutate(googleUser)
            })()
        }
        if(token){
            openLoader()
            navigate("/")
            window.location.reload()
        }
    },[googleUser, token])
    return(
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSub}>
        {({errors, touched }) => (
        <Form className="sign-form">
          <output>
            <h3>Please enter your password</h3>
          </output>
            {errors?.password && touched?.password ? (
                <ErrorMessage className="error-text" component={"p"} id="password" name="password"/>
            ) :(
            <p>Password</p>
            )}
            <Field
              className={`form-input ${errors?.password && touched?.password ? "form-error-input": ""}`}
              type="text"
              id="password"
              name="password"
              placeholder="At least 10 characters"
            />
          <div className="sign-btns">
            <Button type="submit">Continue</Button>
          </div>
        </Form>   
        )}
        </Formik>
    )
}