import checkPropTypes from "check-prop-types";

/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute for search
 */
export const findByTestAttr = (wrapper, value) => {
	return wrapper.find(`[data-test='${value}']`);
};

export const checkProps = (component, performingProps) => {
    const propError = checkPropTypes(component.propTypes, performingProps, 'prop', component.name);
    expect(propError).toBeUndefined();
};