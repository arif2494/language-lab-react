import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
	const [ courses, setCourses ] = useState([]);
	useEffect(() => {
		fetch('data.json').then((res) => res.json()).then((data) => setCourses(data));
	}, []);
	return (
		<div>
			<h1 className="text-center my-4 text-3xl font-medium">Our All Courses</h1>
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
				{courses.map((cr) => <Course course={cr} key={cr.id} />)}
			</div>
		</div>
	);
};

export default Courses;
