import React from 'react';
import MenuBar from '../common/components/MenuBar/MenuBar.jsx';
import MainContents from '../common/components/MainContents/MainContents.jsx';
import Footer from '../common/components/Footer/Footer.jsx';

export default class WineryPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MenuBar />
        <MainContents>
          <h3>This page is under construction, please come back soon.</h3>
        </MainContents>
        <Footer />
      </div>
    );
  }
}
