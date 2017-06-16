import React, { Component } from 'React';
import {
  Route,
  Switch
} from 'react-router-dom';
import propTypes from 'prop-types';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import CoursePage from './course/CoursePage';
import ManageCoursePage from './course/ManageCoursePage';

class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <Header />

          <Switch>
            <Route exact
              path='/'
              component={HomePage} />
            <Route
              path='/courses'
              component={CoursePage} />
            <Route
              path='/course/:id'
              component={ManageCoursePage} />
            <Route
              path='/about'
              component={AboutPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: propTypes.object
};
export default App;
