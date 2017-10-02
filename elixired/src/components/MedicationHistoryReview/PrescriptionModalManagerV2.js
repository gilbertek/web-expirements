import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../prescription.scss';

class PrescriptionModalManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currIndex:  0,
      showModal:  false,
      modalState: false
    };
  }

  handleClickNext = () => {
    const { modalList } = this.props;
    const { currIndex } = this.state;

    if (currIndex < modalList.length - 1) {
      this.setState({ currIndex: currIndex + 1 });
    } else {
      this.setState({ showModal: false, modalState: false });
    }
  };

  handleModalHide = () => {
    this.setState({ showModal: false, modalState: false });
  };

  activateModal = evt =>
    this.setState({
      showModal:  true,
      modalState: evt.target.checked
    });

  deactivateModal = () => {
    this.setState({ showModal: false, modalState: false });
  }

  render() {
    const { modalList } = this.props;
    const { currIndex, showModal, modalState } = this.state;
    const ModalComponent = modalList[currIndex];

    const modal = (
      showModal
      ? (
        <ModalComponent
          step={currIndex + 1}
          onClickNext={this.handleClickNext}
          show={showModal}
          onExit={this.deactivateModal}
          onHide={this.handleModalHide}
        />
      ) : false
    );

    return (
      <div>
        <input
          id="checkBox"
          type="checkbox"
          className="input-wrapper"
          aria-labelledby="input-label"
          checked={modalState}
          onChange={this.activateModal}
        />
        Are you adding a prescription?
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
