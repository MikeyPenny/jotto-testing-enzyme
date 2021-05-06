import React from 'react';
import Input from './Input';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';

const setup = (props = {}) => {
	return shallow(<Input />);
};

test('renders without errors', () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, 'input-comp');
	expect(component.length).toBe(1);
});
