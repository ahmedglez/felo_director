import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import '../styles/App.css';

function App() {
	return (
		<div className='App'>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='about' element={<AboutUs />} />
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
