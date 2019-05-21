import { mockauth, mocksdk } from '../_mocks_/firebase-mock.js';
mockauth.autoFlush();

global.firebase = mocksdk;

import register from '../src/controller/signup.js';

describe('register', () => {
	it('Debería ser una función', () => {
		expect(typeof register).toBe('function');
	})
	it('Debería iniciar sesión con email: abc@mail.com y password: 123456', () => {
		return register('abc@mail.com', '123456')
		.then((user) => {
			expect(user.email).toBe('abc@mail.com');
		})
	});
})
