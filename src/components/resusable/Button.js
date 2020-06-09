import React from "react";


const Button = (props) => {

    const styles = {
        button: {
            border: "none",
            outline: "none",
            padding: '15px',
            borderRadius: '10px',
            backgroundColor: "#503047",
            color: "white"
        }
    }

    return (
        <button onClick={props.onClick} style={{ ...styles.button, ...props.style }} > {props.children} </button>
    );
}


export default Button;