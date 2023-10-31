import "./profile.scss"
import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ApiRequests } from "../ApiRequests"
import { setProfile, setProfileType, setUpdateType } from "../redux/slice"
import { Button } from "../Styled"

export const Profile = () => {
    const {token, profileType, profile, user, updateType} = useSelector(({Reducer}) => Reducer)
    const dispatch = useDispatch()
    const {getProfile} = ApiRequests
    const handleGetProfile = useCallback(async  () =>{
        if(token && !profileType && profile.length === 0){
            try{
                const request = await getProfile(user.id)
                if(request.status === 200 || request.status === 304){
                    const response = await request.data
                    dispatch(setProfile([response]))
                    dispatch(setProfileType(false))
                }
            }catch(error){
                return error
            }   
        }
    },[token, profileType, profile ])
    useEffect(() => {
        console.log(profile)
        handleGetProfile()
    },[handleGetProfile])
    return(
        <section className="profile">
            <div className="container">
                <div className="profile-title-box">
                    <h2 className="profile-title">Akkaunt ma'lumotlarni yangilash</h2>
                </div>
                <div className="profile-inner">
                <div className="profile-inner-box">
                {profile.map(item => {
                    return(
                        <form className="sign-form" id="form-update-profile-data">
                    <label htmlFor="username">
                    <p>Username</p>
                    <input defaultValue={item.user_name} className="form-input" type="text" placeholder="Username" id="user_name" name="user_name" readOnly={updateType} />
                    </label>
                    <label htmlFor="email">
                        <p>Email or number</p>
                        <input defaultValue={item.email} className="form-input" type="text" placeholder="Email or phone number" id="email" name="email" readOnly={updateType} />
                    </label>
                    <label htmlFor="password">
                        <p>Password</p>
                        <input defaultValue={"Password"} className="form-input" type="type"  placeholder="Password" id="password" name="password" readOnly={updateType} />
                    </label>
                </form>
                    )
                })}

                    <Button form={updateType ? "": "form-update-profile-data"} type={updateType ? "button" : "submit"} styledtype={updateType ? "light": ""} onClick={() => {
                        if(updateType){
                            dispatch(setUpdateType(false))
                        }else{
                            console.log("ishladi")
                        }
                    }     
                    } >Yangilash</Button>
                    
                {/* )} */}
                </div>
               
                </div>
            </div>
        </section>
    )
}