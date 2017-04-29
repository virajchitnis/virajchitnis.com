import React from 'react';
import MenuBar from './MenuBar/MenuBar.jsx';
import MainContents from './MainContents/MainContents.jsx';
import Footer from './Footer/Footer.jsx';

export default class ResumePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MenuBar />
        <MainContents />
        <Footer />
      </div>
    );
  }
}
