import React from "react";
import Nav from "../nav/Nav";
import Header from "../slideshow/Slideshow";
import Main_Content from "../Main_Content/Main_Content";

const Main = () => {
    return (
        <div>
            <Nav />
            <Header />
            <Main_Content />
        </div>
    );
}

export default Main;