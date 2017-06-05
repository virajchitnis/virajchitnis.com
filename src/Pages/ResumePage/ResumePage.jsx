import React from 'react';
import request from 'superagent';
import {getCookie} from '../../Classes/Cookies.js';
import MenuBar from '../../Components/MenuBar/MenuBar.jsx';
import MainContents from '../../Components/MainContents/MainContents.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import BackToTopButton from '../../Components/BackToTopButton/BackToTopButton.jsx';
import './ResumePage.scss';

export default class ResumePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      experience: [],
      education: [],
      privateProfile: {},
      key: ''
    };

    this.getPrivateResumeData = this.getPrivateResumeData.bind(this);
  }

  componentDidMount() {
    document.addEventListener('api-key', this.getPrivateResumeData);
    this.getResumeData();
    this.getPrivateResumeData();
  }

  componentWillUnmount() {
    document.removeEventListener('api-key', this.getPrivateResumeData);
  }

  getPrivateResumeData() {
    const key = getCookie('key');
    this.setState({
      key: key
    });
    if (key != '') {
      const self = this;
      return request
      .get('/api/resume/private')
      .set('api-key', key)
      .end(function(err, res){
        if (res.statusCode == 200) {
          self.setState({
            privateProfile: res.body
          });
        }
        else {
          self.setState({
            privateProfile: {}
          });
        }
      });
    }
  }

  getResumeData() {
    const self = this;
    return request
    .get('/api/resume')
    .end(function(err, res){
      if (res.statusCode == 200) {
        self.setState({
          profile: res.body.profile,
          experience: res.body.experience,
          education: res.body.education
        });
      }
    });
  }

  displayHeader() {
    const profile = this.state.profile;
    const privateProfile = this.state.privateProfile;
    if (profile.address) {
      let addressHTML, phoneHTML;
      if (privateProfile.streetAddress) {
        addressHTML = (
          <p>{privateProfile.streetAddress}<br />{privateProfile.unitNo}<br />Wynnewood, PA 19096</p>
        );
        phoneHTML = (
          <p>M {privateProfile.phone}</p>
        );
      }
      else {
        addressHTML = (
          <p>{profile.address.streetAddress}<br />{profile.address.unitNo}<br />Wynnewood, PA 19096</p>
        );
        phoneHTML = (
          <p>M {profile.phone}</p>
        );
      }
      return (
        <div className="resume-header clearfix">
          <div className="name">
            <h1>{profile.name}</h1>
          </div>
          <div className="address">
            {addressHTML}
            {phoneHTML}
            <p>{profile.email}<br />{profile.website}<br />{profile.github}</p>
          </div>
        </div>
      );
    }
    else {
      return null;
    }
  }

  displayExperience() {
    const experience = this.state.experience;
    if (experience.length > 0) {
      const experienceHTML = experience.map((experienceItem, experienceIndex) => {
        const descriptions = experienceItem.description.map((para, descriptionIndex) => {
          return (
            <p key={descriptionIndex}>{para}</p>
          );
        });
        return (
          <div key={experienceIndex}>
            <h3>{experienceItem.position}, {experienceItem.company}; {experienceItem.location} - {experienceItem.date}</h3>
            {descriptions}
          </div>
        );
      });
      return experienceHTML;
    }
    else {
      return null;
    }
  }

  displayEducation() {
    const education = this.state.education;
    if (education.length > 0) {
      const educationHTML = education.map((educationItem, educationIndex) => {
        const descriptions = educationItem.description.map((para, descriptionIndex) => {
          return (
            <p key={descriptionIndex}>{para}</p>
          );
        });
        return (
          <div key={educationIndex}>
            <h3>{educationItem.school}; {educationItem.location} – {educationItem.degree}, {educationItem.year}</h3>
            <h4>{educationItem.extra}</h4>
            {descriptions}
          </div>
        );
      });
      return educationHTML;
    }
    else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <MenuBar />
        <MainContents>
          {this.displayHeader()}
          <div className="resume-contents clearfix">
            <div className="resume-contents-left">
              <h2>profile</h2>
            </div>
            <div className="resume-contents-right">
              <p>I am crazy about computers, gadgets, cars and any kind of technology. I love programming and building amazing things. I also love to travel and have visited several countries. I also enjoy making my own wines and liqueurs.</p>
            </div>
          </div>
          <div className="resume-contents clearfix">
            <div className="resume-contents-left">
              <h2>experience</h2>
            </div>
            <div className="resume-contents-right">
              {this.displayExperience()}
            </div>
          </div>
          <div className="resume-contents clearfix">
            <div className="resume-contents-left">
              <h2>education</h2>
            </div>
            <div className="resume-contents-right">
              {this.displayEducation()}
            </div>
          </div>
          <div className="resume-contents clearfix">
            <div className="resume-contents-left">
              <h2>skills</h2>
            </div>
            <div className="resume-contents-right">
              <table>
                <tbody>
                  <tr>
                    <td>HTML</td>
                    <td>CSS</td>
                    <td>SASS (SCSS)</td>
                  </tr>
                  <tr>
                    <td>JavaScript</td>
                    <td>jQuery</td>
                    <td>AngularJS</td>
                  </tr>
                  <tr>
                    <td>NodeJS</td>
                    <td>Bower</td>
                    <td>Gulp</td>
                  </tr>
                  <tr>
                    <td>ExpressJS</td>
                    <td>MongoDB</td>
                    <td>Linux</td>
                  </tr>
                  <tr>
                    <td>PHP</td>
                    <td>ASP.NET</td>
                    <td>C#</td>
                  </tr>
                  <tr>
                    <td>C</td>
                    <td>Objective-C</td>
                    <td>Swift</td>
                  </tr>
                  <tr>
                    <td>Java</td>
                    <td>SQL</td>
                    <td>JSON</td>
                  </tr>
                  <tr>
                    <td>XML</td>
                    <td>Git</td>
                    <td>Mercurial</td>
                  </tr>
                  <tr>
                    <td>MySQL</td>
                    <td>MSSQL</td>
                    <td>Spring MVC</td>
                  </tr>
                  <tr>
                    <td>Bootstrap</td>
                    <td>CoffeeScript</td>
                    <td>Selenium</td>
                  </tr>
                  <tr>
                    <td>Jenkins</td>
                    <td>GitHub</td>
                    <td>GitLab</td>
                  </tr>
                  <tr>
                    <td>Jira</td>
                    <td>VersionOne</td>
                    <td>Docker</td>
                  </tr>
                  <tr>
                    <td>nginx</td>
                    <td>Apache Web Server</td>
                    <td>DigitalOcean</td>
                  </tr>
                  <tr>
                    <td>VB.NET</td>
                    <td>Junit</td>
                    <td>Mockito</td>
                  </tr>
                  <tr>
                    <td>Yarn</td>
                    <td>BitBucket</td>
                    <td>ReactJS</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <p className="resume-this-website">This website is designed, built and hosted completely by me. It uses <a href="https://facebook.github.io/react/" target="_blank">ReactJS</a>, <a href="https://webpack.js.org" target="_blank">Webpack</a>, <a href="https://nodejs.org/en/" target="_blank">Node.js</a>, <a href="https://expressjs.com" target="_blank">ExpressJS</a>, <a href="http://sass-lang.com" target="_blank">SASS</a>, <a href="https://www.nginx.com" target="_blank">Nginx</a>, and <a href="https://www.docker.com" target="_blank">Docker</a></p>
              <p className="resume-my-website">My website is designed, built and hosted completely by me. It uses ReactJS, Webpack, Node.js, ExpressJS, SASS, Nginx, and Docker</p>
              <br />
              <p>Expert at Git, I help my colleagues at CapitalOne with Git setup and roadblocks. I also continue tutoring students at Temple University on how to use Git and GitHub.</p>
              <br />
              <p>Expert at programming, worked on many different projects for school and in my free time. Run multiple Linux servers at home which host web, database, mail, DHCP, DNS, web proxy and data storage services.</p>
              <br />
              <p>Experience with Debian, Arch, Gentoo, Fedora and CentOS.</p>
              <br />
              <p>Troubleshoot and provide support to my family and friends for Mac OS X, Windows, Linux, iOS, Android and Windows Phone.</p>
            </div>
          </div>
          <div className="resume-contents clearfix">
            <div className="resume-contents-left">
              <h2>spoken languages</h2>
            </div>
            <div className="resume-contents-right">
              <p>English (primary), Marathi and Hindi</p>
            </div>
          </div>
          <BackToTopButton type="back-to-top-button-inpage" />
        </MainContents>
        <Footer />
      </div>
    );
  }
}
