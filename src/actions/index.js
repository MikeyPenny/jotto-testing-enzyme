import axios from 'axios';

export const getSecretWord = async () => {
	try {
		const response = await axios.get('http://localhost:3030');
		return response.data;
	} catch (err) {
		return err;
	}
};
