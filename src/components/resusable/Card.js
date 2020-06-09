import React from "react";
import Button from "./Button";
import axios from "axios";
import "../../static/css/resusable/Card.css";

const styles = {
    Card: {
        height: '60vh',
        marginTop: "30px"
    },
    Image: {
        width: "100%",
        height: "80%",
    },
    priceArea: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textWeight: {
        textWeight: "700"
    },
    pTag: {
        fontSize: "35px"
    },
    addToCartButton: {
        outline: "none", 
        border: "3px solid black", 
        backgroundColor: "white", 
        color: "black", 
        fontWeight: "700"
    },
}



const Card = (props) => {


    let background = require("../../static/images/clothes/" + props.image);

    return(
            <div style={{...styles.Card, ...props.style}}>
                <div className="card_image_div" style={{ backgroundImage: `url(${background})`}} ></div>
                <div style={styles.priceArea} >
                    <div>
                         <p style={{...styles.textWeight, ...styles.pTag}} >{props.productName}</p> 
                        <p style={{fontWeight: "700"}}> Price: {"$"+props.price} </p>
                    </div>
                    <div>
                        <p> <Button onClick={props.onClick} style={{...styles.addToCartButton, ...props.buttonStyle}} > Add to cart </Button> </p>
                    </div>
                </div> 
            </div>
    )
}

export default Card;