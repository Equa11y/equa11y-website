/* eslint-disable prettier/prettier */
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, Switch } from 'react-router-dom';
import ExamplePage from './ExamplePage';
import NavBar from './NavBar';
<<<<<<< HEAD
import About from './About';
import Footer from './Footer';
=======
import Main from './Main';
import About from './About';
import Docs from './Docs';
import Links from './Links';
>>>>>>> 1f3c782393062f3b253f5c676868c459d9e4f2ad

class App extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <>
        <NavBar />
        <h1>Hello {name}</h1>
        <About />
        <Footer />
      </>
=======
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
>>>>>>> 1f3c782393062f3b253f5c676868c459d9e4f2ad
    );
  }
}

export default hot(App);
