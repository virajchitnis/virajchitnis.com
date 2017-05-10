import React from 'react';
import './MyInfo.scss';

export default class MyInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="my-info">
        <img className="profile" />
        <h1>Viraj Chitnis</h1>
        <h2>web developer, ios developer, and hobbyist vintner</h2>
        <div>
          <a href="https://github.com/virajchitnis" target="_blank"><img className="github" /></a>
        </div>
        <div>
          <a href="https://twitter.com/chitnisviraj" target="_blank"><img className="twitter" /></a>
        </div>
        <div>
          <a href="https://www.instagram.com/virajchitnis/" target="_blank"><img className="instagram" /></a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/viraj-chitnis-ba605894/" target="_blank"><img className="linkedin" /></a>
        </div>
      </div>
    );
  }
}
