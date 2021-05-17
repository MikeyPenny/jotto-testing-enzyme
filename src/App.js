
import './App.css';

import Congrats from "./Congrats";
import GuessWord from "./GuessWord";

function App() {
  return (
		<div data-test='component-app' className='container'>
			<h1>Jotto</h1>
			<Congrats success={true} />
			<GuessWord
				guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
			/>
		</div>
  );
}

export default App;
