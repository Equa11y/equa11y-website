/* eslint-disable prettier/prettier */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.scss';

const mountNode = document.getElementById('app');
ReactDOM.render(<App name="Friend" />, mountNode);
