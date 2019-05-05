import { firebasemock, mockauth, mockfirestore, mocksdk } from '../_mocks_/firebase-mock.js';
mockauth.autoFlush();
global.firebase = mocksdk;

import { emailSignUp, signUpFacebook, signUpGoogle } from '../controller/signup.js';

describe('register', () => {
	it('Debería ser una función', () => {
		expect(typeof emailSignUp).toBe('function');
	})
	it('Debería registrarse con email: abc@mail.com y password: 123456', () => {
		return register('abc@mail.com', '123456')
		.then((user) => {
			expect(user.email).toBe('abc@mail.com');
		})
	});
})
describe('signUpFacebook', () => {
	it('Debería ser una función', () => {
		expect(typeof authFacebook).toBe('function');
	})
	it('Debería registrarse con facebook', () => {
		const expected = [{"providerId": "facebook.com"}];
		return signUpFacebook().then((data) => {
			expect(mockauth.getAuth().isAnonymous).toBe(false);
			expect(mockauth.getAuth().providerData).toEqual(expect.arrayContaining(expected));
		});
	});
});

describe('authGmail', () => {
	it('Debería ser una función', () => {
		expect(typeof authGmail).toBe('function');
	})
	it('Debería registrarse con google', () => {
		const expected = [{"providerId": "google.com"}];
		return  signUpGoogle().then((data) => {
			expect(mockauth.getAuth().isAnonymous).toBe(false);
			expect(mockauth.getAuth().providerData).toEqual(expect.arrayContaining(expected));
		});
	});
});

