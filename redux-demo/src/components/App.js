import React, { Component } from 'React';
import propTypes from 'prop-types';
import Header from './common/Header';

class App extends Component {
  render() {
    return(
      <div className='container-fluid'>
        <div className='row'>
          <Header />
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: propTypes.object
};
export default App;
