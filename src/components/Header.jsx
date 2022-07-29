import '../styles/Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav className='navbar navbar-expand-lg container  nav-justified'>
			<Link className='navbar-brand' to='/'>
				FELO DIRECTOR
			</Link>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNavAltMarkup'
				aria-controls='navbarNavAltMarkup'
				aria-expanded='false'
				aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div
				className='collapse navbar-collapse justify-content-end'
				id='navbarNavAltMarkup'>
				<div className='navbar-nav'>
					<Link className='nav-item nav-link active' to='/'>
						Home <span className='sr-only'>(current)</span>
					</Link>
					<Link className='nav-item nav-link' to='/videoclips'>
						VideoClips
					</Link>
					<Link className='nav-item nav-link' to='/equipo'>
						Equipo
					</Link>
					<Link className='nav-item nav-link' to='/contactar'>
						Contactar
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Header;
