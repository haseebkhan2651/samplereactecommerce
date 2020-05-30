import React from "react";
import "../../static/css/main_content/Newsletter.css";
import Button from "../resusable/Button";

const Newsletter = () => {
    return (
        <div className="newsletter_section_container">
            <div className="newsletter_container">
                 <h4>Sign up for our newsletter to receive special offers, new products and more!</h4>
                 <input type="text" placeholder="Enter you email address" />
                <Button style={{width: '25%', backgroundColor: "white", color: "black", outline: "none"}}>Sign Up</Button>
            </div>
        </div>
    );
}



export default Newsletter;