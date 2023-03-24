import { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';

export const Navigation = () => {
	const { onInputChange, valueSearch, onResetForm } =
		useContext(PokemonContext);

	const navigate = useNavigate();

	const onSearchSubmit = e => {
		e.preventDefault();
		navigate('/search', {
			state: valueSearch,
		});

		onResetForm();
	};

	return (
		<>
			<header className='topcontainer'>
				<Link to='/' className='logo'>
				<a href="https://fontmeme.com/pokemon-font/"><img src="https://fontmeme.com/permalink/230324/55653adbb4764efd9fbfe08936e49ffd.png" alt="pokemon-font" border="0"/></a>
				</Link>
				<form onSubmit={onSearchSubmit}>
					<div className='form-group'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='icon-search'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
							/>
						</svg>
						<input
							type='search'
							name='valueSearch'
							id='coloredInput'
							value={valueSearch}
							onChange={onInputChange}
							placeholder='Insert a Pokemon name'
						/>
					</div>

					<button className='btn-search'>Search</button>
				</form>
			</header>

			<Outlet />
		</>
	);
};
