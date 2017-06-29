import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBox from '../Shared/SearchBox';

class PrescriptionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetched:              false,
      searchTerm:           ''
    };
  }

  componentWillReceiveProps(nextProps) {
    const { searchTerm, searchDrugByName } = this.props;
    if (nextProps.searchTerm !== searchTerm) {
      searchDrugByName(nextProps.searchTerm);
    }
  }

  handleSearch = (searchTerm) => {
    this.prop.searchDrugByName(searchTerm);
  }

  render() {
    const { searchTerm } = this.props;

    return (
      <div className='row'>
        <h1>Prescription</h1>

        <SearchBox term={searchTerm}
          handleSearch={this.handleSearch} />
      </div>
    );
  }
}

PrescriptionContainer.propTypes = {
  searchTerm:               PropTypes.string,
  searchDrugByName:         PropTypes.func
};

// searchDrugByName: () => {
//     new Promise.resolve();
//   }


const mapDispatchToProps = (dispatch) => ({
  searchDrugByName: (searchTerm) => {
    // dispatch(searchDrugByName(searchTerm));
    return Promise.resolve();
  }
});

export default PrescriptionContainer;
