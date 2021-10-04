import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div className="navbar">
			{/* Navbar */}
			<nav className="container mx-auto text-center py-6 flex justify-between">
				<div>
					{/* Navbar Brand */}
					<NavLink className="navlinks text-3xl font-medium" to="/">
						<span className="border-l-4 nav-border border-white pl-2">
							LANGUAGE LAB <FontAwesomeIcon icon={faLanguage} />
						</span>
					</NavLink>
				</div>
				<div>
					{/* Navlink */}
					<NavLink className="navlinks text-3xl font-medium" to="/">
						<span className="border-l-4 nav-border border-white pl-2">HOME</span>
					</NavLink>
					<NavLink className="navlinks text-3xl font-medium" to="/about">
						<span className="border-l-4 nav-border border-white pl-2">ABOUT</span>
					</NavLink>
					<NavLink className="navlinks text-3xl font-medium" to="/course">
						<span className="border-l-4 nav-border border-white pl-2">COURSES</span>
					</NavLink>
					<NavLink className="navlinks text-3xl font-medium" to="/events">
						<span className="border-l-4 nav-border border-white pl-2">EVENTS</span>
					</NavLink>
				</div>
			</nav>
		</div>
	);
};

export default Header;
