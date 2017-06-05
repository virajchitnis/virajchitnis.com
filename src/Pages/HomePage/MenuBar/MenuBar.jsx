import React from 'react';
import MenuBarContents from '../../../Components/MenuBarContents/MenuBarContents.jsx';
import './MenuBar.scss';

export default class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   addClass: false
    // };
  }

  // toggle() {
  //   this.setState({addClass: !this.state.addClass});
  // }
  //
  // handleScroll() {
  //   console.log('scrolled');
  //   this.setState({
  //     addClass: true
  //   });
  // }
  //
  // componentDidMount() {
  //   window.addEventListener('mousewheel', this.handleScroll);
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener('mousewheel', this.handleScroll);
  // }

  render() {
    // let menuClass = ["menu-bar"];
    // if(this.state.addClass) {
    //   boxClass.push('show-up');
    // }
    return (
      <div className="menu-bar">
        <MenuBarContents />
      </div>
    );
  }
}
