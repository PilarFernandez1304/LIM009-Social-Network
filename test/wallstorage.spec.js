import { mocksdk } from '../_mocks_/firebase-mock.js';
// MockStorageReference = firebase.storage().ref()

global.firebase = mocksdk;

import { uploadImage } from '../src/controller/wall.js';

describe('uploadImage', () => {
	it('Debería ser una función', () => {
		expect(typeof uploadImage).toBe('function');
	});
	it('Debería', (done) => {
		const image = new File([], 'test-image.jpg')
		return uploadImage('17-05-2019', image).then((data) => {
			expect(data.path).toBe('images/17-05-2019-test-image.jpg')
			done()
		})
	})
})