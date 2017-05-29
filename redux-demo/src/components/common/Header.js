import React from 'React';
import { NavLink } from 'react-router-dom';

const Header = () =>
  <nav>
    <NavLink exact to='/' activeClassName='active'>Home</NavLink>
    { ' | ' }
    <NavLink to='/about' activeClassName='active'>About</NavLink>
  </nav>

export default Header;
