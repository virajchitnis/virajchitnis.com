import React from 'react';
import TrianglifyCanvas from '../TrianglifyCanvas/TrianglifyCanvas.jsx';
import './global.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TrianglifyCanvas />
        <h1>Viraj Chitnis</h1>
      </div>
    );
  }
};
