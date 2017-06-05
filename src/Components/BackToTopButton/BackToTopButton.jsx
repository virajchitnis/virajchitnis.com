import React from 'react';
import zenscroll from 'zenscroll';
import './BackToTopButton.scss';

export default class BackToTopButton extends React.Component {
  constructor(props) {
    super(props);
  }

  scrollToTop() {
    zenscroll.toY(0);
  }

  render() {
    return (
      <div className={this.props.type}>
        <img onClick={this.scrollToTop} />
        <div onClick={this.scrollToTop}>&uarr; back to top &uarr;</div>
      </div>
    );
  }
}
