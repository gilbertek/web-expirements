import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../prescription.css';

class PrescriptionModalManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currIndex: 0,
      showModal: false
    };
  }

  handleClickNext = () => {
    const { modalList } = this.props;
    const { currIndex } = this.state;

    if (currIndex < modalList.length - 1) {
      this.setState({ currIndex: currIndex + 1 });
    } else {
      this.setState({ showModal: false });
    }
  };

  handleModalHide = () => {
    this.setState({ showModal: false });
  };

  activateModal = () =>
    this.setState({ showModal: true },
      () => { console.log('STATE::activateModal', this.state); });

  deactivateModal = () => {
    this.setState({
      modalOpen: false
    });
  }

  render() {
    const { modalList } = this.props;
    const { currIndex, showModal } = this.state;
    const ModalComponent = modalList[currIndex];

    console.log('STATE::render', this.state);
    console.log('PROPS::render', this.props);
    console.log('ModalComponent', ModalComponent);

    const modal = showModal
      ?
      (<ModalComponent
        step={currIndex + 1}
        onClickNext={this.handleClickNext}
        show={showModal}
        onExit={this.deactivateModal}
        onHide={this.handleModalHide}
      />)
    : false;

    return (
      <div>
        <input
          id="checkBox"
          type="checkbox"
          className="input-wrapper"
          aria-labelledby="input-label"
          onClick={this.activateModal}
        /> Are you adding a prescription?
        { modal }
      </div>
    );
  }
}

PrescriptionModalManager.propTypes = {
  showModal: PropTypes.bool,
  modalList: PropTypes.array
};

export default PrescriptionModalManager;
