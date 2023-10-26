import "./like.scss"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setLikeTakeDown, setLikeTovar } from "../../Settings/redux/slice"
export const Like = ({id, parentId}) => {
    const {allTovars, likesTovars} = useSelector(({Reducer}) => Reducer)
    const [like, setLike] = useState(false)
    const likeRef = useRef()
    const dispatch = useDispatch()
    const handleIncludeTovar = () => {
       let includeTovar = likesTovars.find(item => item.id === id && item.parentId === parentId)
       if(typeof includeTovar === "object"){
            setLike(true)
            likeRef.current.checked = true
        }else{
            setLike(false)
       }
    }
    const handleChange = (event) => {
        if(event.target.checked){
            const defaultTovar = allTovars.find(item => item.id === id && item.parentId === parentId)
            dispatch(setLikeTovar(defaultTovar))
        }else{
            let nextTovars = likesTovars.filter(item => item.id !== id && item.parentId === parentId)
            dispatch(setLikeTakeDown(nextTovars))
        }
    }
    useEffect(() => {
        handleIncludeTovar()
    },[id])
    return(
        <input ref={likeRef} className="like" type="checkbox" onChange={handleChange}  defaultChecked={like}    />
    )
}