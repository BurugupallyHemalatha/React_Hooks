import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import ErrorPage from './ErrorPage';
import ListView from './ListView/ListView';
import ListDetail from './ListView/ListDetail'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="wrapper">
            <Switch>
              <Route path={"/"} exact component={Home} />
              <Route path={"/about"} component={About} />
              <Route path={"/contact"} component={Contact} />
              <Route path={"/listview"} component={ListView} />
              <Route path={"/listdetail/:id"} component={ListDetail} />
              <Route component={ErrorPage} />
            </Switch>
          </div>
          
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));

