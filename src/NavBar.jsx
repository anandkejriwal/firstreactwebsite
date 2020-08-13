import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';



function NavBar() {


	return (
		<>
			<div className='nav_div'>
				<NavLink exact activeClassName='active' className='nav' to='/firstreactwebsite/'>Home</NavLink>
				<NavLink exact activeClassName='active' className='nav' to='/firstreactwebsite/mainApp'>Main App</NavLink>
				<NavLink exact activeClassName='active' className='nav' to='/firstreactwebsite/yashApp'>Yash App</NavLink>
				<NavLink exact activeClassName='active' className='nav' to='/firstreactwebsite/user/new/user/'>User</NavLink>
			</div>
		</>
	);
}

export default NavBar;
