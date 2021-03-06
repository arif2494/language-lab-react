import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Events from './components/Events/Events';
import PageNotFound from './components/PageNotFount/PageNotFound';
import { createContext, useEffect, useState } from 'react';

// Context api
export const CourseData = createContext('data');
function App() {
	const [ courses, setCourses ] = useState([]);
	useEffect(() => {
		fetch('data.json').then((res) => res.json()).then((data) => setCourses(data));
	}, []);
	return (
		<CourseData.Provider value={courses}>
			<div className="App">
				{/* React ROuters */}
				<Router>
					<Header />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/courses">
							<Courses />
						</Route>
						<Route path="/events">
							<Events />
						</Route>
						<Route path="*">
							<PageNotFound />
						</Route>
					</Switch>
					<Footer />
				</Router>
			</div>
		</CourseData.Provider>
	);
}

export default App;
