import React from 'react';
import './Footer.scss';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        Copyright © 2017 Viraj Chitnis
      </div>
    );
  }
}
