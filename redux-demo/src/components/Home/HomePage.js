import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div className='jumbotron'>
        <h1>Admin Backend</h1>
        <p>React, Redux and React router for ultra-responsive apps.</p>
        <Link to='about' className='btn btn-primary btn-lg'>
          Learn more
        </Link>
      </div>
    );
  }
}

export default HomePage;
