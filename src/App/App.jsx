import React from 'react';
import MyInfo from '../MyInfo/MyInfo.jsx';
import TrianglifyCanvas from '../TrianglifyCanvas/TrianglifyCanvas.jsx';
import MenuBar from '../MenuBar/MenuBar.jsx';
import './global.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TrianglifyCanvas />
        <MyInfo />
        <MenuBar />
      </div>
    );
  }
};
