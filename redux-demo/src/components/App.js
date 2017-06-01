import React, { Component } from 'React';
import { Route } from 'react-router-dom';
import propTypes from 'prop-types';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';

class App extends Component {
  render() {
    return(
      <div className='container-fluid'>
        <div className='row'>
          <Header />

          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: propTypes.object
};
export default App;
