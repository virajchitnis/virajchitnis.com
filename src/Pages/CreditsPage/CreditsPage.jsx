import React from 'react';
import MenuBar from '../../Components/MenuBar/MenuBar.jsx';
import MainContents from '../../Components/MainContents/MainContents.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

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
          <p>The rest of the website is designed, built and hosted completely by me. It uses <a href="https://facebook.github.io/react/" target="_blank">ReactJS</a>, <a href="https://webpack.js.org" target="_blank">Webpack</a>, <a href="https://nodejs.org/en/" target="_blank">Node.js</a>, <a href="https://expressjs.com" target="_blank">ExpressJS</a>, <a href="http://sass-lang.com" target="_blank">SASS</a>, <a href="https://www.nginx.com" target="_blank">Nginx</a>, and <a href="https://www.docker.com" target="_blank">Docker</a></p>
        </MainContents>
        <Footer />
      </div>
    );
  }
}
