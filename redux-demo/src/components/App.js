import React, { Component } from 'React';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import propTypes from 'prop-types';
import Header from './common/Header';

import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';

class App extends Component {
  render() {
    return(
      <div className='container-fluid'>
        <div className='row'>
          {/* <Header /> */}
          <Router>
            <Switch>
              <Route exact path='/' component={HomePage} />

              <Route path='/about' component={AboutPage} />

              <Route render={function () {
                return <p>Not Found...</p>
              }} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: propTypes.object
};
export default App;
