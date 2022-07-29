import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Equipo from '../pages/Equipo';
import Videoclips from '../pages/Videoclips';
import '../styles/App.css';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contactar' element={<Contact />} />
				<Route path='/equipo' element={<Equipo />} />
				<Route path='/videoclips' element={<Videoclips />} />
			</Routes>
		</div>
	);
}

export default App;
