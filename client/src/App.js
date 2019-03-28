import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import "../node_modules/bloomer/";
import Home from "./components/pages/Home";
import noMatch from "./components/pages/404page/noMatch";
import Discover from "./components/pages/Discover";
import Navbar from "./components/pages/NavBar";
import Charity from "./components/pages/Charity";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./state";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <div>
              {/* <Nav>
              <NavLeft>
                <NavItem href="/" isBrand>HOME </NavItem>

                <NavItem href="/discover" isBrand>DISCOVER</NavItem>
              </NavLeft>
              <NavCenter>
                <NavItem href="/" isBrand>HOME </NavItem>

                <NavItem href="/discover" isBrand>DISCOVER</NavItem>
              </NavCenter>
              <NavRight>
                <NavItem href="/" isBrand>HOME </NavItem>

                <NavItem href="/discover" isBrand>DISCOVER</NavItem>
              </NavRight>
            </Nav> */}

              <Navbar />

              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/discover" component={Discover} />
                <Route exact path="/discover/charity" component={Charity} />
                <Route component={noMatch} />
                {/* <Route path="/react-examples" component={ReactExamples} /> */}
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
