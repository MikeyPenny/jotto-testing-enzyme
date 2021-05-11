import { getLetterMatchCount } from './index';

describe('etLetterMatchCount', () => {
	const secretWord = 'party';
	test('returns correct count for no matching letters', () => {
		const letterMatchCount = getLetterMatchCount('bones', secretWord);
		expect(letterMatchCount).toBe(0);
	});
	test('returns the correct count for 3 matching letters', () => {
		const letterMatchCount = getLetterMatchCount('train', secretWord);
		expect(letterMatchCount).toBe(3);
	});
	test('returns correct count for duplicated letters', () => {
		const letterMatchCount = getLetterMatchCount('parka', secretWord);
		expect(letterMatchCount).toBe(3);
	});
});
