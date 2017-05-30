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
          commit_id: res.body.commit_id
        });
      }
      else {
        self.setState({
          commit_id: ''
        });
      }
    });
  }

  buildCommitElement() {
    const commit_id = this.state.commit_id;
    const key = this.state.key;
    let commitFooter = '';
    let commitURL = '';

    if (commit_id != '') {
      commitURL = "https://github.com/virajchitnis/virajchitnis.com/commit/" + commit_id;
    }

    if (key != '') {
      commitFooter = (
        <p className="commit">
          <a href={commitURL}>{commit_id}</a>
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
