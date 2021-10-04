import React from 'react';
import img from '../../img/pagenotfound.svg';
const PageNotFound = () => {
	return (
		<div className="container mx-auto">
			<h1 className="text-8xl my-4 text-center text-indigo-500">Page Not Found!</h1>
			<img className="w-9/12 mx-auto" src={img} alt="!" />
		</div>
	);
};

export default PageNotFound;
