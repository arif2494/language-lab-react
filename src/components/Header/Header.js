import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div className="navbar">
			<nav className="container mx-auto text-center py-6 flex justify-between">
				<div>
					<NavLink className="navlinks text-3xl font-medium" to="/">
						<span className="border-l-4 border-white pl-2">LANGUAGE LAB</span>
					</NavLink>
				</div>
				<div>
					<NavLink className="navlinks text-3xl font-medium" to="/">
						<span className="border-l-4 border-white pl-2">HOME</span>
					</NavLink>
					<NavLink className="navlinks text-3xl font-medium" to="/about">
						<span className="border-l-4 border-white pl-2">ABOUT</span>
					</NavLink>
					<NavLink className="navlinks text-3xl font-medium" to="/course">
						<span className="border-l-4 border-white pl-2">COURSES</span>
					</NavLink>
					<NavLink className="navlinks text-3xl font-medium" to="/events">
						<span className="border-l-4 border-white pl-2">EVENTS</span>
					</NavLink>
				</div>
			</nav>
		</div>
	);
};

export default Header;
