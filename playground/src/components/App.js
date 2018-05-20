import React, { Component } from 'react';
import User from './User';
import Phone from './Phone';
import RegistrationForm from './signup/RegistrationForm';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        {/*
        <User />
        <br />
        <br />
        <br />
        <Phone /> */}
        <RegistrationForm />
      </div>
    );
  }
}

export default App;
