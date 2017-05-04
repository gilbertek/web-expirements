import React from 'React';

const Header = () =>
  <nav>
    <a href="/" activeClassName='active'>Home</a>
    { " | " }
    <a href='/about' activeClassName='active'>About</a>
  </nav>

export default Header;
