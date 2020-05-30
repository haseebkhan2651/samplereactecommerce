//Structure of ECommerce 
//First Thing Displayed is Sign In Page




import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
/*COMPONENT IMPORT START*/ 
import Create from "./components/login_page/create-an-account/Create";
import Main from "./components/main/Main";
import Product from "./components/products/Products";
/*COMPONENT IMPORT END */
//React Components Start

import Login_Page from "./components/login_page/Login";

//React Components End


function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/products">
            <Product />
          </Route>
          <Route path="/login">  <Login_Page /> </Route>
          <Route path="/create-an-account"> <Create /> </Route>
          <Route path="/">
            <Main />
          </Route>


        </Switch>

        
      </div>
    </Router>
  );
}

export default App;

