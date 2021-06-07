import {useEffect} from 'react';
import './App.css';
import Input from './Input';

import Congrats from "./Congrats";
import GuessWord from "./GuessWord";
import {getSecretWord} from './actions';

function App() {

  // TODO: get props from shared state
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];

  useEffect(() => {
    getSecretWord();
  }, [])

  return (
		<div data-test='component-app' className='container'>
			<h1>Jotto</h1>
			<Congrats success={success} />
      <Input success={success} secretWord={secretWord} />
			<GuessWord
				guessedWords={guessedWords}
			/>
		</div>
  );
}

export default App;
