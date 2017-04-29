import React from 'react';
import MenuBarContents from '../../common/components/MenuBarContents/MenuBarContents.jsx';
import './MenuBar.scss';

export default class MenuBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="menu-bar-top">
        <MenuBarContents />
      </div>
    );
  }
}
