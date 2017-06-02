import React from 'react';
import './MenuBarContents.scss';

export default class MenuBarContents extends React.Component {
  constructor(props) {
    super(props);
  }

  resumeClick(e) {
    e.preventDefault();
    var resumeClickEvent = new Event('resumeClick');
    document.dispatchEvent(resumeClickEvent);
  }

  appsClick(e) {
    e.preventDefault();
    var appsClickEvent = new Event('appsClick');
    document.dispatchEvent(appsClickEvent);
  }

  homeClick(e) {
    e.preventDefault();
    var homeClickEvent = new Event('homeClick');
    document.dispatchEvent(homeClickEvent);
  }

  wineryClick(e) {
    e.preventDefault();
    var wineryClickEvent = new Event('wineryClick');
    document.dispatchEvent(wineryClickEvent);
  }

  creditsClick(e) {
    e.preventDefault();
    var creditsClickEvent = new Event('creditsClick');
    document.dispatchEvent(creditsClickEvent);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="nav-link">
            <a className="nav-standard" href="/resume" onClick={this.resumeClick}>resumé</a>
          </div>
          <div className="nav-link">
            <a className="nav-standard" href="/apps" onClick={this.appsClick}>apps</a>
          </div>
          <div className="nav-link">
            <a className="nav-home" href="/" onClick={this.homeClick}>VC</a>
          </div>
          <div className="nav-link">
            <a className="nav-standard" href="/winery" onClick={this.wineryClick}>winery</a>
          </div>
          <div className="nav-link">
            <a className="nav-standard" href="/credits" onClick={this.creditsClick}>credits</a>
          </div>
        </div>
        <div className="container-mobile">
          <div className="nav-link nav-link-top-home">
            <a className="nav-home" href="/" onClick={this.homeClick}>VC</a>
          </div>
          <div className="nav-link">
            <a className="nav-standard" href="/resume" onClick={this.resumeClick}>resumé</a>
          </div>
          <div className="nav-link">
            <a className="nav-standard" href="/apps" onClick={this.appsClick}>apps</a>
          </div>
          <div className="nav-link">
            <a className="nav-standard" href="/winery" onClick={this.wineryClick}>winery</a>
          </div>
          <div className="nav-link">
            <a className="nav-standard" href="/credits" onClick={this.creditsClick}>credits</a>
          </div>
          <div className="nav-link nav-link-bottom-home">
            <a className="nav-home" href="/" onClick={this.homeClick}>VC</a>
          </div>
        </div>
      </div>
    );
  }
}
