import React from 'react';
import HomePage from '../HomePage/HomePage.jsx';
import ResumePage from '../ResumePage/ResumePage.jsx';
import AppsPage from '../AppsPage/AppsPage.jsx';
import CreditsPage from '../CreditsPage/CreditsPage.jsx';
import './global.scss';

export default class App extends React.Component {
  render() {
    var dom;
    if (window.location.pathname == '/') {
      dom = (
        <HomePage />
      );
    }
    else if (window.location.pathname == '/resume') {
      dom = (
        <ResumePage />
      );
    }
    else if (window.location.pathname == '/apps') {
      dom = (
        <AppsPage />
      );
    }
    else if (window.location.pathname == '/winery') {
      window.location.pathname = '/';
      dom = (
        <HomePage />
      );
    }
    else if (window.location.pathname == '/credits') {
      dom = (
        <CreditsPage />
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
