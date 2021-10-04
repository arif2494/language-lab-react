import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div className="navbar">
			<nav className="container mx-auto text-center py-6 ">
				<NavLink className="navlinks text-4xl font-bold" to="/">
					Home
				</NavLink>
				<NavLink className="navlinks text-4xl font-bold" to="/about">
					About
				</NavLink>
				<NavLink className="navlinks text-4xl font-bold" to="/course">
					Courses
				</NavLink>
				<NavLink className="navlinks text-4xl font-bold" to="/events">
					Events
				</NavLink>
			</nav>
		</div>
	);
};

export default Header;
