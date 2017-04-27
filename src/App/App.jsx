import React from 'react';
import HomePage from '../HomePage/HomePage.jsx';
import './global.scss';

export default class App extends React.Component {
  render() {
    var dom;
    if (window.location.pathname == '/') {
      dom = (
        <HomePage />
      );
    }
    else {
      window.location.pathname = '/';
      dom = (
        <HomePage />
      );
    }

    return dom;
  }
};
