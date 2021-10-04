import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Events from './components/Events/Events';
import PageNotFound from './components/PageNotFount/PageNotFound';

function App() {
	return (
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
					<Route path="/course">
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
	);
}

export default App;
