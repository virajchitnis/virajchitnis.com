import React from 'react';
import MenuBar from '../common/components/MenuBar/MenuBar.jsx';
import MainContents from '../common/components/MainContents/MainContents.jsx';
import Footer from '../common/components/Footer/Footer.jsx';

export default class ErrorPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MenuBar />
        <MainContents>
          <h3>Something seems wrong, either the page you requested does not exist, or something broke on our side, please try again later or try double checking your request.</h3>
          <p>If you believe something is wrong with the website, please email me at <a href="mailto:viraj@virajchitnis.com">viraj@virajchitnis.com</a></p>
        </MainContents>
        <Footer />
      </div>
    );
  }
}
