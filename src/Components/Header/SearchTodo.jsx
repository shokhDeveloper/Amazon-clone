import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBottomIndex, setDeleteUser, setSearchData, setSearchFilter } from "../../Settings/redux/slice";
import { ApiRequests } from "../../Settings";
export const SearchTodo = ({ active, focus }) => {
  let { searchData, searchValue,  } = useSelector(({ Reducer }) => Reducer);
  const dispatch = useDispatch()
  const {getSearchRequests, deleteSearchRequest} = ApiRequests
  const handleGetUsers = useCallback(async () => {
    if(!searchValue?.length){
      const request = await getSearchRequests()
      if(request?.status === 200){
        const response = await request.data
        dispatch(setSearchData(response))  
      }
    }
  },[searchValue])
  useEffect(() => {
    if(searchValue?.length){
      let rejex = new RegExp(searchValue, "gi");
      dispatch(setSearchFilter(rejex))
    }else{
      handleGetUsers() 
    }
  }, [searchValue]);
  const handleDelete = async (id) => {
    const request = await deleteSearchRequest(id)
    if(request?.status === 200){
      dispatch(setDeleteUser(id))
    }
  }
  useEffect(() => {
    if(active && focus){
      dispatch(setBottomIndex(false))
    }else{
      dispatch(setBottomIndex(true))
    }
  },[active, focus])
  return (
    <div
      className="search-todo-box"
      style={{ display: active && focus ? "flex" : "none" }}
    >
      <div className="search-todo">
        <ul className="search-todo-list">
          {searchData?.map((item) => {
            return (
              <li className="search-todo-item" key={item.id}>
                <p>{item.name}</p>
                <button className="search-todo-delete-btn" onClick={() => handleDelete(item.id)}>&times;</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
