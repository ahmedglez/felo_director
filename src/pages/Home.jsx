import React from 'react';
import Introduction from '../containers/Introduction';
import introduction_image from '../assets/imgs/introducction.jpg';
import VideoClips from '../containers/VideoClips';
import '../styles/Home.scss';

const Home = () => {
	return (
		<div className='home-container container-fluid p-0'>
			<Introduction
				image={introduction_image}
				title='El arte de los detalles'
			/>
			<VideoClips />
		</div>
	);
};

export default Home;
