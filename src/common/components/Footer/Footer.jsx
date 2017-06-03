import React from 'react';
import request from 'superagent';
import {getCookie} from '../../functions/Cookies.js';
import './Footer.scss';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commit_id: '',
      key: ''
    };

    this.keyUpdated = this.keyUpdated.bind(this);
  }

  componentDidMount() {
    document.addEventListener('api-key', this.keyUpdated);

    const key = getCookie('key');
    this.setState({
      key: key
    });
    if (key != '') {
      this.getGitCommit(key);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('api-key', this.keyUpdated);
  }

  keyUpdated(e) {
    const key = getCookie('key');
    this.setState({
      key: key
    });
    if (key != '') {
      this.getGitCommit(key);
    }
  }

  getGitCommit(key) {
    const self = this;
    return request
    .get('/api/gitcommit')
    .set('api-key', key)
    .end(function(err, res){
      if (res.statusCode == 200) {
        self.setState({
          commit_id: res.body.commit_id,
          updated_at: res.body.updated_at
        });
      }
      else {
        self.setState({
          commit_id: '',
          updated_at: ''
        });
      }
    });
  }

  buildCommitElement() {
    const commit_id = this.state.commit_id;
    const updated_at = this.state.updated_at;
    const options = {
      weekday: "long", year: "numeric", month: "short",
      day: "numeric", hour: "2-digit", minute: "2-digit"
    };
    const key = this.state.key;
    let commitFooter = '';
    let commitURL = '';
    let formattedDate = '';

    if (commit_id != '') {
      commitURL = "https://github.com/virajchitnis/virajchitnis.com/tree/" + commit_id;
      formattedDate = new Date(updated_at).toLocaleTimeString("en-us", options);
      commitFooter = (
        <p className="commit">
          <a href={commitURL}>{commit_id}</a>
          <br />
          {formattedDate}
        </p>
      );
    }
    return commitFooter;
  }

  render() {
    return (
      <div className="footer">
        <p className="copyright">Copyright © 2017 Viraj Chitnis</p>
        {this.buildCommitElement()}
      </div>
    );
  }
}
