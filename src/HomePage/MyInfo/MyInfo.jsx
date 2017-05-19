import React from 'react';
import './MyInfo.scss';

export default class MyInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="my-info">
        <img className="profile" />
        <h1>Viraj Chitnis</h1>
        <h2>web developer, ios developer, and hobbyist vintner</h2>
        <div>
          <a href="https://github.com/virajchitnis" target="_blank" title="GitHub"><img className="github" /></a>
        </div>
        <div>
          <a href="https://twitter.com/chitnisviraj" target="_blank"><img className="twitter" /></a>
        </div>
        <div>
          <a href="https://www.instagram.com/virajchitnis/" target="_blank" title="Instagram"><img className="instagram" /></a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/viraj-chitnis-ba605894/" target="_blank"><img className="linkedin" /></a>
        </div>
        <div>
          <a href="https://pgp.mit.edu/pks/lookup?op=get&search=0xBF5C94BA44F790E2" target="_blank" title="PGP/GPG Public Key"><img className="gpg" /></a>
        </div>
        <div>
          <a href="mailto:vc@virajchitnis.com" target="_blank" title="Email"><img className="mail" /></a>
        </div>
      </div>
    );
  }
}
