import React from 'react';
import MenuBar from '../common/components/MenuBar/MenuBar.jsx';
import MainContents from '../common/components/MainContents/MainContents.jsx';
import Footer from '../common/components/Footer/Footer.jsx';
import './ResumePage.scss';

export default class ResumePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MenuBar />
        <MainContents>
          <div className="resume-header clearfix">
            <div className="name">
              <h1>Viraj Chitnis</h1>
            </div>
            <div className="address">
              <p>••••••••••••••••<br />••••••••••<br />Wynnewood, PA 19096</p>
              <p>M 215.•••.••••</p>
              <p>vc@virajchitnis.com<br />www.virajchitnis.com<br />github.com/virajchitnis</p>
            </div>
          </div>
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
              <h3>Associate Software Developer, CapitalOne Financial; Wilmington, DE - June 2015-Present</h3>
              <p>Currently working to help redesign the CapitalOne customer facing website which is being rebuilt using the latest technologies and design standards such as AngularJS, Node.js, ExpressJS, etc. To achieve this I will be using many other new tools and technologies such as Git, Jira, Jasmine, Karma, etc.</p>
              <p>Previously worked on internal software used by the sales representatives of CapitalOne to assist customers on the phone or at CapitalOne branches. The technologies used to achieve this were Git, AngularJS, Spring MVC, Java, Node.js, Jira, etc.</p>
              <h3>Team Leader, Temple University Faculty Affairs; Philadelphia, PA – Aug 2014-May 2015</h3>
              <p>Lead a team of 4 people while developing a system that allowed Temple University’s Faculty Affairs staff to keep track of applications for faculty research awards. Used ASP.NET, Git, GitHub and Agile.</p>
              <h3>Technology Officer/Webmaster, TU-ACM; Philadelphia, PA – Aug 2014-Dec 2015</h3>
              <p>Responsible for the official website of the Temple University Chapter of ACM (Association for Computing Machinery) and all other administrative tasks involving the use of technology.</p>
              <h3>Intern, Larsen & Toubro Infotech; Edison, NJ – Summer 2014</h3>
              <p>Worked on an iOS application for a client of Larsen & Toubro Infotech.</p>
              <h3>Intern, Bisil; Bala Cynwyd, PA – Summer 2013</h3>
              <p>Created a web application that allowed the user to create workflow diagrams. All its data was stored in a database. This was written in JavaScript, CSS and HTML.</p>
              <h3>iOS Developer, TravelCountant; Wynnewood, PA – June 2014-December 2014</h3>
              <p>Built an iOS app that can be used to log expenses and generate expense reports. This app is especially useful for travelers and/or executives who are on the move. This app is available on the Apple App Store.</p>
              <h3>iOS Developer, Weight & BMI Tracker; Wynnewood, PA – June 2014-December 2015</h3>
              <p>Built an iOS app to keep track of weight and BMI. The stored data can then be used to generate a graph of how much weight a person has lost or gained in the amount of time that they have been using the app. The app also reminds users to weigh themselves at a set time everyday. This app is available on the Apple App Store.</p>
              <h3>Web/iOS Developer, MovieDB; Wynnewood, PA – 2012-2013</h3>
              <p>Built and maintained my own private movie streaming service that was used by my family. This service had a web interface and an iOS app. The web interface could be used to view information about movies, convert them to lower qualities and stream them. The iOS app could be used to view info a about movies and download or stream them.</p>
            </div>
          </div>
          <div className="resume-contents clearfix">
            <div className="resume-contents-left">
              <h2>education</h2>
            </div>
            <div className="resume-contents-right">
              <h3>Temple University; Philadelphia, PA – Bachelor of Science in Information Science & Technology, 2015</h3>
              <h4>Dean’s List, Fall 2014</h4>
              <p>Undertaken courses in Java (CIS 1068, CIS 2168), Discrete Mathematics (CIS 1166), Computational Probability & Statistics (CIS 2033), C# (CIS 3309), ASP.NET (CIS 3342), Databases (CIS 2109), Operating Systems (CIS 2229), Networking (CIS 3329), Quality Assurance & Testing (CIS 3374), Usability Engineering (CIS 4330), Capstone I (CIS 4296), Capstone II (CIS 4396), Network Security (CIS 4378), Project Management (CIS 4330).</p>
            </div>
          </div>
          <div className="resume-contents clearfix">
            <div className="resume-contents-left">
              <h2>skills</h2>
            </div>
            <div className="resume-contents-right">
              <table>
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
              </table>
              <br />
              <p className="resume-frameworks-for-website">This website is designed, built and hosted completely by me. It uses <a href="https://facebook.github.io/react/" target="_blank">ReactJS</a>, <a href="https://webpack.js.org" target="_blank">Webpack</a>, <a href="https://nodejs.org/en/" target="_blank">Node.js</a>, <a href="https://expressjs.com" target="_blank">ExpressJS</a>, <a href="http://sass-lang.com" target="_blank">SASS</a>, <a href="https://www.nginx.com" target="_blank">Nginx</a>, and <a href="https://www.docker.com" target="_blank">Docker</a></p>
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
        </MainContents>
        <Footer />
      </div>
    );
  }
}
