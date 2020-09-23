/* eslint-disable prettier/prettier */
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, Switch } from 'react-router-dom';
import ExamplePage from './ExamplePage';
import NavBar from './NavBar';
import About from './About';
import Footer from './Footer';
import Main from './Main';
import Equa11yCLI from './Equa11yCLI';
import Links from './Links';

class App extends React.Component {
  render() {
    return (
      <div>
        <div role="navigation">
          <NavBar />
        </div>
        <main>
          <Switch>
            <Route path="/equa11ycli">
              <Equa11yCLI />
            </Route>
            <Route path="/example">
              <ExamplePage />
            </Route>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/links">
              <Links />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default hot(App);
