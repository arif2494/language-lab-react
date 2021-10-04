import React, { useContext } from 'react';
import { CourseData } from '../../App';
import HomeCourse from '../HomeCourse/HomeCourse';
import Showcase from '../Showcase/Showcase';
import WeDo from '../WeDo/WeDo';
// import bgImg from '../../img/classroom.jpg';
const Home = () => {
	// Receive data by context api
	const course = useContext(CourseData);
	// display firtst 3  data
	const courses = course.slice(0, 3);
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
