import React from 'react';

const Course = (props) => {
	const { name, price, seat, description, img } = props.course;
	return (
		// Single course
		<div className="border-2 border-solid rounded-xl shadow-2xl">
			<img className="w-full mx-auto rounded-xl h-80 animate" src={img} alt="" />
			<h3 className="text-2xl font-bold my-2 text-gray-700 border-b-2 border-solid pb-2 pl-2">{name}</h3>
			<p className="p-2 text-gray-600 font-medium">{description}</p>
			<div className="flex justify-evenly  border-t-2 border-solid p-2">
				<p className="font-medium">
					Price: <span className="font-bold"> ${price}</span>
				</p>
				<p className="font-medium">
					Seat Available : <span className="font-bold">{seat}</span>
				</p>
			</div>
		</div>
	);
};

export default Course;
