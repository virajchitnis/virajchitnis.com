import React from 'react';
import MenuBar from '../../Components/MenuBar/MenuBar.jsx';
import MainContents from '../../Components/MainContents/MainContents.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

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
