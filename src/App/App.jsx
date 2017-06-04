import React from 'react';
import HomePage from '../HomePage/HomePage.jsx';
import ResumePage from '../ResumePage/ResumePage.jsx';
import AppsPage from '../AppsPage/AppsPage.jsx';
import WineryPage from '../WineryPage/WineryPage.jsx';
import CreditsPage from '../CreditsPage/CreditsPage.jsx';
import ErrorPage from '../ErrorPage/ErrorPage.jsx';
import KeyModal from '../common/components/KeyModal/KeyModal.jsx';
import {RouterRoute} from 'reactjs-router';
import './global.scss';
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
