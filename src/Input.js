import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({ success, secretWord }) => {
	const [currentGuess, setCurrentGuess] = useState('');

	const guessChangeHandler = ev => {
		setCurrentGuess(ev.target.value);
	};

	const onSubmitHandler = (ev) => {
		ev.preventDefault();

		setCurrentGuess('');
	};

	if (success) {
		return <div data-test='input-comp'></div> 
	}

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
				onClick={(ev) => onSubmitHandler(ev)}
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
