import "./modal.scss"
import { Button } from "../../Settings"
import { useDispatch } from "react-redux"
export const Modal = ({modal, children, setModal}) => {
   const dispatch = useDispatch()
    return(
        <div className="modal-overlay" style={{display: modal ? "flex": "none"}}>
            <div className="modal">
                <div className="modal-header">
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"} width={100} height={50} alt="Amazon Logo" />
                    <button onClick={() => dispatch(setModal(false)) } className="border-transparent">&times;</button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    )
}