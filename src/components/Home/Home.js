import React, { useEffect, useState } from 'react';
import HomeCourse from '../HomeCourse/HomeCourse';
import Showcase from '../Showcase/Showcase';
import WeDo from '../WeDo/WeDo';
// import bgImg from '../../img/classroom.jpg';
const Home = () => {
	const [ course, setCourse ] = useState([]);
	const courses = course.slice(0, 3);
	useEffect(() => {
		fetch('data.json').then((res) => res.json()).then((data) => setCourse(data));
	}, []);
	return (
		<div>
			<Showcase />
			<WeDo />
			<div className="container mx-auto flex justify-evenly">
				{courses.map((cr) => <HomeCourse course={cr} key={cr.id} />)}
			</div>
		</div>
	);
};

export default Home;
