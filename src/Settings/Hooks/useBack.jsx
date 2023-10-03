import { useEffect } from "react"
import { useNavigate } from "react-router"

export const useBack = (type) => {
    const navigate = useNavigate()
    const handleKey = (event) => {
        if(event.keyCode === 27){
            navigate(-1)
        }
    }
    useEffect(() => {
        if(type){
            window.addEventListener("keyup", handleKey  )
            window.removeEventListener("keyup", handleKey)
        }
    },[type])
}