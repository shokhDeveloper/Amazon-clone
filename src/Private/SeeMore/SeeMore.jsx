import "./seemore.scss";
import { ApiRequests, useBack } from "../../Settings";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTovars } from "../../Settings/redux/slice";
import { v4 } from "uuid";
import { Context, Like, Tovar } from "../../Components";
export const SeeMore = () => { 
  const {page,  limit, setLimit} = useContext(Context)
  const {tovars} = useSelector(({Reducer}) => Reducer)  
  const dispatch = useDispatch()
  const {getTovar} = ApiRequests
  const handleGetTovar = async () => {
    if(!tovars.length || limit <= 20 ){
        try{
            const request =  getTovar(`/tovars?_page=1&_limit=${limit}`).catch(error => console.log(error))
            if((await request).status === 200 || (await request).status === 304){
                const response = (await request).data
                dispatch(setTovars(response))
            }
        }catch(error){
            return error
        }
    }
  } 
  useEffect(() => {
    handleGetTovar()
  },[limit])
  useEffect(() => {
    setLimit(page * limit)
},[page])
  useBack(true);
  return (
    <section className="seemore">
      <div className="container">
        <div className="seemore-title-box">
            <h2 className="seemore-title">Shopping tovar</h2>
        </div>
        <ul className="seemore-tovars">
          {tovars?.map((item) => {
            return (
              <Tovar item={item}/>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
