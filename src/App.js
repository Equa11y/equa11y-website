/* eslint-disable prettier/prettier */
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, Switch } from 'react-router-dom';
import ExamplePage from './ExamplePage';
import NavBar from './NavBar';
import Main from './Main';
import About from './About';
import Docs from './Docs';
import Links from './Links';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <Switch>
            <Route path="/example">
              <ExamplePage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/docs">
              <Docs />
            </Route>
            <Route path="/links">
              <Links />
            </Route>

            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default hot(App);
