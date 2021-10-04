import React from 'react';
import curriculumc from '../../img/curriculumn.svg';
import teacher from '../../img/teacher.svg';
import certificate from '../../img/certificate.svg';

const WeDo = () => {
	return (
		<div className=" my-24 container mx-auto">
			<h1 className="text-4xl font-bold text-center mb-10">
				<span className="border-l-4 border-indigo-400 pl-2">WHAT WE DO?</span>
			</h1>
			<div className="flex justify-evenly flex-col items-center md:flex-row ">
				<div className="w-1/4 flex flex-col items-center mb-2">
					<img src={curriculumc} alt="!" className="h-24" />
					<h2 className=" my-2 text-2xl font-bold text-gray-700">Curriculumn</h2>
					<p className="text-center text-gray-600">
						We try to made the simplest curriculumn to lear language very easily
					</p>
				</div>
				<div className="w-1/4 flex flex-col items-center mb-2">
					<img src={teacher} alt="!" className="h-24" />
					<h2 className=" my-2 text-2xl font-bold text-gray-700">Instuctor</h2>
					<p className="text-center text-gray-600">
						We have the most qualified and experienced teacher for you.
					</p>
				</div>
				<div className="w-1/4 flex flex-col items-center mb-2">
					<img src={certificate} alt="!" className="h-24" />
					<h2 className=" my-2 text-2xl font-bold text-gray-700">Certification</h2>
					<p className="text-center text-gray-600">
						We Will give you a certificate after completion the course.
					</p>
				</div>
			</div>
		</div>
	);
};

export default WeDo;
