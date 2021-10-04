import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';

const Events = () => {
	// Fetch event data
	const [ events, setEvents ] = useState([]);
	useEffect(() => {
		fetch('event.json').then((res) => res.json()).then((data) => setEvents(data));
	}, []);
	return (
		<div className="container mx-auto">
			<h1 className="text-3xl text-center my-6 font-medium">
				<span className="border-l-4 border-indigo-400 pl-2">OUR UPCOMING EVENTS</span>
			</h1>
			<div>{events.map((event) => <Event event={event} key={event.id} />)}</div>
		</div>
	);
};

export default Events;
