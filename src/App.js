import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {History} from "./Pages/History.jsx";
import Navbar from "./Pages/Navbar";
import {Home} from "./Pages/Home";
import {Menu} from "./Pages/Menu";
import PrivacyPage from "./Pages/PrivacyPage"
import {SplashScreen} from "./Pages/SplashScreen";

export default class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          timePassed: false,
      };
  }
  
  componentDidMount() {
      setTimeout( () => {
          this.setTimePassed();
      },4000);
  }
  
  setTimePassed() {
      this.setState({timePassed: true});
  }

render(){
  if (!this.state.timePassed) {
    return (<SplashScreen/>);
  }
  else {
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

            <Route path="/PrivacyPage">
              <PrivacyPage />
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
}