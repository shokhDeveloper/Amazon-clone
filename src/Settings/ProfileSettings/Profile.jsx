import "./profile.scss"
import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ApiRequests } from "../ApiRequests"
import { setErrorUpdate, setProfile, setProfileType, setSuccessUpdate, setUpdateType, setUser } from "../redux/slice"
import {BackTop, ErrorTyping, Modal} from "../../Components";
import { useForm, Controller } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as  Yup from "yup"; 
import { useMutation } from "react-query"
import axios from "axios"
import { useBack, useLoader } from "../Hooks"
import { Button } from "../Styled"
export const Profile = () => {
    const date = new Date()
    const {token, profileType, profile, user, updateType, errorUpdate, errorUpdateText} = useSelector(({Reducer}) => Reducer)
    const validationSchema = Yup.object().shape({
        email: Yup.string().test(
            "contact",
            "Invalid Email or  Phone number",
            (value) => {
                const emailRejex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                const phoneRejex = /^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/
                if(!emailRejex.test(value) && !phoneRejex.test(value)){
                    return false
                }else{
                    return true
                }
            }
        ),
        password: Yup.string().min(3, "Min, 3").max(12, "Max 12"),
        user_name: Yup.string().required("Username its required !")
    })
    const {openLoader} = useLoader()
    const {register, watch, control, formState:{errors, isValid}, handleSubmit} = useForm({
        values:{
            user_name: profile.user_name,
            email: profile.email,
            password: "Password"
        },
        mode: "all",
        resolver: yupResolver(validationSchema)
    })
    const dispatch = useDispatch()
    const {getProfile} = ApiRequests
    const handleGetProfile = useCallback(async  () =>{
        if(token && !profileType && profile.length === 0){
            try{
                const request = await getProfile(user.id)
                if(request.status === 200 || request.status === 304){
                    const response = await request.data
                    dispatch(setProfile(response))
                    dispatch(setProfileType(true))
                }
            }catch(error){
                return error
            }   
        }
    },[token, profileType, profile ])
    useEffect(() => {
        handleGetProfile()
    },[handleGetProfile])
    useEffect(() => {
        if(watch().user_name === profile.user_name && watch().email === profile.email && watch().password === "Password"){
            dispatch(setUpdateType(true))
        }else{
            dispatch(setUpdateType(false))
        }
    },[watch()])
    const {mutate} = useMutation((data) => {
        axios.put(process.env.REACT_APP_SERVER + `/users/${profile.id}`, data).then(response => {
            if(response?.status === 200){
                const {data} = response
                dispatch(setUser(data))
                dispatch(setProfileType(false))
                dispatch(setProfile([]))
                openLoader()
            }
        })
    })
    const onSubmit = (event) => {
        if(event.password !== "Password"){
            mutate({...event, date: `${date.toLocaleString()} Update profile data !`})
        }else{
            dispatch(setErrorUpdate(true))
        }
    }
    watch()
    useBack(true)
    return(
        <>
        
        <section className="profile">
            <div className="container">
                <div className="profile-title-box">
                    <h2 className="profile-title">Akkaunt ma'lumotlarni yangilash</h2>
                </div>
                <div className="profile-inner">
                <div className="profile-inner-box">
                {[profile].map(item => {
                    return(
                        <form onSubmit={handleSubmit(onSubmit)} className="sign-form" id="form-update-profile-data">
                    <label htmlFor="username">
                    <p>Username</p>
                    <input {...register("user_name")} defaultValue={item.user_name} className="form-input" type="text" placeholder="Username" id="user_name" name="user_name"  />
                    </label>
                    <label htmlFor="email">
                        <p>Email or number</p>
                        <Controller defaultValue={item.email} name="email" control={control} render={({field}) => {
                            return(
                                <input {...field} defaultValue={item.email} className="form-input" type="text" placeholder="Email or phone number" id="email" name="email"  />
                            )
                        }}/>
                    </label>
                    <label htmlFor="password">
                        <p>Password</p>
                        <input {...register("password")} defaultValue={"Password"} className="form-input" type="type"  placeholder="Password" id="password" name="password"  />
                    </label>
                    <Button type="submit" form="form-update-profile-data" disabled={updateType}>Yangilash</Button>
                </form>
                    )
                })}
                </div>
                <Modal modal={errorUpdate} setModal={setErrorUpdate} >
                    <ErrorTyping type={errorUpdate} text={errorUpdateText} modal={true}/>
                </Modal>
                </div>
            </div>
        </section>
        <BackTop/>
        </>
    )
}