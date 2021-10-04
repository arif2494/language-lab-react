import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import About from './components/About/About';
import Course from './components/Course/Course';
import Event from './components/Event/Event';
import PageNotFound from './components/PageNotFount/PageNotFound';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/course">
						<Course />
					</Route>
					<Route path="/event">
						<Event />
					</Route>
					<Route path="*">
						<PageNotFound />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
