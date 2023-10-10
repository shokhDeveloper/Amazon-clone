import axios from "axios"

const SEARCH_BASE_URL = "https://jsonplaceholder.typicode.com/users";
const GET_BASE_URL_COUNTRIE = `https://restcountries.com/v3.1/name/`
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
    },
    getCountries(countrie){
        return(
            axios.get(GET_BASE_URL_COUNTRIE + `/${countrie}`)
        )
    }
}