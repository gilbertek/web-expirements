import React from 'React';

const Header = () =>
  <nav>
    <a href='/' className='active'>Home</a>
    { ' | ' }
    <a href='/about' className='active'>About</a>
  </nav>

export default Header;
