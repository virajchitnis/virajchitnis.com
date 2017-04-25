import React from 'react';
import './MyInfo.scss';

export default class MyInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="my-info">
        <img />
        <h1>Viraj Chitnis</h1>
        <h2>web developer, ios developer, and hobbyist vintner</h2>
      </div>
    );
  }
}
