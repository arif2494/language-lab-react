import React, { useEffect, useState } from 'react';
import HomeCourse from '../HomeCourse/HomeCourse';
import Showcase from '../Showcase/Showcase';
import WeDo from '../WeDo/WeDo';
// import bgImg from '../../img/classroom.jpg';
const Home = () => {
	// fetch courses data
	const [ course, setCourse ] = useState([]);
	const courses = course.slice(0, 3);
	useEffect(() => {
		fetch('data.json').then((res) => res.json()).then((data) => setCourse(data));
	}, []);
	return (
		<div>
			{/* home page showcase */}
			<Showcase />
			{/* What we do */}
			<WeDo />
			{/* display 3 courses */}
			<h1 className="text-center text-4xl font-bold mb-10">
				<span className="border-l-4 border-indigo-400 pl-2">OUR COURSES</span>
			</h1>
			<div className="container mx-auto flex justify-evenly flex-col items-center md:flex-row">
				{courses.map((cr) => <HomeCourse course={cr} key={cr.id} />)}
			</div>
		</div>
	);
};

export default Home;
