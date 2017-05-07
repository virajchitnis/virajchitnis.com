import React from 'react';
import MenuBar from '../common/components/MenuBar/MenuBar.jsx';
import MainContents from '../common/components/MainContents/MainContents.jsx';
import Footer from '../common/components/Footer/Footer.jsx';

export default class CreditsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MenuBar />
        <MainContents>
          <h3>font</h3>
          <p>The fonts used are <a href="https://fonts.google.com/specimen/Rationale" target="_blank">Rationale</a>, <a href="https://fonts.google.com/specimen/Dosis" target="_blank">Dosis</a> and <a href="https://fonts.google.com/specimen/Dancing+Script" target="_blank">Dancing Script</a> from Google Fonts.</p>
          <h3>homepage background</h3>
          <p>The homepage background is generated using the <a href="https://qrohlf.com/trianglify/" target="_blank">Trianglify</a> JavaScript library.</p>
          <h3>website</h3>
          <p>The rest of the website is designed and built by me.</p>
        </MainContents>
        <Footer />
      </div>
    );
  }
}
