import { RouterProvider } from "react-router";
import { GlobalStyle, route, useLoader } from "./Settings";
import { Loader } from "./Components";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const {openLoader} = useLoader()
  const {loader} = useSelector(({Reducer}) => Reducer )
  useEffect(() => {
    if(loader){
      openLoader()
    }
  },[loader])
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
