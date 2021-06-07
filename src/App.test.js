import App from './App';
import { mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import { getSecretWord as mockGetSecretWord } from './actions';

// activate global mock to make sure getSecretWord doesn't make network call
jest.mock('./actions');

const setup = () => {
	// Use mount because useEffect is not called on shallow
	return mount(<App />);
};;

test('renders without error', () => {
	const wrapper = setup();
	const app = findByTestAttr(wrapper, 'component-app');
	expect(app).toHaveLength(1);
});


describe('get secret word', () => {
	beforeEach(() => {
		mockGetSecretWord.mockClear();
	});
	test('getSecretWord on app mount', () => {
		const wrapper = setup();

		expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
	});

	test('getSecretWord does not run on app update', () => {
		const wrapper = setup();
		mockGetSecretWord.mockClear();
		// using setProps because wrapper.update() doesn't trigger useEffect
		wrapper.setProps();
		expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
	});
});