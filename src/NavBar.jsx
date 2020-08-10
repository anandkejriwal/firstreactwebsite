import React from 'react';
import { NavLink } from 'react-router-dom';
import  './Nav.css';



function NavBar() {

 
  return (
    <> 
      <div className='nav_div'>
	  <NavLink exact activeClassName='active' className='nav' to='/'>Home</NavLink>
      <NavLink exact activeClassName='active' className='nav' to='/mainApp'>Main App</NavLink>
      <NavLink exact activeClassName='active' className='nav' to='/yashApp'>Yash App</NavLink>	  
      <NavLink exact activeClassName='active' className='nav' to='/user/new/user/'>User</NavLink>	  
	  </div>
	  </>
  );
}

export default NavBar;
