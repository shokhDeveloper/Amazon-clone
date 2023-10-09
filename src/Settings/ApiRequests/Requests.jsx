import axios from "axios"

const SEARCH_BASE_URL = "https://jsonplaceholder.typicode.com/users"
export const ApiRequests = {
    getSearchRequests(){
        return(
            axios.get(SEARCH_BASE_URL)
        )
    },
    deleteSearchRequest(id){
        return(
            axios.delete(SEARCH_BASE_URL + `/${id}` )
        )
    }
}