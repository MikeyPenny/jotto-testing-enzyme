/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute for search
 */
export const findByTestAttr = (wrapper, value) => {
	return wrapper.find(`[data-test='${value}']`);
};
