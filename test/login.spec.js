import { firebasemock, mockauth, mockfirestore, mocksdk } from '../_mocks_/firebase-mock.js';
mockauth.autoFlush();

global.firebase = mocksdk;

import { emailLogIn, authFacebook } from '../src/controller/login.js';

describe('emailLogIn', () => {
	it('Debería ser una función', () => {
		expect(typeof emailLogIn).toBe('function');
	})
	it('Debería iniciar sesión con email: abc@mail.com y password: 123456', () => {
		return emailLogIn('abc@mail.com', '123456')
		.then((user) => {
			expect(user.email).toBe('abc@mail.com');
		})
	});
})

describe('authFacebook', () => {
	it('Debería ser una función', () => {
		expect(typeof authFacebook).toBe('function');
	})
	it('Debería iniciar sesión con facebook', () => {
		mockauth.changeAuthState({
  uid: 'BqWFRdKM8uNvYMk1wMA8L7LMxky2',
  provider: 'facebook',
  token: 'theToken',
  expires: Math.floor(new Date() / 1000) + 24 * 60 * 60, // expire in 24 hours
  auth: {
    myAuthProperty: true
  }
});
  return authFacebook(mockauth.getAuth())
    .then((user) => {
	expect(user.providerData[0].providerId).toBe('facebook.com');
	})
});
})
