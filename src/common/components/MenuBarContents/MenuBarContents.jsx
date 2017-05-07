import React from 'react';
import './MenuBarContents.scss';

export default class MenuBarContents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="nav-link">
            <a className="nav-standard" href='/resume'>resumé</a>
          </div>
          <div className="nav-link">
            <a className="nav-standard" href='/apps'>apps</a>
          </div>
          <div className="nav-link">
            <a className="nav-home" href='/'>VC</a>
          </div>
          <div className="nav-link">
            <a className="nav-standard" href='/winery'><strike>winery</strike></a>
          </div>
          <div className="nav-link">
            <a className="nav-standard" href='/credits'>credits</a>
          </div>
        </div>
        <div className="container-mobile">
          <div className="nav-link nav-link-top-home">
            <a className="nav-home" href='/'>VC</a>
          </div>
          <div className="nav-link">
            <a className="nav-standard" href='/resume'>resumé</a>
          </div>
          <div className="nav-link">
            <a className="nav-standard" href='/apps'>apps</a>
          </div>
          <div className="nav-link">
            <a className="nav-standard" href='/winery'><strike>winery</strike></a>
          </div>
          <div className="nav-link">
            <a className="nav-standard" href='/credits'>credits</a>
          </div>
          <div className="nav-link nav-link-bottom-home">
            <a className="nav-home" href='/'>VC</a>
          </div>
        </div>
      </div>
    );
  }
}
