import React from "react";
import "../../../static/css/main_content/Nav.css";

const Nav = () => {
    return (
        <div className="display_navbar_container">           
            <ul className="display_ul">
                <li className="display_li">Shirts</li>
                <li className="display_li">Coats</li>
                <li className="display_li">Shoes</li>
                <li className="display_li"> Watches </li>
            </ul>
        </div>
    );
}

export default Nav;