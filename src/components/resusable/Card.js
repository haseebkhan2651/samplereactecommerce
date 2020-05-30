import React from "react";


const styles = {
    Card: {
        height: '40vh'
    },
    Image: {
        width: "100%",
        height: "80%",
    },
    priceArea: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}


const Card = (props) => {
    return(
            <div style={{...styles.Card, ...props.style}}>
                <img width="100%" height="300px" src={require("../../static/images/clothes/"+props.image)} />
                <div style={styles.priceArea} >
                    <p>Hello my name is Haseeb</p>
                </div> 
            </div>
    )
}

export default Card;