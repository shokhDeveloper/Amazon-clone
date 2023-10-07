import { useEffect } from "react";
import { useFetching } from "../../Settings";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteUser } from "../../Settings/redux/slice";
import axios from "axios";

export const SearchTodo = ({ active }) => {
  let { searchData, searchValue } = useSelector(({ Reducer }) => Reducer);
  const dispatch = useDispatch()
  useEffect(() => {
    let rejex = new RegExp(searchValue, "gi");
    searchData = searchData?.filter((item) => item.name.match(rejex));
    console.log(searchData);
  }, [searchValue]);
  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => {
        if(response.status === 200){
            dispatch(setDeleteUser(id))
        }
    })
  }
  return (
    <div
      className="search-todo-box"
      style={{ display: active ? "flex" : "none" }}
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
