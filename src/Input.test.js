import React from 'react';
import Input from './Input';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';

const setup = (secretWord = 'nelson') => {
	return shallow(<Input secretWord={secretWord} />);
};

test('renders without errors', () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, 'input-comp');
	expect(component.length).toBe(1);
});


test('does not warning with expected props', () => {
	checkProps(Input, { secretWord: 'secret' });
});

// Test useState
// Create a function to mock useState

describe('state controlled input field', () => {
	test('updates when input changed', () => {
		const mockSetCurrentGuess = jest.fn();
		React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

		const wrapper = setup();
		const input = findByTestAttr(wrapper, 'input-box');
		const mockEvent = { target: { value: 'train' } };
		input.simulate('change', mockEvent);

		expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
	});
});