import { useCallback, useContext, useEffect, useRef } from "react"
import { Context } from "../Context"
import { useDispatch, useSelector } from "react-redux"
import { useCart } from "react-use-cart"
import { setDefaultPrice, setTovarsPrice } from "../../Settings/redux/slice"
import { Button } from "../../Settings"

export const Shopping = () => {
    const {textType, setTextType, setActiveTovar, activeTovar} = useContext(Context)
    const {modalShopping, tovarsPrice} = useSelector(({Reducer}) => Reducer)
    const {items, updateItemQuantity, emptyCart} = useCart()
    const dispatch = useDispatch()
    const textRef = useRef()
    const handleText = () => {
        if(!textType){
            setTextType(true)
        }
    }
    const handlePriceDefault = useCallback(() => {
        dispatch(setDefaultPrice(0))
        if(items.length){
            items?.map(item => {
                if(item.quantity > 1){
                    let price = item.quantity * item.price
                    dispatch(setTovarsPrice(price))
                }else{
                    dispatch(setTovarsPrice(item.price))
                }
            })
        }
    },[items])
    const handlePrice = (event, item) => {
        switch(event.target.id){
            case "inc":{
                console.log("ishladi")
                updateItemQuantity(item.id, item.quantity+1)
            }break;
            case "dec":{
                updateItemQuantity(item.id, item.quantity-1)
            }
        }
    }
    const handleChange = (event, tovar) => {
        if(event.target.checked){
            setActiveTovar({
                parentId: tovar.parentId,
                id: tovar.id,
                active: true
            })
        }else{
            setActiveTovar({
                parentId: tovar.parentId,
                id: tovar.id,
                active: false
            })    
        }
    }
    useEffect(() => {
        if(textType && !modalShopping){
            setTextType(false)
        }
        if(textType && modalShopping){
            textRef.current.textContent = "Sotib olingan buyumlar"    
        }else{
            textRef.current.textContent = "Sotib olingan b..."
        }
    },[textType, modalShopping])
    useEffect(() => {
        handlePriceDefault()
    },[handlePriceDefault, tovarsPrice])
    return(
        <div className="shopping-tovar">
            <div className="shopping-tovar-info">
            <p ref={textRef} onClick={handleText} >Sotib olingan b... </p>
            <Button type={"orange"} onClick={() => emptyCart()}>Hammasini o'chirish</Button>
            </div>
            <div className="shopping-tovar-inner">
                {items?.length ? (
                    <ul className="shopping-tovars-lists">
                        {items?.map(item => {
                            return(
                                <li className={`shopping-tovar-item ${activeTovar?.parentId === item.parentId && activeTovar.id === item.id && activeTovar.active ? "tovar-active": ""} `}>
                                    <div className="shopping-tovar-image-box">
                                        <img src={item.img} width={100} height={150} alt="" />
                                    </div>
                                    <div className="shopping-tovar-settings">
                                        <div className="shopping-tovar-counts">
                                            <button onClick={ (event) => handlePrice(event, item)} className="border-transparent" id="dec">-</button>
                                            <p>{item.quantity}</p>
                                            <button onClick={ (event) =>handlePrice(event, item)} className="border-transparent" id="inc">+</button>
                                        </div>
                                        <input onChange={(event) => handleChange(event, item)} className="shopping-tovar-check" type="checkbox"   />
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                ): (
                    <h3 className="error-text">Hali hech narsa harid qilinmagan</h3>
                )}
                {items?.length  ? (
                    <div className="shopping-tovar-data">
                        <h3 style={{margin: 0, padding: 0}}>Sotib olingan tovarlar narxi = {tovarsPrice}</h3>
                    </div>
                ): (
                    null
                )}
            </div>
        </div>
    )
}