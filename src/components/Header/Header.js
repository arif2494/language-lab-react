import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<nav className="container mx-auto text-center">
				<NavLink className="navlinks text-4xl font-bold" to="/">
					Home
				</NavLink>
				<NavLink className="navlinks text-4xl font-bold" to="/about">
					About
				</NavLink>
				<NavLink className="navlinks text-4xl font-bold" to="/course">
					Courses
				</NavLink>
				<NavLink className="navlinks text-4xl font-bold" to="/event">
					Event
				</NavLink>
			</nav>
		</div>
	);
};

export default Header;
