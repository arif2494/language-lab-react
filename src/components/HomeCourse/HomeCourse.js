import React from 'react';

const HomeCourse = (props) => {
	const { name, price, seat, description, img } = props.course;
	return (
		<div className="w-3/4 md:w-1/4 border-2 border-solid rounded-xl shadow-2xl mb-2">
			<img className="w-full rounded-xl h-72" src={img} alt="" />
			<h3 className="text-2xl font-bold my-2 border-b-2 border-solid pb-2 pl-2 text-gray-700">{name}</h3>
			<p className="p-2 text-gray-600 font-medium">{description.substring(0, 80)}...</p>
			<div className="flex justify-evenly border-t-2 border-solid p-2 font-medium">
				<p>
					Price: <span className="font-bold"> ${price}</span>
				</p>
				<p>
					Seat Available : <span className="font-bold">{seat}</span>
				</p>
			</div>
		</div>
	);
};

export default HomeCourse;
