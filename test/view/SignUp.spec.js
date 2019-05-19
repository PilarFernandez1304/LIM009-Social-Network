import { mockauth, mocksdk } from '../../_mocks_/firebase-mock.js';
mockauth.autoFlush();

global.firebase = mocksdk;

import { signUp,  signUpOnClick } from '../../src/view/Signup.js';

describe('SignUp', () => {
	beforeEach(() => {
		document.body.appendChild(signUp());
		const errorContainer = document.createElement('div')
		errorContainer.setAttribute('id', 'error-message')
		document.body.appendChild(errorContainer)
	})
	it('Evento click de boton registrar funciona', () => {
		const emailInput = document.getElementById('email-register');
		emailInput.value = 'email@email.com';
		const passwordInput = document.getElementById('password-register');
		passwordInput.value = '12345678';
		const signupBtn = document.getElementById('sign-in-btn');
		signupBtn.dispatchEvent(new Event('click'));
		const currUser = firebase.auth().currentUser;
		expect(currUser.email).toBe('email@email.com');
	})
})

