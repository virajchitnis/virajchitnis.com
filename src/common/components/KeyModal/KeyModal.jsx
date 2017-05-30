import React from 'react';
import {getCookie,setCookie} from '../../functions/Cookies.js';
import './KeyModal.scss';

export default class KeyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      keys: [],
      input: ''
    };

    this.handleTapSequence = this.handleTapSequence.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
    document.addEventListener("sequenceTriggered", this.handleTapSequence);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
    document.removeEventListener("sequenceTriggered", this.handleTapSequence);
  }

  handleTapSequence() {
    const key = getCookie('key');
    this.setState({
      displayModal: true,
      input: key
    });
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleSubmit(event) {
    setCookie('key', this.state.input, 30);
    var apiKeyEvent = new Event('api-key');
    document.dispatchEvent(apiKeyEvent);

    this.setState({
      displayModal: false
    });
    event.preventDefault();
  }

  handleKeyDown(e) {
    if (e.keyCode === 27) {
      this.setState({
        displayModal: false
      });
    }
    else {
      let keys = this.state.keys;
      keys[e.keyCode] = true;
      this.setState({
        keys: keys
      });

      if (keys[16] && keys[75]) {
        const key = getCookie('key');
        this.setState({
          displayModal: true,
          input: key
        });
      }
    }
  }

  handleKeyUp(e) {
    let keys = this.state.keys;
    keys[e.keyCode] = false;
    this.setState({
      keys: keys
    });
  }

  render() {
    const displayModal = this.state.displayModal;
    let dom;
    if (displayModal) {
      dom = (
        <div className="key-modal-background">
          <div className="key-modal">
            <p>Congratulations! You have discovered my secret portal to another world.</p>
            <p>A word of warning, if you choose to enter the portal, there is no comming back.</p>
            <form onSubmit={this.handleSubmit}>
              <input placeholder="Enter key" value={this.state.input} onChange={this.handleChange} />
            </form>
            <p>P.S. Don't waste your time trying to guess the key. There is no validation, and no indication as to whether the key you entered is valid or invalid. Only a valid key will take you to the other world, an invalid key will simply do nothing.</p>
            <p className="modal-dismiss-msg-desktop">To close this box, either press <b>esc</b>.</p>
            <p className="modal-dismiss-msg-mobile">To close this box, enter random text into the input field and press enter.</p>
          </div>
        </div>
      );
    }
    else {
      dom = null;
    }
    return dom;
  }
}
