import React from 'react';
import request from 'superagent';
import './DownloadsPage.scss';

export default class DownloadsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedVersion: []
    };

    this.setDefaultSelectedVersion = this.setDefaultSelectedVersion.bind(this);
  }

  componentDidMount() {
    const self = this;
    return request
    .get('/api/downloads')
    .end(function(err, res){
      if (res.statusCode == 200) {
        self.setState({
          data: res.body
        }, () => {
          self.setDefaultSelectedVersion();
        });
      }
    });
  }

  setDefaultSelectedVersion() {
    const data = this.state.data;
    const selectedVersion = data.map((downloadItem, downloadItemIndex) => {
      return 0;
    });
    this.setState({
      selectedVersion: selectedVersion
    });
  }

  changeDisplayedVersion(downloadItemIndex, releaseItemIndex, e) {
    const selectedVersion = this.state.selectedVersion;
    selectedVersion[downloadItemIndex] = releaseItemIndex;
    this.setState({
      selectedVersion: selectedVersion
    });
  }

  displayDownloads() {
    const data = this.state.data;
    const selectedVersion = this.state.selectedVersion;
    if (data.length > 0) {
      const downloadsHTML = data.map((downloadItem, downloadItemIndex) => {
        const releasesMenuHTML = downloadItem.releases.map((releaseItem, releaseItemIndex) => {
          if (releaseItemIndex == selectedVersion[downloadItemIndex]) {
            return (
              <p className="selected">{releaseItem.version}</p>
            );
          }
          return (
            <p onClick={(e) => this.changeDisplayedVersion(downloadItemIndex, releaseItemIndex, e)}>{releaseItem.version}</p>
          );
        });
        const appInfoHTML = downloadItem.releases.map((releaseItem, releaseItemIndex) => {
          const changelogHTML = releaseItem.changelog.map((changelogItem, changelogItemIndex) => {
            return (
              <li>{changelogItem}</li>
            );
          });
          const extraLinksHTML = releaseItem.extra_configuration_profile_links.map((linkItem, linkItemIndex) => {
            return (
              <div className="download-button">
                <a href={linkItem.link}>Install {linkItem.name}</a>
              </div>
            );
          });
          const appInfoHTMLRet = (
            <div className="app-info">
              <p className="release-date"><b>Build Date:</b> {releaseItem.date}</p>
              <p><b>What's new:</b></p>
              <p>
                <ul>
                  {changelogHTML}
                </ul>
              </p>
              {extraLinksHTML}
              <div className="download-button">
                <a href={releaseItem.installation_link}>Install App</a>
              </div>
            </div>
          );
          if (releaseItemIndex == selectedVersion[downloadItemIndex]) {
            return appInfoHTMLRet;
          }
          return null;
        });
        return (
          <div>
            <h2>{downloadItem.name}</h2>
            <div className="app-menu">
              {releasesMenuHTML}
            </div>
            {appInfoHTML}
          </div>
        );
      });
      return downloadsHTML;
    }
    return null;
  }

  render() {
    return (
      <div className="downloads-page">
        <h1>Pre-release Downloads</h1>
        <div className="notice">
          <p>This is pre-release software that can only be installed on <b>iOS</b> devices that have been authorized by <a href="/">me</a>. If you would like your device to be authorized, email me.</p>
          <p>Include your iOS device(s)'s <a href="http://whatsmyudid.com" target="_blank">UDID</a> number(s) in the email your request.</p>
          <br />
          <p><b>P.S.</b> There are websites out there that will ask you to install a configuration profile on your device in order to give you easy access to your device's UDID number. Please <b>do not</b> install those configuration profiles. By installing them, you will be granting that website a backdoor into your device, thereby compromising your security.</p>
        </div>
        {this.displayDownloads()}
        <div className="footer">
          <p>Copyright &copy; 2017 Viraj Chitnis</p>
        </div>
      </div>
    );
  }
}
