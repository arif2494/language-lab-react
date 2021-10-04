import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Event = (props) => {
	const { img, month, date, location, time, description, name } = props.event;
	return (
		// Single Event
		<div className="border-2 rounded-3xl border-gray-400 flex flex-col lg:flex-row justify-between items-center mb-4 shadow-xl">
			<div className="p-4 lg:p-10 text-center w-full lg:w-1/6 ">
				<p className="text-4xl text-indigo-400">{date}</p>
				<p className="text-2xl">{month}</p>
			</div>
			<div className="w-full p-4 lg:p-0 lg:w-3/5">
				<h1 className="text-2xl mb-2 font-medium text-gray-700">{name}</h1>
				<div className="flex text-gray-500 font-medium">
					<p className="mr-10">
						<FontAwesomeIcon icon={faClock} />
						{time}
					</p>
					<p>
						<FontAwesomeIcon icon={faMapMarkerAlt} />
						{location}
					</p>
				</div>
				<p className="text-gray-600 font-medium">{description}</p>
			</div>
			<div className="pb-4 lg:pb-0">
				<img src={img} alt="!" />
			</div>
		</div>
	);
};

export default Event;
