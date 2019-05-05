import { mockauth, mocksdk } from '../../_mocks_/firebase-mock.js';
mockauth.autoFlush();

global.firebase = mocksdk;

import signup, { signUpOnClick } from '../../src/view/SignUp.js';

describe('SignUp', () => {
	beforeEach(() => {
		document.body.appendChild(signup());
	})
	it('Evento click de boton registrar funciona', () => {
		const emailInput = document.getElementById('email-register');
		emailInput.value = 'email@email.com';
		const passwordInput = document.getElementById('password-register');
		passwordInput.value = '12345678';
		const loginBtn = document.getElementById('sign-up-btn');
		loginBtn.dispatchEvent(new Event('click'));
		const currUser = firebase.auth().currentUser;
		expect(currUser.email).toBe('email@email.com');
	})
})