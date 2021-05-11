import React from 'react';
import Input from './Input';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';

const setup = (success = false, secretWord = 'nelson') => {
	return shallow(<Input success={success} secretWord={secretWord} />);
};

const mockSetCurrentGuess = jest.fn();

jest.mock('react', () => ({
	// Mock the react package
	...jest.requireActual('react'), // With the actual package
	// Overwrite the usetState prop
	useState: initialState => [initialState, mockSetCurrentGuess],
}));

test('renders without errors', () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, 'input-comp');
	expect(component.length).toBe(1);
});

describe('render', () => {
	describe('success is true', () => {
		let wrapper;
		beforeEach(() => {
			wrapper = setup(true);
		});
		test('renders without errors', () => {
			const component = findByTestAttr(wrapper, 'input-comp');
			expect(component.length).toBe(1);
		});
		test('input does not show', () => {
			const inputBox = findByTestAttr(wrapper, 'input-box');
			expect(inputBox.exists()).toBe(false);
		});
		test('submit button does not show', () => {
			const submitButton = findByTestAttr(wrapper, 'submit-button');
			expect(submitButton.exists()).toBe(false);
		});
	});
	describe('success is false', () => {
		let wrapper;
		beforeEach(() => {
			wrapper = setup(false);
		});
		test('renders without errors', () => {
			const component = findByTestAttr(wrapper, 'input-comp');
			expect(component.length).toBe(1);
		});
		test('input shows', () => {
			const inputBox = findByTestAttr(wrapper, 'input-box');
			expect(inputBox.exists()).toBe(true);
		});
		test('submit button shows', () => {
			const submitButton = findByTestAttr(wrapper, 'submit-button');
			expect(submitButton.exists()).toBe(true);
		});
	});
});




test('does not warning with expected props', () => {
	checkProps(Input, { secretWord: 'secret' });
});

describe('state controlled input field', () => {

	let wrapper;
	beforeEach(() => {
		mockSetCurrentGuess.mockClear();
		wrapper = setup();
	});

	test('updates when input changed', () => {
		const input = findByTestAttr(wrapper, 'input-box');
		const mockEvent = { target: { value: 'train' } };
		input.simulate('change', mockEvent);

		expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
	});

	test('field is cleared upon submit button click', () => {
		const button = findByTestAttr(wrapper, 'submit-button');
		button.simulate('click', { preventDefault() {} });

		expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
	});
});