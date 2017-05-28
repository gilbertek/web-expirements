import React from 'React';
import { Link } from 'react-router-dom';

const Header = () =>
  <nav>
    <Link to='/' className='active'>Home</Link>
    { ' | ' }
    <Link to='/about' className='active'>About</Link>
  </nav>

export default Header;
