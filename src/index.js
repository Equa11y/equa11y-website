/* eslint-disable prettier/prettier */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles.scss';

const mountNode = document.getElementById('app');
ReactDOM.render(
  <Router>
    <App name="Friend" />
  </Router>,
  mountNode,
);
