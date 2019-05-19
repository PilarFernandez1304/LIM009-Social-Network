import { firebasemock, mockstorage, mocksdk} from '../_mocks_/firebase-mock.js';
// MockStorageReference = firebase.storage().ref()

global.firebase = mocksdk;

import { uploadImage } from '../src/controller/wall.js';

describe('uploadImage', () => {
	it('Debería ser una función', () => {
		expect(typeof uploadImage).toBe('function');
	});
	it('Debería', () => {
		const image = 'File { name: "road.jpeg", lastModified: 1558152540000, webkitRelativePath: "", size: 50824, type: "image/jpeg" }'
		return uploadImage('17-05-2019', image).then((data) => console.log(data))
	})
})