import React from 'react';
import { BiDownArrowAlt } from 'react-icons/bi';
import '../styles/VideoClips_Home_section.scss';

const VideoClips = () => {
	return (
		<div className='videoclips-section container'>
			<div className='videoclips-section_header'>
				<h3>Mis más recientes Video Clips</h3>
				<BiDownArrowAlt className='videoclips-section_header_icon' />
			</div>
		</div>
	);
};

export default VideoClips;
