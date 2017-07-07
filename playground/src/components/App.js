import React, { Component } from "React";
import User from './User';
import Phone from './Phone';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <User />
        <br />
        <br />
        <br />
        <Phone />
      </div>
    );
  }
}

export default App;
