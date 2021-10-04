import React from 'react';
import curriculumc from '../../img/curriculumn.svg';
import teacher from '../../img/teacher.svg';
import certificate from '../../img/certificate.svg';

const WeDo = () => {
	return (
		<div className=" my-24 container mx-auto">
			<h1 className="text-4xl font-bold text-center mb-10">What We Do?</h1>
			<div className="flex justify-evenly">
				<div className="w-1/4 flex flex-col items-center">
					<img src={curriculumc} alt="!" className="h-24" />
					<h2 className="text-2xl font-bold">Curriculumn</h2>
					<p className="text-center">We try to made the simplest curriculumn to lear language very easily</p>
				</div>
				<div className="w-1/4 flex flex-col items-center">
					<img src={teacher} alt="!" className="h-24" />
					<h2 className="text-2xl font-bold">Instuctor</h2>
					<p className="text-center">We have the most qualified and experienced teacher for you.</p>
				</div>
				<div className="w-1/4 flex flex-col items-center">
					<img src={certificate} alt="!" className="h-24" />
					<h2 className="text-2xl font-bold">Certification</h2>
					<p className="text-center">We Will give you a certificate after completion the course.</p>
				</div>
			</div>
		</div>
	);
};

export default WeDo;
