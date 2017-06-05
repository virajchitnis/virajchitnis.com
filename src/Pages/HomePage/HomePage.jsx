import React from 'react';
import MyInfo from './MyInfo/MyInfo.jsx';
import TrianglifyCanvas from '../../Components/TrianglifyCanvas/TrianglifyCanvas.jsx';
import MenuBar from './MenuBar/MenuBar.jsx';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TrianglifyCanvas />
        <MyInfo />
        <MenuBar />
      </div>
    );
  }
}
