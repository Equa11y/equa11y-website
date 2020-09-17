import React from 'react';
import { hot } from 'react-hot-loader/root';
import NavBar from './NavBar';
import About from './About';
import Footer from './Footer';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <NavBar />
        <h1>Hello {name}</h1>
        <About />
        <Footer />
      </>
    );
  }
}

export default hot(App);
