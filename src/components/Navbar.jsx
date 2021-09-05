import { useDispatch } from "react-redux";
import { logout } from "../actions/auth";
import { limpiar } from "../actions/nomina";

import "../css/Navbar.css";
import "../css/Buttons.css"

const Navbar = () => {

    const dispatch = useDispatch()
    
    const handleLogout = () => {
        dispatch(limpiar());
        dispatch(logout());
    }

    return (
        <nav>
            <div className="nav-wrapper">
            <span className="brand-logo">Nominal Calculator</span>
            <ul className="right">
                <li>
                    <button onClick={handleLogout}  className="btn waves-effect waves-light buttons" >Logout</button>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
