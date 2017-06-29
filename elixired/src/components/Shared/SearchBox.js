import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSearch     = this.handleSearch.bind(this);
  }

  handleTextChange = (event) => {
    this.setState({ term: event.target.value });
  }

  handleSearch = (event) => {
    event.preventDefault();
    const { term } = this.state;
    this.props.handleSearch(term);
  };

  render() {
    const { term } = this.state;

    return (
      <div className='container'>
        <input
          className='input'
          placeholder='Search...'
          value={term}
          type='text'
          name='searchTerm'
          onChange={this.handleTextChange} />

        <button
          className='primary'
          disabled={!term}
          value={'Search'}
          type='submit'
          onClick={this.handleSearch}>Search
        </button>
      </div>
    );
  }
}

SearchBox.propTypes = {
  term:         PropTypes.string,
  handleSearch: PropTypes.func.isRequired
};

export default SearchBox;
