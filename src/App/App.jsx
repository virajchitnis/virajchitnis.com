import React from 'react';
import HomePage from '../HomePage/HomePage.jsx';
import ResumePage from '../ResumePage/ResumePage.jsx';
import AppsPage from '../AppsPage/AppsPage.jsx';
import WineryPage from '../WineryPage/WineryPage.jsx';
import CreditsPage from '../CreditsPage/CreditsPage.jsx';
import ErrorPage from '../ErrorPage/ErrorPage.jsx';
import KeyModal from '../common/components/KeyModal/KeyModal.jsx';
import './global.scss';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-49231243-1');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '',
      backButtonClicked: false
    };

    this.resumeClick = this.resumeClick.bind(this);
    this.appsClick = this.appsClick.bind(this);
    this.homeClick = this.homeClick.bind(this);
    this.wineryClick = this.wineryClick.bind(this);
    this.creditsClick = this.creditsClick.bind(this);
    this.handlePopState = this.handlePopState.bind(this);
  }

  componentDidMount() {
    document.addEventListener("resumeClick", this.resumeClick);
    document.addEventListener("appsClick", this.appsClick);
    document.addEventListener("homeClick", this.homeClick);
    document.addEventListener("wineryClick", this.wineryClick);
    document.addEventListener("creditsClick", this.creditsClick);
    window.addEventListener('popstate', this.handlePopState);
  }

  componentWillUnmount() {
    document.removeEventListener("resumeClick", this.resumeClick);
    document.removeEventListener("appsClick", this.appsClick);
    document.removeEventListener("homeClick", this.homeClick);
    document.removeEventListener("wineryClick", this.wineryClick);
    document.removeEventListener("creditsClick", this.creditsClick);
    window.removeEventListener('popstate', this.handlePopState);
  }

  handlePopState(e) {
    const pathname = window.location.pathname;
    if (pathname === '/') {
      this.setState({
        page: 'HomePage',
        backButtonClicked: true
      });
    }
    else if (pathname === '/resume') {
      this.setState({
        page: 'ResumePage',
        backButtonClicked: true
      });
    }
    else if (pathname === '/apps') {
      this.setState({
        page: 'AppsPage',
        backButtonClicked: true
      });
    }
    else if (pathname === '/winery') {
      this.setState({
        page: 'WineryPage',
        backButtonClicked: true
      });
    }
    else if (pathname === '/credits') {
      this.setState({
        page: 'CreditsPage',
        backButtonClicked: true
      });
    }
    else {
      this.setState({
        backButtonClicked: true
      });
    }
  }

  resetScrollPosition() {
    if (window.location.pathname === '/') {
      window.scrollTo(0,0);
    }
  }

  resumeClick() {
    this.resetScrollPosition();
    this.setState({
      page: 'ResumePage',
      backButtonClicked: false
    });
  }

  appsClick() {
    this.resetScrollPosition();
    this.setState({
      page: 'AppsPage',
      backButtonClicked: false
    });
  }

  homeClick() {
    this.resetScrollPosition();
    this.setState({
      page: 'HomePage',
      backButtonClicked: false
    });
  }

  wineryClick() {
    this.resetScrollPosition();
    this.setState({
      page: 'WineryPage',
      backButtonClicked: false
    });
  }

  creditsClick() {
    this.resetScrollPosition();
    this.setState({
      page: 'CreditsPage',
      backButtonClicked: false
    });
  }

  fireTracking() {
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    this.fireTracking();

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
      const backButtonClicked = this.state.backButtonClicked;
      if (page === 'HomePage') {
        if (!backButtonClicked) {
          window.history.pushState({}, "Viraj Chitnis", "/");
        }
        document.title = 'Viraj Chitnis';
        dom = (
          <HomePage />
        );
      }
      else if (page === 'ResumePage') {
        if (!backButtonClicked) {
          window.history.pushState({}, "Resumé - Viraj Chitnis", "/resume");
        }
        document.title = 'Resumé - Viraj Chitnis';
        dom = (
          <ResumePage />
        );
      }
      else if (page === 'AppsPage') {
        if (!backButtonClicked) {
          window.history.pushState({}, "Apps - Viraj Chitnis", "/apps");
        }
        document.title = 'Apps - Viraj Chitnis';
        dom = (
          <AppsPage />
        );
      }
      else if (page === 'WineryPage') {
        if (!backButtonClicked) {
          window.history.pushState({}, "Winery - Viraj Chitnis", "/winery");
        }
        document.title = 'Winery - Viraj Chitnis';
        dom = (
          <WineryPage />
        );
      }
      else if (page === 'CreditsPage') {
        if (!backButtonClicked) {
          window.history.pushState({}, "Credits - Viraj Chitnis", "/credits");
        }
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
