import { useSelector } from "react-redux"

export const Sidebar = () => {
    const {sidebar} = useSelector(({Reducer}) => Reducer)
    return (
        <div className="sidebar" style={{transform: !sidebar ? "translateX(-100%)" : "translateX(0%)" }}>
            <div className="sidebar-inner">
                <h1>Hello world</h1>
            </div>
        </div>
    )
}