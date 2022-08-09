import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { History } from "./Pages/History.jsx";
import Navbar from "./Pages/Navbar";
import { Home } from "./Pages/Home";
import { Menu } from "./Pages/Menu";
import PrivacyPage from "./Pages/PrivacyPage";
import { SplashScreen } from "./Pages/SplashScreen";

export default class App extends React.Component {
  /**
   * Constructor for App
   * @param {object} props Component props
   * @param {width} this.state.timePassed Used for SplashScreen
   */
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false,
    };
  }
  /**
   * @param {setTimePassed} this.setTimePassed Runs timePassed after 4 seconds on Mount
   */
  componentDidMount() {
    setTimeout(() => {
      this.setTimePassed();
    }, 4000);
  }

  /**
   * @param {setTimePassed} timePassed Sets timePassed after componentDidMount is run
   */
  setTimePassed() {
    this.setState({ timePassed: true });
  }

  render() {
    if (!this.state.timePassed) {
      return <SplashScreen />;
    } else {
      return (
        <>
          <Router>
            <Navbar />
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
