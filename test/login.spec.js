import { firebasemock, mockauth, mockfirestore, mocksdk } from '../_mocks_/firebase-mock.js';
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = mocksdk;

import { emailLogIn } from '../src/controller/login.js';

describe('emailLogIn', () => {
	it('Debería iniciar sesión con email: abc@mail.com y password: 123456', () => {
		return emailLogIn('abc@mail.com', '123456')
		.then((user) => {
			expect(user.email).toBe('abc@mail.com');
		})
	});
})