import React from 'react';
import PropTypes from 'prop-types';

const GuessWord = props => {
	let contents;
	if (props.guessedWords.length === 0) {
		contents = (
			<span data-test='guess-instructions'>Try to guess the word.</span>
		);
	} else {
        const guessRow = props.guessedWords.map((word, index) => (
            <tr data-test="guessed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ));
        contents = (
			<div data-test='guessed-words'>
				<h3>Guessed words</h3>
				<table className='table table-sm'>
					<thead className="thead-light">
						<tr>
							<th>Guess</th>
							<th>Matching Letters</th>
						</tr>
					</thead>
                    <tbody>{guessRow}</tbody>
				</table>
			</div>
		);
    }
	return <div data-test='component-guessed-words'>{contents}</div>;
};

GuessWord.propTypes = {
	guessedWords: PropTypes.arrayOf(
		PropTypes.shape({
			guessedWord: PropTypes.string.isRequired,
			letterMatchCount: PropTypes.number.isRequired,
		})
	).isRequired,
};

export default GuessWord;
