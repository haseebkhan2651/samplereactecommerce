import React, {Fragment} from "react";
import "../../../static/css/main_content/Display.css";
import Card from "../../resusable/Card";

const Display = (props) => {
    return (
        <Fragment>
            
        <div className="display_container">
    
            <Card image="shirt1.jpg" />
            <Card image="shoe1.jpg" />
            <Card image="shirt1.jpg" />
            <Card image="shoe1.jpg" />
            <Card image="shirt1.jpg" />
            <Card image="shoe1.jpg" />
            <Card image="shirt1.jpg" />
            <Card image="shoe1.jpg" />
        </div>
        </Fragment>
    );
}


export default Display;