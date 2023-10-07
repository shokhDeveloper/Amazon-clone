import { RouterProvider } from "react-router";
import { GlobalStyle, route, useFetching, useLoader } from "./Settings";
import { Loader } from "./Components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchActive, setSearchData } from "./Settings/redux/slice";

function App() {
  const {openLoader} = useLoader()
  const {data} = useFetching("https://jsonplaceholder.typicode.com/users")
  const {loader} = useSelector(({Reducer}) => Reducer )
  const dispatch = useDispatch()
  const handleMouse = (event) => {
    if(event.target.matches(".header-search-input")){
      dispatch(setSearchActive(true))
    }else if(!event.target.classList.contains("search-todo-delete-btn")){
      dispatch(setSearchActive(false) )
    }else{
      return false
    }
  }
  useEffect(() => {
    if(loader){
      openLoader()
    }
  },[loader])
  useEffect(() => {
    window.addEventListener("mousedown", handleMouse)
    return () => window.removeEventListener("mousedown", handleMouse)
  },[])
  useEffect(() => {
    if(data?.length){
      dispatch(setSearchData(data))
    }
  },[data])
  return (
    <>
    {loader ? (
      <Loader/>
    ): (
     <RouterProvider router={route}/> 
    )}
    <GlobalStyle/>
    </>
  );
}

export default App;
