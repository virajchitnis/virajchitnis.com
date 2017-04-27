import React from 'react';
import MyInfo from '../MyInfo/MyInfo.jsx';
import TrianglifyCanvas from '../TrianglifyCanvas/TrianglifyCanvas.jsx';
import MenuBar from '../MenuBar/MenuBar.jsx';
import './global.scss';

export default class App extends React.Component {
  render() {
    var dom;
    if (window.location.pathname == '/') {
      dom = (
        <div>
          <TrianglifyCanvas />
          <MyInfo />
          <MenuBar />
        </div>
      );
    }
    else {
      window.location.pathname = '/';
      dom = (
        <div>
          <TrianglifyCanvas />
          <MyInfo />
          <MenuBar />
        </div>
      );
    }

    return dom;
  }
};
