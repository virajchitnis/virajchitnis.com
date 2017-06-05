import React from 'react';
import Trianglify from 'trianglify';
import './TrianglifyCanvas.scss';

export default class TrianglifyCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pattern: null
    };
  }

  componentDidMount() {
    this.setState({
      pattern: Trianglify({
        width: window.innerWidth,
        height: window.innerHeight,
        cell_size: 40,
        seed: 'Viraj Chitnis',
        x_colors: 'YlGnBu',
        y_colors: 'PuOr'
      })
    }, () => {
      this.drawCanvas();
    });
  }

  drawCanvas() {
    this.state.pattern.canvas(this.trianglifyCanvas);
  }

  render() {
    return (
      <canvas ref={(canvas) => { this.trianglifyCanvas = canvas; }} className="trianglify-canvas"></canvas>
    );
  }
};
