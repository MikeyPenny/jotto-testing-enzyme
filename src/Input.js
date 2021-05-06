import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ secretWord }) => {
	const [currentGuess, setCurrentGuess] = React.useState('');

	const guessChangeHandler = ev => {
		setCurrentGuess(ev.target.value);
	};

	return (
		<div data-test='input-comp'>
			<form data-test='form-inline'>
				<input
					type='text'
					data-test='input-box'
					className='mb-2 mx-sm-3'
					placeholder='Enter Guess'
					value={currentGuess}
					onChange={ev => guessChangeHandler(ev)}
				/>
				<button
					data-test='submit-button'
					className='btn btn-primary mb-2'
				>
					Submit
				</button>
			</form>
		</div>
	);
};

Input.propTypes = {
	secretWord: PropTypes.string.isRequired,
};

export default Input;
