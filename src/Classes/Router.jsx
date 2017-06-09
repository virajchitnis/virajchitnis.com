import React from 'react';

export class RouterRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderOrNot: false
    };

    this.checkEndpoint = this.checkEndpoint.bind(this);
  }

  componentDidMount() {
    this.checkEndpoint();

    document.addEventListener("routeClick", this.checkEndpoint);
    window.addEventListener('popstate', this.checkEndpoint);
  }

  componentWillUnmount() {
    document.removeEventListener("routeClick", this.checkEndpoint);
    window.removeEventListener('popstate', this.checkEndpoint);
  }

  checkEndpoint(e) {
    if (window.location.pathname === this.props.url) {
      document.title = this.props.title;
      this.setState({
        renderOrNot: true
      });
    }
    else {
      this.setState({
        renderOrNot: false
      });
    }
  }

  render() {
    const renderOrNot = this.state.renderOrNot;
    if (renderOrNot) {
      return (
        <div>
          {this.props.children}
        </div>
      );
    }
    else {
      return null;
    }
  }
}

export class RouterLink extends React.Component {
  constructor(props) {
    super(props);
  }

  clickHandler(e) {
    e.preventDefault();
    window.history.pushState({}, this.props.title, this.props.href);
    var clickEvent = new Event('routeClick');
    document.dispatchEvent(clickEvent);
    if (this.props.resetScrollPos) {
      window.scrollTo(0,0);
    }
  }

  render() {
    return (
      <a className={this.props.className} href={this.props.href} onClick={(e) => this.clickHandler(e)}>{this.props.children}</a>
    );
  }
}
