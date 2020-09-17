import React from 'react';
import { hot } from 'react-hot-loader/root';
import NavBar from './NavBar';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <NavBar />
        <h1>Hello {name}</h1>
      </>
    );
  }
}

export default hot(App);
