import React from 'react';
import '../styles/Introduction.scss';

const Introduction = ({ image, title }) => {
	return (
		<div className='introduction-container container-fluid  '>
			<div className='img-container'>
				<div className='text-container  p-0 '>
					<div className='title  '>
						<p className=''>{title}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Introduction;
