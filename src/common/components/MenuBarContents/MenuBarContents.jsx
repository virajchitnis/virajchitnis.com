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
            <div className="nav-standard">resumé</div>
          </div>
          <div className="nav-link">
            <div className="nav-standard">blog</div>
          </div>
          <div className="nav-link">
            <div className="nav-home">VC</div>
          </div>
          <div className="nav-link">
            <div className="nav-standard">winery</div>
          </div>
          <div className="nav-link">
            <div className="nav-standard">credits</div>
          </div>
        </div>
        <div className="container-mobile">
          <div className="nav-link">
            <div className="nav-standard">resumé</div>
          </div>
          <div className="nav-link">
            <div className="nav-standard">blog</div>
          </div>
          <div className="nav-link">
            <div className="nav-standard">winery</div>
          </div>
          <div className="nav-link">
            <div className="nav-standard">credits</div>
          </div>
          <div className="nav-link">
            <div className="nav-home">VC</div>
          </div>
        </div>
      </div>
    );
  }
}
