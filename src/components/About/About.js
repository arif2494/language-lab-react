import React from 'react';

const About = () => {
	return (
		<div className="container mx-auto">
			<h1 className="text-center text-4xl font-medium my-8">
				<span className="border-l-4 border-indigo-400 pl-2">ABOUT US</span>
			</h1>
			<p className="text-center font-medium">OUR STORY</p>

			<p className="text-center text-sm text-gray-500">It is a long established fact that a reade.</p>
			{/* Key details */}
			<div className="flex justify-evenly my-6 divide-x divide-light-blue-400">
				<div className=" px-6 text-center">
					<h5 className="font-medium text-2xl">55000</h5>
					<p className="text-gray-500">FOREIGN FOLLOWERS</p>
				</div>
				<div className=" px-6 text-center">
					<h5 className="font-medium text-2xl">60</h5>
					<p className="text-gray-500">CERTIFIED TEACHER</p>
				</div>
				<div className=" px-6 text-center">
					<h5 className="font-medium text-2xl">2240</h5>
					<p className="text-gray-500">STUDENTS ENROLLED</p>
				</div>
				<div className=" px-6 text-center">
					<h5 className="font-medium text-2xl">8</h5>
					<p className="text-gray-500">COMPLETE COURSES</p>
				</div>
			</div>

			<img className="mx-auto my-8" src="https://source.unsplash.com/vdXMSiX-n6M/1170x550" alt="" />

			<blockquote className="text-center text-4xl italic  text-gray-400 mb-3">
				“Cras tristique turpis justo, eu consequat sem <br /> adipiscing ut. Donec posuere bibendum metus.”
			</blockquote>
			<p className="text-center text-2xl italic mb-8 text-gray-400">Tony Nguyen, Co-Founder</p>

			{/* What we are */}
			<div className="flex justify-evenly">
				<div className="w-5/12">
					<h2 className="font-medium border-l-2 pl-2 border-indigo-700 mb-4">WHO WE ARE</h2>
					<p className="text-gray-400 my-4 ">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis eros lobortis,
						vestibulum turpis ac, pulvinar odio. Praesent vulputate a elit ac mollis. In sit amet ipsum
						turpis. Pellentesque venenatis, libero vel euismod lobortis, mi metus luctus augue, eget dapibus
						elit nisi eu massa. Phasellus sollicitudin nisl posuere nibh ultricies, et fringilla dui
						gravida.
					</p>
					<p className="text-gray-400 my-4 ">
						Donec iaculis adipiscing neque, non congue massa euismod quis. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.
					</p>
				</div>
				<div className="w-5/12">
					<h2 className="font-medium border-l-2 pl-2 border-indigo-700 mb-4">WHAT WE DO</h2>
					<p className="text-gray-400 my-4 ">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis eros lobortis,
						vestibulum turpis ac, pulvinar odio. Praesent vulputate a elit ac mollis. In sit amet ipsum
						turpis.
					</p>
					<p className="text-gray-400 my-4 ">
						Pellentesque venenatis, libero vel euismod lobortis, mi metus luctus augue, eget dapibus elit
						nisi eu massa. Phasellus sollicitudin nisl posuere nibh ultricies, et fringilla dui gravida.
						Donec iaculis adipiscing neque, non congue massa euismod quis. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
