import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setErrorTyping, setErrorUpdate } from "../../Settings/redux/slice"

export const ErrorTyping = ({text, type, modal}) => {
    const dispatch = useDispatch()
    const textRef = useRef()
    let idx = 0
    const handleTyping = () => {
        if(idx < text.length){
            textRef.current.innerHTML += text.charAt(idx)
            idx++
            setTimeout(handleTyping, 50)
        }else{
            idx = 0              
            textRef.current.innerHTML = null
            dispatch(setErrorTyping(false))
           if(modal){
            dispatch(setErrorUpdate(false))
           }     
        }   
    }
    useEffect(() =>{
        if(idx < text.length && type ){
            handleTyping()
        }
    },[type, idx]) 
    return(
        <p ref={textRef} className="error-text"></p>
    )
}