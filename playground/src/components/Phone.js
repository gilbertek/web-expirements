import React, { Component } from 'react';
import AriaModal from 'react-aria-modal';

export default class Phone extends Component {
  componentWillMount() {
    this.state = { modalOpen: false };
    this.activateModal = this.activateModal.bind(this);
    this.deactivateModal = this.deactivateModal.bind(this);
  }

  activateModal() {
    this.setState({
      modalOpen: true,
    });
  }

  deactivateModal() {
    this.setState({
      modalOpen: false,
    });
  }

  render() {
    const { number, name } = this.props;

    return (
      <div>
        <button
          className='phone-wrapper'
          aria-labelledby='phone-label'
          onClick={this.activateModal}
        />
        <span id='phone-label'
          className='phoneText'>
          View the phone number for { name }&#39;s office.
        </span>
        <AriaModal
          mounted={this.state.modalOpen}
          titleText={`Call ${name}'s office`}
          applicationNode={document.getElementById('app-container')}
          onExit={this.deactivateModal}
          focusDialog
        >
          <div className='modal-content'>
            <header>
              <button
                className='header-close-btn'
                aria-labelledby='header-close-hint'
                onClick={this.deactivateModal}
              >
                ✖
              </button>
              <span id='header-close-hint'
                className='header-close-hint'>Close modal</span>
            </header>
            <h2>Call {name}&#39;s office.</h2>
            <p>
              <span>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </span>
            </p>
            <p className='big-phone'>
              <a id='phone'
                className='phone-link'
                href={`tel:${number}`}>
                { number }
              </a></p>
            <p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ab qui minima harum, quidem cupiditate assumenda. Voluptas, porro corporis! Perferendis facilis velit harum consequatur doloribus omnis consequuntur, aliquam nisi alias!
              </span>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ab qui minima harum, quidem cupiditate assumenda. Voluptas, porro corporis! Perferendis facilis velit harum consequatur doloribus omnis consequuntur, aliquam nisi alias!. </span>
            </p>
            <p>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ab qui minima harum, quidem cupiditate assumenda. Voluptas, porro corporis! Perferendis facilis velit harum consequatur doloribus omnis consequuntur, aliquam nisi alias!
              </span>
            </p>
            <footer>
              <button className='close-modal'
                onClick={this.deactivateModal}>
                Close
              </button>
            </footer>
          </div>
        </AriaModal>
      </div>
    );
  }
}
