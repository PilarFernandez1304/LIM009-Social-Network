import { firebasemock, mockauth, mockfirestore, mocksdk } from '../_mocks_/firebase-mock.js';
mockauth.autoFlush();

global.firebase = mocksdk;

import { emailLogIn, authFacebook, authGmail } from '../src/controller/login.js';

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
		const expected = [{"providerId": "facebook.com"}];
		return authFacebook().then((data) => {
			expect(mockauth.getAuth().isAnonymous).toBe(false);
			expect(mockauth.getAuth().providerData).toEqual(expect.arrayContaining(expected));
		});
	});
});

describe('authGmail', () => {
	it('Debería ser una función', () => {
		expect(typeof authGmail).toBe('function');
	})
	it('Debería iniciar sesión con google', () => {
		const expected = [{"providerId": "google.com"}];
		return authGmail().then((data) => {
			expect(mockauth.getAuth().isAnonymous).toBe(false);
			expect(mockauth.getAuth().providerData).toEqual(expect.arrayContaining(expected));
		});
	});
});
