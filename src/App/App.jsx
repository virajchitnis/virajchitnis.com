import React from 'react';
import HomePage from '../HomePage/HomePage.jsx';
import ResumePage from '../ResumePage/ResumePage.jsx';
import AppsPage from '../AppsPage/AppsPage.jsx';
import WineryPage from '../WineryPage/WineryPage.jsx';
import CreditsPage from '../CreditsPage/CreditsPage.jsx';
import ErrorPage from '../ErrorPage/ErrorPage.jsx';
import KeyModal from '../common/components/KeyModal/KeyModal.jsx';
import './global.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: ''
    };

    this.resumeClick = this.resumeClick.bind(this);
    this.appsClick = this.appsClick.bind(this);
    this.homeClick = this.homeClick.bind(this);
    this.wineryClick = this.wineryClick.bind(this);
    this.creditsClick = this.creditsClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("resumeClick", this.resumeClick);
    document.addEventListener("appsClick", this.appsClick);
    document.addEventListener("homeClick", this.homeClick);
    document.addEventListener("wineryClick", this.wineryClick);
    document.addEventListener("creditsClick", this.creditsClick);
  }

  componentWillUnmount() {
    document.removeEventListener("resumeClick", this.resumeClick);
    document.removeEventListener("appsClick", this.appsClick);
    document.removeEventListener("homeClick", this.homeClick);
    document.removeEventListener("wineryClick", this.wineryClick);
    document.removeEventListener("creditsClick", this.creditsClick);
  }

  resumeClick() {
    this.setState({
      page: 'ResumePage'
    });
  }

  appsClick() {
    this.setState({
      page: 'AppsPage'
    });
  }

  homeClick() {
    this.setState({
      page: 'HomePage'
    });
  }

  wineryClick() {
    this.setState({
      page: 'WineryPage'
    });
  }

  creditsClick() {
    this.setState({
      page: 'CreditsPage'
    });
  }

  render() {
    var dom;
    if (this.state.page === '') {
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
        dom = (
          <WineryPage />
        );
      }
      else if (window.location.pathname == '/credits') {
        dom = (
          <CreditsPage />
        );
      }
      else {
        dom = (
          <ErrorPage />
        );
      }
    }
    else {
      const page = this.state.page;
      if (page === 'HomePage') {
        window.history.pushState({}, "Viraj Chitnis", "/");
        document.title = 'Viraj Chitnis';
        dom = (
          <HomePage />
        );
      }
      else if (page === 'ResumePage') {
        window.history.pushState({}, "Resumé - Viraj Chitnis", "/resume");
        document.title = 'Resumé - Viraj Chitnis';
        dom = (
          <ResumePage />
        );
      }
      else if (page === 'AppsPage') {
        window.history.pushState({}, "Apps - Viraj Chitnis", "/apps");
        document.title = 'Apps - Viraj Chitnis';
        dom = (
          <AppsPage />
        );
      }
      else if (page === 'WineryPage') {
        window.history.pushState({}, "Winery - Viraj Chitnis", "/winery");
        document.title = 'Winery - Viraj Chitnis';
        dom = (
          <WineryPage />
        );
      }
      else if (page === 'CreditsPage') {
        window.history.pushState({}, "Credits - Viraj Chitnis", "/credits");
        document.title = 'Credits - Viraj Chitnis';
        dom = (
          <CreditsPage />
        );
      }
      else {
        window.history.pushState({}, "Error - Viraj Chitnis", window.location.pathname);
        document.title = 'Error - Viraj Chitnis';
        dom = (
          <ErrorPage />
        );
      }
    }

    return (
      <div>
        <KeyModal />
        {dom}
      </div>
    );
  }
};
