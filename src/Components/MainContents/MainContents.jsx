import React from 'react';
import './MainContents.scss';

export default class MainContents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-contents">
        {this.props.children}
      </div>
    );
  }
}
