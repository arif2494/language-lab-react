import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
	const [ courses, setCourses ] = useState([]);
	useEffect(() => {
		fetch('data.json').then((res) => res.json()).then((data) => setCourses(data));
	}, []);
	return (
		<div>
			<h1 className="text-center my-4 text-4xl font-medium ">
				<span className="border-l-4 border-indigo-400 pl-2">OUR ALL COURSES</span>
			</h1>
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
				{courses.map((cr) => <Course course={cr} key={cr.id} />)}
			</div>
		</div>
	);
};

export default Courses;
