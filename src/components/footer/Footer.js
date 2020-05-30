import React from "react";
import "../../static/css/Footer.css";



const Footer = () => {
    return (
        <div className="footer_container">
            <div className="footer_div1">
                <div className="both_divs">
                    <ul className="first_footer_list">
                        <a href="#"> <li> Home </li> </a>
                        <a href="#"> <li> About </li>  </a>
                        <a href="#"> <li> Products </li>  </a>
                        <a href="#"> <li> Contact Us </li>  </a>
                    </ul>
                </div>
            </div>

            <div className="footer_div2">
                <div className="both_divs">
                        <ul className="second_footer_list">
                          <a href="#"> <li> Coats </li> </a>
                          <a href="#"> <li> Shirts </li> </a>
                          <a href="#"> <li> Shoes </li> </a>
                          <a href="#"> <li> Watches </li> </a>
                        </ul>
                </div>
            </div>
       
       </div>

    );
}


export default Footer;
