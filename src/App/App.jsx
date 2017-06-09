import React from 'react';
import HomePage from '../Pages/HomePage/HomePage.jsx';
import ResumePage from '../Pages/ResumePage/ResumePage.jsx';
import AppsPage from '../Pages/AppsPage/AppsPage.jsx';
import WineryPage from '../Pages/WineryPage/WineryPage.jsx';
import CreditsPage from '../Pages/CreditsPage/CreditsPage.jsx';
import ErrorPage from '../Pages/ErrorPage/ErrorPage.jsx';
import KeyModal from '../Components/KeyModal/KeyModal.jsx';
import {RouterRoute} from '../Classes/Router.jsx';
import './scss/global.scss';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-49231243-1');

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  fireTracking() {
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    this.fireTracking();

    return (
      <div>
        <KeyModal />
        <RouterRoute url="/" title="Viraj Chitnis">
          <HomePage />
        </RouterRoute>
        <RouterRoute url="/resume" title="Resumé - Viraj Chitnis">
          <ResumePage />
        </RouterRoute>
        <RouterRoute url="/apps" title="Apps - Viraj Chitnis">
          <AppsPage />
        </RouterRoute>
        <RouterRoute url="/winery" title="Winery - Viraj Chitnis">
          <WineryPage />
        </RouterRoute>
        <RouterRoute url="/credits"title="Credits - Viraj Chitnis">
          <CreditsPage />
        </RouterRoute>
      </div>
    );
  }
};
