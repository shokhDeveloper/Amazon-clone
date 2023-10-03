import axios from "axios"
import { useEffect, useState } from "react"

export const useFetching = (url) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        ;(async function(){
            try{
                const request = await axios.get(url).catch(error => console.log(error))
                if(request?.status === 200 || request?.status === 304){
                    const response = await request.data
                    setData(response)
                }
            }catch(error){
                console.log(error)
            }
        }())
    },[url])
    return { data }
}