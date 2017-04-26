import React from 'react';
import './MenuBar.scss';

export default class MenuBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="menu-bar">
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
      </div>
    );
  }
}
