import { useCart } from "react-use-cart";
import { Like } from "../Like";
import ShoppingImg from "../../Settings/assets/images/shop.svg"
import { ShoppingBtn } from "../../Settings";
export const Tovar = ({ item }) => {
  const { addItem } = useCart();
  const handleShoppingClick = (id) => {
    addItem(item)
  };
  return (
    <li className="tovar" key={item.id}>
      <div className="tovar-header">
        <Like parentId={item.parentId} id={item.id} />
      </div>
      <div className="tovar-body">
        <img src={item.img} alt="Amazon Image" />
        <h3>{item.title}</h3>
        <h4>{item.price}$</h4>
      </div>
      <div className="tovar-footer">
        <ShoppingBtn className="tovar-shopping-btn" style={{backgroundImage: `url(${ShoppingImg})`, padding: "1rem"}} onClick={() => handleShoppingClick(item.id)}/>
      </div>
    </li>
  );
};
