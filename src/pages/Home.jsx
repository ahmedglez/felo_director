import React from 'react';
import Introduction from '../containers/Introduction';
import introduction_image from '../assets/imgs/introducction.jpg';
import Header from '../components/Header';

const Home = () => {
	return (
		<div className='home-container container-fluid p-0'>
			<Header />
			<Introduction
				image={introduction_image}
				title='El arte de los detalles'
			/>
		</div>
	);
};

export default Home;
