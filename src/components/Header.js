import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

export const Header = () => {
    const [btnchange,setbtn] = useState('Login')
    return (
        <div className ="header">
            <div className = "logo-container">
                <img className ="image-logo" src={LOGO_URL}></img>
                <ul className="nav-item">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>cart</li>
                    <button className = 'login-button' onClick={() => { btnchange == 'Logout' ? setbtn('Login') : setbtn('Logout')}}>{btnchange}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;
