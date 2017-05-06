import React, { Component } from 'react';
// import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div className='jumbotron'>
        <h1>Admin Backend</h1>
        <p>React, Redux and React router for ultra-responsive apps.</p>
        <a href='/about' className='btn btn-primary btn-lg'>Learn more</a>
      </div>
    );
  }
}

// const HomePage = () =>
//   <div className='jumbotron'>
//     <h1>Admin Backend</h1>
//     <p>React, Redux and React router for ultra-responsive apps.</p>
//     <a href='#about' className='btn btn-primary btn-lg'>Learn more</a>
//   </div>

HomePage.propTypes = {};
export default HomePage;
