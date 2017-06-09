import React from 'react';
import {RouterLink} from '../../Classes/Router.jsx';
import './MenuBarContents.scss';

export default class MenuBarContents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="nav-link">
            <RouterLink className="nav-standard" title="Resumé - Viraj Chitnis" href="/resume" resetScrollPos>resumé</RouterLink>
          </div>
          <div className="nav-link">
            <RouterLink className="nav-standard" title="Apps - Viraj Chitnis" href="/apps" resetScrollPos>apps</RouterLink>
          </div>
          <div className="nav-link">
            <RouterLink className="nav-home" title="Viraj Chitnis" href="/">VC</RouterLink>
          </div>
          <div className="nav-link">
            <RouterLink className="nav-standard" title="Winery - Viraj Chitnis" href="/winery" resetScrollPos>winery</RouterLink>
          </div>
          <div className="nav-link">
            <RouterLink className="nav-standard" title="Credits - Viraj Chitnis" href="/credits" resetScrollPos>credits</RouterLink>
          </div>
        </div>
        <div className="container-mobile">
          <div className="nav-link nav-link-top-home">
            <RouterLink className="nav-home" title="Viraj Chitnis" href="/">VC</RouterLink>
          </div>
          <div className="nav-link">
            <RouterLink className="nav-standard" title="Resumé - Viraj Chitnis" href="/resume" resetScrollPos>resumé</RouterLink>
          </div>
          <div className="nav-link">
            <RouterLink className="nav-standard" title="Apps - Viraj Chitnis" href="/apps" resetScrollPos>apps</RouterLink>
          </div>
          <div className="nav-link">
            <RouterLink className="nav-standard" title="Winery - Viraj Chitnis" href="/winery" resetScrollPos>winery</RouterLink>
          </div>
          <div className="nav-link">
            <RouterLink className="nav-standard" title="Credits - Viraj Chitnis" href="/credits" resetScrollPos>credits</RouterLink>
          </div>
          <div className="nav-link nav-link-bottom-home">
            <RouterLink className="nav-home" title="Viraj Chitnis" href="/">VC</RouterLink>
          </div>
        </div>
      </div>
    );
  }
}
