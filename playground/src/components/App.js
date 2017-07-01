import React, { Component } from "React";
import Medication from './Medication';
import User from './User';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Medication />
        <User />
      </div>
    );
  }
}

export default App;
