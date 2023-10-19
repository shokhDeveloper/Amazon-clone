import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setErrorTyping } from "../../Settings/redux/slice"

export const ErrorTyping = () => {
    const {errorTypingText, errorTyping} = useSelector(({Reducer}) => Reducer)
    const dispatch = useDispatch()
    const textRef = useRef()
    let idx = 0
    const handleTyping = () => {
        if(idx < errorTypingText.length){
            textRef.current.innerHTML += errorTypingText.charAt(idx)
            idx++
            setTimeout(handleTyping, 50)
        }else{
            idx = 0              
            textRef.current.innerHTML = null
            dispatch(setErrorTyping(false))
        }   
    }
    useEffect(() =>{
        if(idx < errorTypingText.length && errorTyping){
            handleTyping()
        }
    },[errorTyping, idx]) 
    return(
        <p ref={textRef} className="error-text"></p>
    )
}