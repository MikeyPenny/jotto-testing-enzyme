import moxios from 'moxios';
import { getSecretWord } from './index';

describe('getSecretWord', () => {
	beforeEach(() => {
		moxios.install();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	test('secret word is returned', async () => {
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: 'party',
			});
		});

		try {
			const secretWord = await getSecretWord();
			return expect(secretWord).toBe('train');
		} catch (err) {
			return err;
		}
	});
});
