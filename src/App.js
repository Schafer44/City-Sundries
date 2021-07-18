import './App.css';
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {History} from "./Pages/History.jsx";
import Navbar from "./Pages/Navbar";
import {Home} from "./Pages/Home";
import {Menu} from "./Pages/Menu";

export default class App extends React.Component {


render(){
  return (
    <>
      <Router>
      <Navbar/>
        <Switch>
          
          <Route path="/history">
            <History />
          </Route>

          <Route path="/menu">
            <Menu />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </>
    );
}

}