import React, { Fragment } from "react";
//Components Import Start
import Display from "./display/Display";
import Sidebar from "./sidebar/Sidebar";
import Nav from "./navbar/Nav";
import Main_Nav from "../nav/Nav";
import Header from "../slideshow/Slideshow";

//Components Import End
import "../../static/css/main_content/Main_Content.css";
//THIS COMPONENT WILL DISPLAY THE ITEMS THAT ARE BEING SOLD BY
//THE ECOMMERCE STORE AND WILL DISPLAY THEM
//Inside put in a card system and much more

 // THE MAIN DIV WILL BE A FLEX THAT WILL DIVIDE BOTH OF THE SECTIONS EVENLY

const Products = () => {
    return (
       <Fragment>
           <Main_Nav />
           <Header />
           <Nav />
            <div className="main_content_container"> 
                <Sidebar />
                <Display />
            </div>
        </Fragment>
    )
}

export default Products;